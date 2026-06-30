/* internal import */
const Product = require("../models/product.model");
const Category = require("../models/category.model");
const remove = require("../utils/remove.util");
const Review = require("../models/review.model");
const User = require("../models/user.model");
const Variation = require("../models/variation.model");
const ProductTranslation = require("../models/productTranslation.model");
const CampaignTranslation = require("../models/campaignTranslation.model");
const { generateSlug, generateSeoFields } = require("../utils/seoUtils");
const translateFields = require("../utils/translateFields");
const Campaign = require("../models/campaign.model");
const generateQRCodesForVariation = require("../utils/generateQRCodes");
const {
  buildTranslationDocs,
  buildTranslationInfos
} = require("../utils/translationDocs");
const { translate } = require("google-translate-api-x");
const {
  normalizeLanguage,
  DEFAULT_LANGUAGE,
  SUPPORTED_LANGUAGES
} = require("../utils/languages");

const defaultDomain = process.env.NEXT_PUBLIC_CLIENT_URL;

function getProductFilterParams(query = {}) {
  if (query.filters && typeof query.filters === "object") {
    return query.filters;
  }

  return Object.entries(query).reduce((filters, [queryKey, value]) => {
    const rangeMatch = queryKey.match(/^filters\[([^\]]+)\]\[(min|max)\]$/);
    if (rangeMatch) {
      const [, key, bound] = rangeMatch;
      filters[key] = {
        ...(filters[key] && typeof filters[key] === "object" && !Array.isArray(filters[key])
          ? filters[key]
          : {}),
        [bound]: value
      };
      return filters;
    }

    const valueMatch = queryKey.match(/^filters\[([^\]]+)\]$/);
    if (valueMatch) {
      const [, key] = valueMatch;
      filters[key] = value;
    }

    return filters;
  }, {});
}

function parseJsonObject(value, fallback = {}) {
  if (!value) return fallback;
  if (typeof value === "object") return value;

  try {
    const parsed = JSON.parse(value);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed)
      ? parsed
      : fallback;
  } catch {
    return fallback;
  }
}

function parseJsonArray(value, fallback = []) {
  if (!value) return fallback;
  if (Array.isArray(value)) return value;

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : fallback;
  } catch {
    return fallback;
  }
}

function normalizeIngredients(value) {
  return parseJsonArray(value)
    .map((item) => String(item || "").trim())
    .filter(Boolean);
}

function normalizeProductAttributes(value) {
  return parseJsonArray(value)
    .map((item, index) => {
      const label = String(item.label || "").trim();
      const rawKey = String(item.key || label || "")
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9_]+/g, "_")
        .replace(/^_+|_+$/g, "");
      const key = /^[a-z]/.test(rawKey) ? rawKey : `attribute_${index + 1}`;

      return {
        attribute: item.attribute || item.attributeId || undefined,
        key,
        label,
        value: item.value,
        isComparable: item.isComparable !== false,
        sortOrder: Number(item.sortOrder) || index
      };
    })
    .filter((item) => item.attribute && item.label && item.value !== undefined && item.value !== "");
}

function attributesToLegacyFeatures(attributes = []) {
  return attributes.map((attribute) => ({
    icon: "",
    title: attribute.label,
    content: [String(attribute.value)]
  }));
}

function hasNestedTranslationValues(value) {
  if (!value) return false;
  if (typeof value === "string") return Boolean(value.trim());
  if (Array.isArray(value)) return value.some(hasNestedTranslationValues);
  if (typeof value === "object") {
    return Object.values(value).some(hasNestedTranslationValues);
  }
  return false;
}

function normalizeIngredientTranslations(translations, fallbackIngredients = []) {
  const normalized = {};

  for (const language of SUPPORTED_LANGUAGES) {
    if (language === DEFAULT_LANGUAGE) continue;
    const values = Array.isArray(translations?.[language])
      ? translations[language]
      : [];

    normalized[language] = fallbackIngredients.map((ingredient, index) => {
      const translated = String(values[index] || "").trim();
      return translated || ingredient;
    });
  }

  return normalized;
}

function normalizeAttributeTranslations(translations, fallbackAttributes = []) {
  const normalized = {};

  for (const language of SUPPORTED_LANGUAGES) {
    if (language === DEFAULT_LANGUAGE) continue;
    const values = Array.isArray(translations?.[language])
      ? translations[language]
      : [];

    normalized[language] = fallbackAttributes.map((attribute, index) => {
      const translated = values[index] || {};
      return {
        ...attribute,
        label:
          typeof translated.label === "string" && translated.label.trim()
            ? translated.label.trim()
            : attribute.label,
        value:
          typeof translated.value === "string" && translated.value.trim()
            ? translated.value.trim()
            : attribute.value
      };
    });
  }

  return normalized;
}

