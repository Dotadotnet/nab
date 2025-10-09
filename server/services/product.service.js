/* internal import */
const Product = require("../models/product.model");
const Category = require("../models/category.model");
const remove = require("../utils/remove.util");
const Review = require("../models/review.model");
const User = require("../models/user.model");
const Variation = require("../models/variation.model");
const Translation = require("../models/translation.model");
const { generateSlug, generateSeoFields } = require("../utils/seoUtils");
const translateFields = require("../utils/translateFields");
const Campaign = require("../models/campaign.model");
const generateQRCodesForVariation = require("../utils/generateQRCodes");

const defaultDomain = process.env.NEXT_PUBLIC_CLIENT_URL;

/* add new product */
exports.addProduct = async (req, res) => {
  try {
    const {
      title,
      description,
      summary,
      features,
      campaign,
      variations,
      category,
      tags,
      ...otherInformation
    } = req.body;
    let thumbnail = null;
    let gallery = [];
    const parsedFeatures = JSON.parse(features);
    const parsedCampaign = JSON.parse(campaign);
    const parsedVariations = JSON.parse(variations);
    const parsedTags = JSON.parse(tags);

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
      const translationDocs = Object.entries(translations).map(
        ([lang, { fields }]) => ({
          language: lang,
          refModel: "Campaign",
          refId: resultCampaign._id,
          fields
        })
      );
      const insertedTranslations = await Translation.insertMany(
        translationDocs
      );

      const translationInfos = insertedTranslations.map((t) => ({
        translation: t._id,
        language: t.language
      }));
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
    const { metaTitle, metaDescription } = generateSeoFields({
      title,
      summary,
      categoryTitle: await Category.findById(category).title
    });
    await Campaign.findByIdAndUpdate(resultCampaign._id, {
      $push: { products: result._id }
    });

    await Category.findByIdAndUpdate(product.category, {
      $push: { products: product._id }
    });
    try {
      const translations = await translateFields(
        {
          title,
          summary,
          description,
          slug,
          metaTitle,
          metaDescription,
          canonicalUrl,
          features: parsedFeatures
        },
        {
          stringFields: [
            "title",
            "summary",
            "description",
            "canonicalUrl",
            "metaTitle",
            "metaDescription"
          ],
          lowercaseFields: ["slug"],
          arrayObjectFields: ["features"]
        }
      );
      const translationDocs = Object.entries(translations).map(
        ([lang, { fields }]) => ({
          language: lang,
          refModel: "Product",
          refId: result._id,
          fields
        })
      );
      const insertedTranslations = await Translation.insertMany(
        translationDocs
      );

      const translationInfos = insertedTranslations.map((t) => ({
        translation: t._id,
        language: t.language
      }));
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
    res.status(500).json({
      acknowledgement: false,
      message: "Error",
      description: error.message,
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
          select: "fields.title fields.summary fields.slug language"
        },
        {
          path: "campaign",
          populate: {
            path: "translations.translation",
            match: { language: req.locale },
            select: "fields.title  language"
          },
          select: "state translations"
        },
        {
          path: "category",
          populate: {
            path: "translations.translation",
            match: { language: req.locale },
            select: "fields.title  language"
          },
          select: "translations"
        },

        {
          path: "variations",
          select: "price stock unit lowStockThreshold",
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

exports.getDetailsProducts = async (res) => {
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
        select: "fields.title fields.summary fields.slug language"
      },
      {
        path: "campaign",
        populate: {
          path: "translations.translation",
          match: { language: req.locale },
          select: "fields.title  language"
        },
        select: "state translations"
      },
      {
        path: "category",
        select: "title"
      },
      {
        path: "variations",
        select: "price stock unit lowStockThreshold",
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
            "fields.title fields.summary fields.features fields.description fields.slug language"
        },
        {
          path: "campaign",
          populate: {
            path: "translations.translation",
            match: { language: req.locale },
            select: "fields.title  language"
          },
          select: "state translations"
        },
        {
          path: "category",
          populate: {
            path: "translations.translation",
            match: { language: req.locale },
            select: "fields.title fields.keynotes  language"
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
            select: "fields.title fields.keynotes language"
          },
          select: "translations"
        },
        {
          path: "variations",
          select: "price stock unit lowStockThreshold",
          populate: {
            path: "unit",
            populate: {
              path: "translations.translation",
              match: { language: req.locale },
              select: "fields.title fields.description language"
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
  console.log("hs");
  try {
    let filter = {
      isDeleted: false,
      publishStatus: "approved",
      status: "active"
    };

    if (req.query.category != "null") {
      filter.category = req.query.category;
    }

    const products = await Product.find(filter).populate(["variations"]);

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
        await Translation.findByIdAndUpdate(
          persianTranslation.translation,
          {
            $set: {
              [`fields.${field}`]: value,
              updatedAt: Date.now()
            }
          },
          { new: true }
        );
      } else {
        // Create new translation if it doesn't exist
        const newTranslation = await Translation.create({
          language: 'fa',
          refModel: 'Product',
          refId: mongoId, // Use MongoDB ObjectId
          fields: {
            [field]: value
          }
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
      await Translation.findByIdAndUpdate(
        persianTranslation.translation,
        {
          $set: {
            'fields.features': features,
            updatedAt: Date.now()
          }
        },
        { new: true }
      );
    } else {
      // Create new translation if it doesn't exist
      const newTranslation = await Translation.create({
        language: 'fa',
        refModel: 'Product',
        refId: mongoId, // Use MongoDB ObjectId
        fields: {
          features: features
        }
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

    const updateData = {
      updatedAt: Date.now()
    };
    
    if (price !== undefined) updateData.price = price;
    if (stock !== undefined) updateData.stock = stock;
    if (lowStockThreshold !== undefined) updateData.lowStockThreshold = lowStockThreshold;

    const variation = await Variation.findByIdAndUpdate(
      variationId,
      { $set: updateData },
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