function hasDashboardProductTranslations(translations) {
  if (!translations || typeof translations !== "object") return false;

  return SUPPORTED_LANGUAGES.filter((language) => language !== DEFAULT_LANGUAGE)
    .some((language) => {
      const fields = translations[language];
      return (
        fields &&
        typeof fields === "object" &&
        ["title", "summary", "description"].some(
          (field) => typeof fields[field] === "string" && fields[field].trim()
        )
      );
    });
}

function isRequiredTranslationFilled(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function validateRequiredProductTranslations({
  productTranslations,
  ingredientTranslations,
  attributeTranslations,
  ingredients,
  attributes,
}) {
  const missing = [];
  const requiredProductFields = ["title", "summary", "description"];
  const requiredLanguages = SUPPORTED_LANGUAGES.filter(
    (language) => language !== DEFAULT_LANGUAGE
  );

  for (const language of requiredLanguages) {
    for (const field of requiredProductFields) {
      if (!isRequiredTranslationFilled(productTranslations?.[language]?.[field])) {
        missing.push(`productTranslations.${language}.${field}`);
      }
    }

    const languageIngredients = Array.isArray(ingredientTranslations?.[language])
      ? ingredientTranslations[language]
      : [];
    ingredients.forEach((_, index) => {
      if (!isRequiredTranslationFilled(languageIngredients[index])) {
        missing.push(`ingredientTranslations.${language}.${index}`);
      }
    });

    const languageAttributes = Array.isArray(attributeTranslations?.[language])
      ? attributeTranslations[language]
      : [];
    attributes.forEach((_, index) => {
      if (!isRequiredTranslationFilled(languageAttributes[index]?.value)) {
        missing.push(`attributeTranslations.${language}.${index}.value`);
      }
    });
  }

  if (missing.length) {
    const error = new Error("لطفاً همه فیلدهای ترجمه محصول را کامل کنید");
    error.statusCode = 400;
    error.missingFields = missing;
    throw error;
  }
}

function buildRequiredProductTranslationFields(product, overrides = {}) {
  const fallback = String(
    overrides.title ||
      overrides.summary ||
      overrides.description ||
      product?.title ||
      ""
  ).trim();

  return {
    title: String(overrides.title || product?.title || fallback).trim(),
    summary: String(overrides.summary || fallback).trim(),
    description: String(overrides.description || fallback).trim(),
    ...overrides,
  };
}

function buildDashboardProductTranslations({
  providedTranslations,
  ingredientTranslations,
  attributeTranslations,
  title,
  summary,
  description,
  slug,
  metaTitle,
  metaDescription,
  canonicalUrl,
  features,
  ingredients,
  attributes,
}) {
  const translations = {
    [DEFAULT_LANGUAGE]: {
      fields: {
        title,
        summary,
        description,
        slug,
        metaTitle,
        metaDescription,
        canonicalUrl,
        features,
        ingredients,
        attributes,
      },
    },
  };

  for (const language of SUPPORTED_LANGUAGES) {
    if (language === DEFAULT_LANGUAGE) continue;

    const fields = providedTranslations?.[language] || {};
    const translatedTitle =
      typeof fields.title === "string" ? fields.title.trim() : "";
    const translatedSummary =
      typeof fields.summary === "string" ? fields.summary.trim() : "";
    const translatedDescription =
      typeof fields.description === "string" ? fields.description.trim() : "";
    const translatedIngredients = ingredientTranslations?.[language] || ingredients;
    const translatedAttributes = attributeTranslations?.[language] || attributes;
    const translatedFeatures = translatedAttributes?.length
      ? attributesToLegacyFeatures(translatedAttributes)
      : features;

    if (
      !translatedTitle &&
      !translatedSummary &&
      !translatedDescription &&
      !hasNestedTranslationValues(translatedIngredients) &&
      !hasNestedTranslationValues(translatedAttributes)
    ) {
      continue;
    }

    translations[language] = {
      fields: {
        title: translatedTitle || title,
        summary: translatedSummary || summary,
        description: translatedDescription || description,
        slug,
        metaTitle: translatedTitle || metaTitle,
        metaDescription: translatedSummary || metaDescription,
        canonicalUrl,
        features: translatedFeatures,
        ingredients: translatedIngredients,
        attributes: translatedAttributes,
      },
    };
  }

  return translations;
}

/* add new product */
exports.translateText = async (req, res) => {
  try {
    const { text, to = "en" } = req.body;
    const targetLanguage = normalizeLanguage(to);

    if (!text || typeof text !== "string" || text.trim().length < 2) {
      return res.status(400).json({
        acknowledgement: false,
        message: "Bad Request",
        description: "متن برای ترجمه معتبر نیست"
      });
    }

    const result = await translate(text.trim(), {
      to: targetLanguage === DEFAULT_LANGUAGE ? "en" : targetLanguage
    });

    return res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "ترجمه با موفقیت انجام شد",
      data: {
        text: result.text
      }
    });
  } catch (error) {
    return res.status(500).json({
      acknowledgement: false,
      message: "Translation Error",
      description: "خطا در ترجمه خودکار",
      error: error.message
    });
  }
};

exports.addProduct = async (req, res) => {
  try {
    const {
      title,
      titleEn,
      description,
      summary,
      features,
      campaign,
      variations,
      category,
      filterValues,
      ingredients,
      attributes,
      ingredientTranslations,
      attributeTranslations,
      productTranslations,
      tags,
      ...otherInformation
    } = req.body;
    let thumbnail = null;
    let gallery = [];
    const parsedIngredients = normalizeIngredients(ingredients);
    const parsedAttributes = normalizeProductAttributes(attributes);
    const parsedFeatures = parsedAttributes.length
      ? attributesToLegacyFeatures(parsedAttributes)
      : JSON.parse(features);
    const parsedCampaign = JSON.parse(campaign);
    const parsedVariations = JSON.parse(variations);
    const parsedTags = JSON.parse(tags);
    const parsedFilterValues = parseJsonObject(filterValues);
    const parsedProductTranslations = parseJsonObject(productTranslations, {});
    const rawIngredientTranslations = parseJsonObject(ingredientTranslations, {});
    const rawAttributeTranslations = parseJsonObject(attributeTranslations, {});
    const parsedIngredientTranslations = normalizeIngredientTranslations(
      rawIngredientTranslations,
      parsedIngredients
    );
    const parsedAttributeTranslations = normalizeAttributeTranslations(
      rawAttributeTranslations,
      parsedAttributes
    );

    validateRequiredProductTranslations({
      productTranslations: parsedProductTranslations,
      ingredientTranslations: rawIngredientTranslations,
      attributeTranslations: rawAttributeTranslations,
      ingredients: parsedIngredients,
      attributes: parsedAttributes,
    });

    const hasDashboardTranslations =
      hasDashboardProductTranslations(parsedProductTranslations) ||
      hasNestedTranslationValues(rawIngredientTranslations) ||
      hasNestedTranslationValues(rawAttributeTranslations);
    const manualEnglishTitle =
      typeof titleEn === "string" ? titleEn.trim() : "";

    const resultCampaign = await Campaign.create({
      title: parsedCampaign.title,
      state: parsedCampaign.state
    });

    try {
      const translations = await translateFields(
        {
          title: parsedCampaign.title
        },
        {
          stringFields: ["title"]
        }
      );
      const translationDocs = buildTranslationDocs(
        translations,
        "campaign",
        resultCampaign._id
      );
      const insertedTranslations = await CampaignTranslation.insertMany(translationDocs);

      const translationInfos = buildTranslationInfos(insertedTranslations);
      await Campaign.findByIdAndUpdate(resultCampaign._id, {
        $set: { translations: translationInfos }
      });
    } catch (translationError) {
      console.log(translationError.message);
      await Campaign.findByIdAndDelete(resultCampaign._id);
      return res.status(500).json({
        acknowledgement: false,
        message: "Translation Save Error",
        description: "خطا در ذخیره ترجمه‌ها. کمپین حذف شد.",
        error: translationError.message
      });
    }

    if (req.uploadedFiles["thumbnail"].length) {
      thumbnail = {
        url: req.uploadedFiles["thumbnail"][0].url,
        public_id: req.uploadedFiles["thumbnail"][0].key
      };
    }

    if (
      req.uploadedFiles["gallery"] &&
      req.uploadedFiles["gallery"].length > 0
    ) {
      gallery = req.uploadedFiles["gallery"].map((file) => ({
        url: file.url,
        public_id: file.key
      }));
    }

    const product = await Product.create({
      ...otherInformation,
      title: title,
      tags: parsedTags,
      creator: req.admin._id,
      thumbnail,
      category,
      filterValues: parsedFilterValues,
      ingredients: parsedIngredients,
      attributes: parsedAttributes,
      gallery,
      campaign: resultCampaign._id
    });

    const variationDocs = await Promise.all(
      parsedVariations.map(async (variation) => {
        const createdVariation = await Variation.create({
          ...variation,
          product: product._id
        });

        await generateQRCodesForVariation(createdVariation);

        return createdVariation;
      })
    );
    product.variations = variationDocs.map((v) => v._id);
    const result = await product.save();
    const slug = await generateSlug(title);
    const canonicalUrl = `${defaultDomain}/product/${result.productId}/${slug}`;
    const productCategory = await Category.findById(category).select("title");
    const { metaTitle, metaDescription } = generateSeoFields({
      title,
      summary,
      categoryTitle: productCategory?.title
    });
    await Campaign.findByIdAndUpdate(resultCampaign._id, {
      $push: { products: result._id }
    });

    await Category.findByIdAndUpdate(product.category, {
      $push: { products: product._id }
    });
    try {
      const translations = hasDashboardTranslations
        ? buildDashboardProductTranslations({
            providedTranslations: parsedProductTranslations,
            ingredientTranslations: parsedIngredientTranslations,
            attributeTranslations: parsedAttributeTranslations,
            title,
            summary,
            description,
            slug,
            metaTitle,
            metaDescription,
            canonicalUrl,
            features: parsedFeatures,
            ingredients: parsedIngredients,
            attributes: parsedAttributes,
          })
        : await translateFields(
            {
              title,
              summary,
              description,
              slug,
              metaTitle,
              metaDescription,
              canonicalUrl,
              features: parsedFeatures,
              ingredients: parsedIngredients,
              attributes: parsedAttributes
            },
            {
              stringFields: [
                "title",
                "summary",
                "description",
                "metaTitle",
                "metaDescription"
              ],
              copyFields: ["canonicalUrl", "attributes"],
              lowercaseFields: ["slug"],
              arrayStringFields: ["ingredients"],
              arrayObjectFields: ["features"]
            }
          );
      if (manualEnglishTitle) {
        translations.en = translations.en || { fields: {} };
        translations.en.fields.title = manualEnglishTitle;
      }
      const translationDocs = buildTranslationDocs(
        translations,
        "product",
        result._id
      );
      const insertedTranslations = await ProductTranslation.insertMany(
        translationDocs
      );

      const translationInfos = buildTranslationInfos(insertedTranslations);
      await Product.findByIdAndUpdate(result._id, {
        $set: { translations: translationInfos }
      });

      return res.status(201).json({
        acknowledgement: true,
        message: "Created",
        description: "محصول با موفقیت ایجاد و ترجمه شد.",
        data: result
      });
    } catch (translationError) {
      console.log(translationError.message);
      await Product.findByIdAndDelete(result._id);
      await Campaign.findByIdAndDelete(resultCampaign._id);

      return res.status(500).json({
        acknowledgement: false,
        message: "Translation Save Error",
        description: "خطا در ذخیره ترجمه‌ها. محصول حذف شد.",
        error: translationError.message
      });
    }
  } catch (error) {
    console.error("Error in addCategory:", error.message);
    const statusCode = error.statusCode || 500;
    res.status(statusCode).json({
      acknowledgement: false,
      message: statusCode === 400 ? "Bad Request" : "Error",
      description: error.message,
      missingFields: error.missingFields,
      error: error.message
    });
  }
};

/* get all products */
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({ isDeleted: false })
      .sort({ createdAt: -1 })
      .select(
        "title thumbnail discountAmount campaign gallery status summary productId _id createdAt creator translations"
      )
      .populate([
        {
          path: "translations.translation",
          match: { language: req.locale },
          select: "title summary slug metaTitle metaDescription canonicalUrl language"
        },
        {
          path: "campaign",
          populate: {
            path: "translations.translation",
            match: { language: req.locale },
            select: "title language"
          },
          select: "state translations"
        },
        {
          path: "category",
          populate: {
            path: "translations.translation",
            match: { language: req.locale },
            select: "title language"
          },
          select: "translations"
        },

        {
          path: "variations",
          select: "price priceHistory stock unit lowStockThreshold",
          populate: {
            path: "unit",
            select: "title value"
          }
        }
      ]);
    res.status(200).json({
      acknowledgement: true,
      message: "Ok",
      description: "دریافت محصولات با موفقیت انجام شد",
      data: products
    });
  } catch (error) {
    console.error("Error in getProducts:", error.message);
    res.status(500).json({
      acknowledgement: false,
      message: "Server Error",
      description: "خطا در دریافت محصولات",
      error: error.message
    });
  }
};

exports.getDetailsProducts = async (req, res) => {
  const products = await Product.find({
    isDeleted: false,
    publishStatus: "approved",
    status: "active"
  })
    .select(
      "title thumbnail slug status discountAmount summary productId _id createdAt creator campaign gallery variations"
    )
    .populate([
      {
        path: "translations.translation",
        match: { language: req.locale },
        select: "title summary slug language"
      },
      {
        path: "campaign",
        populate: {
          path: "translations.translation",
          match: { language: req.locale },
          select: "title language"
        },
        select: "state translations"
      },
      {
        path: "category",
        select: "title"
      },
      {
        path: "variations",
        select: "price priceHistory stock unit lowStockThreshold",
        populate: {
          path: "unit",
          select: "title value"
        }
      }
    ]);
  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "دریافت محصولات با موفقیت انجام شد",
    data: products
  });
};

 exports.getProduct = async (req, res) => {
  try {
    const productId = parseInt(req.params.id, 10);


    const product = await Product.findOne({ productId })
      .populate("category")
      .populate([
        {
          path: "translations.translation",
          match: { language: req.locale },
          select:
            "title summary features description slug metaTitle metaDescription canonicalUrl language"
        },
        {
          path: "campaign",
          populate: {
            path: "translations.translation",
            match: { language: req.locale },
            select: "title language"
          },
          select: "state translations"
        },
        {
          path: "category",
          populate: {
            path: "translations.translation",
            match: { language: req.locale },
            select: "title keynotes language"
          },
          select: "translations"
        },
        {
          path: "reviews"
        },
        {
          path: "tags",
          populate: {
            path: "translations.translation",
            match: { language: req.locale },
            select: "title keynotes language"
          },
          select: "translations"
        },
        {
          path: "variations",
          select: "price priceHistory stock unit lowStockThreshold",
          populate: {
            path: "unit",
            populate: {
              path: "translations.translation",
              match: { language: req.locale },
              select: "title description language"
            },
            select: "title value"
          }
        }
      ]);

    if (!product) {
      console.log("❌ محصولی با این آیدی پیدا نشد");
    } else {
      console.log("✅ محصول پیدا شد:", product._id);
    }

    res.status(200).json({
      acknowledgement: true,
      message: "Ok",
      description: "محصول با موفقیت دریافت شد",
      data: product
    });
  } catch (error) {
    console.error("❗ خطا در دریافت محصول:", error.message);
    res.status(500).json({
      acknowledgement: false,
      message: "خطایی رخ داد",
      description: error.message
    });
  }
};

// get cart proct
exports.getProductCart = async (req, res) => {
  try {
    const query = req.query.query;
    const parsedProducts = JSON.parse(query);
    const products = await Promise.all(
      parsedProducts.map(async (item) => {
        return await Product.findOne(
          { _id: item.product },
          {
            title: 1,
            thumbnail: 1,
            variations: { $elemMatch: { unit: item.unit } }
          }
        )
          .populate("variations.unit", "title")
          .lean();
      })
    );
    const filteredProducts = products.filter((product) => product);

    const finalProducts = filteredProducts.map((product) => ({
      _id: product._id,
      title: product.title,
      thumbnail: product.thumbnail,
      variations: product.variations.map((variation) => ({
        unit: variation.unit?.title,
        price: variation.price
      }))
    }));
    res.status(200).json({
      acknowledgement: true,
      message: "Ok",
      description: "محصولات با موفقیت دریافت شدند",
      data: finalProducts
    });
  } catch (error) {
    res.status(500).json({
      acknowledgement: false,
      message: "خطایی رخ داد",
      description: error.message
    });
  }
};

/* filtered products */
exports.getFilteredProducts = async (req, res) => {
  try {
    let filter = {
      isDeleted: false,
      publishStatus: "approved",
      status: "active"
    };

    if (req.query.category && req.query.category !== "null") {
      filter.category = req.query.category;
    }

    const customFilters = getProductFilterParams(req.query);
    Object.entries(customFilters).forEach(([key, value]) => {
      const path = `filterValues.${key}`;

      if (Array.isArray(value)) {
        filter[path] = { $in: value };
        return;
      }

      if (value && typeof value === "object") {
        const range = {};
        if (value.min !== undefined && value.min !== "") range.$gte = Number(value.min);
        if (value.max !== undefined && value.max !== "") range.$lte = Number(value.max);
        if (Object.keys(range).length) filter[path] = range;
        return;
      }

      if (value !== undefined && value !== "") {
        filter[path] = value === "true" ? true : value === "false" ? false : value;
      }
    });

    let products = await Product.find(filter).populate(["variations"]);

    const minPrice = Number(req.query.minPrice);
    const maxPrice = Number(req.query.maxPrice);
    if (!Number.isNaN(minPrice) || !Number.isNaN(maxPrice)) {
      products = products.filter((product) =>
        (product.variations || []).some((variation) => {
          const price = Number(variation.price);
          if (Number.isNaN(price)) return false;
          if (!Number.isNaN(minPrice) && price < minPrice) return false;
          if (!Number.isNaN(maxPrice) && price > maxPrice) return false;
          return true;
        })
      );
    }

    res.status(200).json({
      acknowledgement: true,
      message: "Ok",
      description: "محصولات با موفقیت دریافت شد",
      data: products
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      acknowledgement: false,
      message: "Internal Server Error",
      description: "Failed to fetch filtered products",
      error: error.message
    });
  }
};

/* update product */
exports.updateProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  const updatedProduct = req.body;

  if (!req.body.thumbnail && req.files && req.files.thumbnail?.length > 0) {
    remove(product.thumbnail.public_id);

    updatedProduct.thumbnail = {
      url: req.files.thumbnail[0].path,
      public_id: req.files.thumbnail[0].filename
    };
  }

  if (
    !req.body.gallery?.length > 0 &&
    req.files &&
    req.files.gallery?.length > 0
  ) {
    for (let i = 0; i < product.gallery.length; i++) {
      await remove(product.gallery[i].public_id);
    }

    updatedProduct.gallery = req.files.gallery.map((file) => ({
      url: file.path,
      public_id: file.filename
    }));
  }

  updatedProduct.features = JSON.parse(req.body.features);
  updatedProduct.campaign = JSON.parse(req.body.campaign);
  updatedProduct.variations = JSON.parse(req.body.variations);
  if (Object.prototype.hasOwnProperty.call(req.body, "filterValues")) {
    updatedProduct.filterValues = parseJsonObject(req.body.filterValues);
  }
  if (Object.prototype.hasOwnProperty.call(req.body, "ingredients")) {
    updatedProduct.ingredients = normalizeIngredients(req.body.ingredients);
  }
  if (Object.prototype.hasOwnProperty.call(req.body, "attributes")) {
    updatedProduct.attributes = normalizeProductAttributes(req.body.attributes);
  }

  await Product.findByIdAndUpdate(req.params.id, { $set: updatedProduct });

  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "Product updated successfully"
  });
};

exports.updateApproveProduct = async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, {
    $set: { publishStatus: "approved" }
  });

  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "محصول با موفقت تایید و در صفحه اصلی سایت درج شد"
  });
};

exports.updateRejectProduct = async (req, res) => {
  const { rejectMessage } = req.body;
  if (!rejectMessage) {
    return res.status(400).json({
      acknowledgement: false,
      message: "پیام رد کردن الزامی است",
      description: "لطفا دلیل رد کردن محصول را وارد کنید"
    });
  }
  await Product.findByIdAndUpdate(req.params.id, {
    $set: { publishStatus: "reject", rejectMessage }
  });

  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "محصول با موفقت تایید و در صفحه اصلی سایت درج شد"
  });
};

exports.updateApproveProduct = async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, {
    $set: { publishStatus: "approved" }
  });

  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "محصول با موفقت تایید و در صفحه اصلی سایت درج شد"
  });
};

exports.updateStatusProduct = async (req, res) => {
  const findproduct = await Product.findById(req.params.id);
  if (!findproduct) {
    return res.status(404).json({
      acknowledgement: true,
      message: "محصول پیدا نشد",
      description: "محصول پیدا نشد"
    });
  }

  const newStatus = findproduct.status === "active" ? "inactive" : "active";
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    {
      status: newStatus,
      updatedAt: Date.now()
    },
    { new: true }
  );
  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "وضعیت محصول با موفقیت تغییر یافت"
  });
};

/* update individual field */
exports.updateProductField = async (req, res) => {
  try {
    const { field, value } = req.body;
    const productId = req.params.id; // This is the productId (number), not ObjectId
    
    // First find the product by productId to get the actual _id
    const product = await Product.findOne({ productId: parseInt(productId, 10) });
    if (!product) {
      return res.status(404).json({
        acknowledgement: false,
        message: "محصول پیدا نشد",
        description: "محصولی با این آیدی پیدا نشد"
      });
    }
    
    const mongoId = product._id; // Use the actual MongoDB ObjectId
    
    // For translation fields, update the translation document
    const translationFields = ['title', 'summary', 'description'];
    const directFields = ['discountAmount', 'isFeatured'];
    
    if (translationFields.includes(field)) {
      // Find the Persian translation (default language for dashboard)
      const persianTranslation = product.translations?.find(
        tr => tr.language === 'fa'
      );
      
      if (persianTranslation) {
        // Update the existing translation
        await ProductTranslation.findByIdAndUpdate(
          persianTranslation.translation,
          {
            $set: {
              [field]: value,
              updatedAt: Date.now()
            }
          },
          { new: true }
        );
      } else {
        // Create new translation if it doesn't exist
        const newTranslation = await ProductTranslation.create({
          ...buildRequiredProductTranslationFields(product, { [field]: value }),
          language: 'fa',
          product: mongoId,
        });
        
        // Add the translation reference to the product
        await Product.findByIdAndUpdate(mongoId, { // Use MongoDB ObjectId
          $push: {
            translations: {
              translation: newTranslation._id,
              language: 'fa'
            }
          }
        });
      }
      
      // Also update the direct field if it's title (for uniqueness constraint)
      if (field === 'title') {
        await Product.findByIdAndUpdate(mongoId, { // Use MongoDB ObjectId
          $set: { title: value, updatedAt: Date.now() }
        });
      }
      
    } else if (directFields.includes(field)) {
      // Update direct fields
      const updateData = {
        [field]: value,
        updatedAt: Date.now()
      };
      
      await Product.findByIdAndUpdate(
        mongoId, // Use MongoDB ObjectId
        { $set: updateData },
        { new: true }
      );
    } else {
      return res.status(400).json({
        acknowledgement: false,
        message: "فیلد غیرمجاز",
        description: "فیلد مورد نظر قابل ویرایش نیست"
      });
    }

    res.status(200).json({
      acknowledgement: true,
      message: "Ok",
      description: `${field} با موفقیت بروزرسانی شد`
    });
  } catch (error) {
    console.error('Error updating product field:', error);
    res.status(500).json({
      acknowledgement: false,
      message: "خطای سرور",
      description: error.message
    });
  }
};

/* update product features */
exports.updateProductFeatures = async (req, res) => {
  try {
    const { features } = req.body;
    const productId = req.params.id; // This is the productId (number), not ObjectId

    // First find the product by productId to get the actual _id
    const product = await Product.findOne({ productId: parseInt(productId, 10) });
    if (!product) {
      return res.status(404).json({
        acknowledgement: false,
        message: "محصول پیدا نشد",
        description: "محصولی با این آیدی پیدا نشد"
      });
    }
    
    const mongoId = product._id; // Use the actual MongoDB ObjectId
    
    // Find the Persian translation (default language for dashboard)
    const persianTranslation = product.translations?.find(
      tr => tr.language === 'fa'
    );
    
    if (persianTranslation) {
      // Update the existing translation
      await ProductTranslation.findByIdAndUpdate(
        persianTranslation.translation,
        {
          $set: {
            features,
            updatedAt: Date.now()
          }
        },
        { new: true }
      );
    } else {
      // Create new translation if it doesn't exist
      const newTranslation = await ProductTranslation.create({
        ...buildRequiredProductTranslationFields(product, { features }),
        language: 'fa',
        product: mongoId,
      });
      
      // Add the translation reference to the product
      await Product.findByIdAndUpdate(mongoId, { // Use MongoDB ObjectId
        $push: {
          translations: {
            translation: newTranslation._id,
            language: 'fa'
          }
        }
      });
    }

    res.status(200).json({
      acknowledgement: true,
      message: "Ok",
      description: "ویژگی‌های محصول با موفقیت بروزرسانی شد"
    });
  } catch (error) {
    console.error('Error updating product features:', error);
    res.status(500).json({
      acknowledgement: false,
      message: "خطای سرور",
      description: error.message
    });
  }
};

/* update product images */
exports.updateProductImages = async (req, res) => {
  try {
    const productId = req.params.id; // This is the productId (number), not ObjectId
    
    // First find the product by productId to get the actual _id
    const product = await Product.findOne({ productId: parseInt(productId, 10) });
    if (!product) {
      return res.status(404).json({
        acknowledgement: false,
        message: "محصول پیدا نشد",
        description: "محصولی با این آیدی پیدا نشد"
      });
    }
    
    const mongoId = product._id; // Use the actual MongoDB ObjectId
    const updateData = { updatedAt: Date.now() };

    // Update thumbnail if provided
    if (req.files && req.files.thumbnail && req.files.thumbnail.length > 0) {
      if (product.thumbnail && product.thumbnail.public_id) {
        await remove(product.thumbnail.public_id);
      }
      updateData.thumbnail = {
        url: req.files.thumbnail[0].path,
        public_id: req.files.thumbnail[0].filename
      };
    }

    // Update gallery if provided
    if (req.files && req.files.gallery && req.files.gallery.length > 0) {
      if (product.gallery && product.gallery.length > 0) {
        for (let i = 0; i < product.gallery.length; i++) {
          await remove(product.gallery[i].public_id);
        }
      }
      updateData.gallery = req.files.gallery.map((file) => ({
        url: file.path,
        public_id: file.filename
      }));
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      mongoId, // Use MongoDB ObjectId
      { $set: updateData },
      { new: true }
    );

    res.status(200).json({
      acknowledgement: true,
      message: "Ok",
      description: "تصاویر محصول با موفقیت بروزرسانی شد",
      data: updatedProduct
    });
  } catch (error) {
    console.error('Error updating product images:', error);
    res.status(500).json({
      acknowledgement: false,
      message: "خطای سرور",
      description: error.message
    });
  }
};

/* update product variation */
exports.updateProductVariation = async (req, res) => {
  try {
    const { variationId, price, stock, lowStockThreshold } = req.body;
    
    if (!variationId) {
      return res.status(400).json({
        acknowledgement: false,
        message: "شناسه وریاسیون الزامی است",
        description: "لطفاً شناسه وریاسیون را وارد کنید"
      });
    }

    const existingVariation = await Variation.findById(variationId).select("price");
    if (!existingVariation) {
      return res.status(404).json({
        acknowledgement: false,
        message: "وریاسیون پیدا نشد",
        description: "وریاسیونی با این آیدی پیدا نشد"
      });
    }

    const updateData = {
      updatedAt: Date.now()
    };
    const updateOperation = { $set: updateData };

    if (price !== undefined) {
      const nextPrice = Number(price);
      if (Number.isNaN(nextPrice) || nextPrice < 0) {
        return res.status(400).json({
          acknowledgement: false,
          message: "قیمت نامعتبر است",
          description: "لطفاً قیمت معتبر وارد کنید"
        });
      }

      updateData.price = nextPrice;

      if (Number(existingVariation.price) !== nextPrice) {
        updateOperation.$push = {
          priceHistory: {
            previousPrice: existingVariation.price,
            newPrice: nextPrice,
            changedBy: req.admin?._id || null,
            changedAt: new Date()
          }
        };
      }
    }
    if (stock !== undefined) updateData.stock = stock;
    if (lowStockThreshold !== undefined) updateData.lowStockThreshold = lowStockThreshold;

    const variation = await Variation.findByIdAndUpdate(
      variationId,
      updateOperation,
      { new: true }
    ).populate('unit', 'title value');

    if (!variation) {
      return res.status(404).json({
        acknowledgement: false,
        message: "وریاسیون پیدا نشد",
        description: "وریاسیونی با این آیدی پیدا نشد"
      });
    }

    res.status(200).json({
      acknowledgement: true,
      message: "Ok",
      description: "وریاسیون با موفقیت بروزرسانی شد",
      data: variation
    });
  } catch (error) {
    console.error('Error updating product variation:', error);
    res.status(500).json({
      acknowledgement: false,
      message: "خطای سرور",
      description: error.message
    });
  }
};

/* adjust stock quantity */
exports.adjustVariationStock = async (req, res) => {
  try {
    const { variationId, adjustment, operation } = req.body; // operation: 'increase' or 'decrease'
    
    if (!variationId || adjustment === undefined || !operation) {
      return res.status(400).json({
        acknowledgement: false,
        message: "پارامترهای الزامی کامل نیست",
        description: "لطفاً شناسه وریاسیون، مقدار تغییر و نوع عملیات را وارد کنید"
      });
    }

    const variation = await Variation.findById(variationId);
    if (!variation) {
      return res.status(404).json({
        acknowledgement: false,
        message: "وریاسیون پیدا نشد",
        description: "وریاسیونی با این آیدی پیدا نشد"
      });
    }

    const currentStock = variation.stock;
    let newStock;
    
    if (operation === 'increase') {
      newStock = currentStock + adjustment;
    } else if (operation === 'decrease') {
      newStock = Math.max(0, currentStock - adjustment); // Prevent negative stock
    } else {
      return res.status(400).json({
        acknowledgement: false,
        message: "نوع عملیات نامعتبر",
        description: "نوع عملیات باید 'increase' یا 'decrease' باشد"
      });
    }

    const updatedVariation = await Variation.findByIdAndUpdate(
      variationId,
      { 
        $set: { 
          stock: newStock,
          updatedAt: Date.now()
        }
      },
      { new: true }
    ).populate('unit', 'title value');

    res.status(200).json({
      acknowledgement: true,
      message: "Ok",
      description: `موجودی با موفقیت ${operation === 'increase' ? 'افزایش' : 'کاهش'} یافت`,
      data: {
        variation: updatedVariation,
        previousStock: currentStock,
        newStock: newStock,
        adjustment: adjustment,
        operation: operation
      }
    });
  } catch (error) {
    console.error('Error adjusting variation stock:', error);
    res.status(500).json({
      acknowledgement: false,
      message: "خطای سرور",
      description: error.message
    });
  }
};

/* delete product */
exports.deleteProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    {
      isDeleted: true,
      deletedAt: Date.now()
    },
    { new: true }
  );

  if (!product) {
    return res.status(404).json({
      acknowledgement: false,
      message: "محصول پیدا نشد",
      description: "محصولی که می‌خواهید حذف کنید، وجود ندارد"
    });
  }

  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "مصحول با موفقیت حذف شد"
  });
};
