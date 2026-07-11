const Magazine = require("../models/magazine.model");
const MagazineTranslation = require("../models/magazineTranslation.model");
const Product = require("../models/product.model");
const User = require("../models/user.model");
const remove = require("../utils/remove.util");
const Category = require("../models/category.model");
const translateFields = require("../utils/translateFields");
const { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } = require("../utils/languages");

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

function makeSlug(title, language = DEFAULT_LANGUAGE) {
  const base =
    String(title || "magazine")
      .trim()
      .toLowerCase()
      .replace(/[\u200B-\u200D\uFEFF]/g, "")
      .replace(/[\s\ـ]+/g, "-")
      .replace(/[^\u0600-\u06FFa-z0-9\-]/g, "")
      .replace(/-+/g, "-")
      .replace(/^-+|-+$/g, "") || "magazine";

  return language === DEFAULT_LANGUAGE ? base : `${base}-${language}`;
}

function hasManualTranslations(translations) {
  return SUPPORTED_LANGUAGES.filter((language) => language !== DEFAULT_LANGUAGE).some(
    (language) => {
      const fields = translations?.[language];
      return (
        fields &&
        typeof fields === "object" &&
        ["title", "summary", "content"].some(
          (field) => typeof fields[field] === "string" && fields[field].trim()
        )
      );
    }
  );
}

async function buildMagazineTranslationDocs({
  magazineId,
  title = "",
  summary = "",
  content = "",
  metaTitle = "",
  metaDescription = "",
  manualTranslations = {},
}) {
  const autoTranslations = await translateFields(
    { title, summary, content, metaTitle, metaDescription },
    {
      stringFields: ["title", "metaTitle"],
      longTextFields: ["summary", "content"],
      lowercaseFields: ["metaDescription"],
    }
  );

  return SUPPORTED_LANGUAGES.map((language) => {
    const manual = language === DEFAULT_LANGUAGE ? {} : manualTranslations?.[language] || {};
    const auto = autoTranslations?.[language]?.fields || {};
    const translatedTitle = String(manual.title || auto.title || title).trim();
    const translatedSummary = String(manual.summary || auto.summary || summary).trim();
    const translatedContent = String(manual.content || auto.content || content).trim();

    return {
      magazine: magazineId,
      language,
      title: language === DEFAULT_LANGUAGE ? title : translatedTitle,
      summary: language === DEFAULT_LANGUAGE ? summary : translatedSummary,
      content: language === DEFAULT_LANGUAGE ? content : translatedContent,
      metaTitle: manual.metaTitle || auto.metaTitle || metaTitle || translatedTitle,
      metaDescription:
        manual.metaDescription || auto.metaDescription || metaDescription || translatedSummary,
      slug: makeSlug(language === DEFAULT_LANGUAGE ? title : translatedTitle, language),
    };
  });
}

function getUploadedImage(file) {
  return {
    url: file.url,
    public_id: file.key,
  };
}

exports.addMagazine = async (req, res) => {
  const {
    tags,
    socialLinks,
    title = "",
    summary = "",
    content = "",
    metaTitle = "",
    metaDescription = "",
    whatYouWillLearn,
    magazineTranslations,
    ...otherInformation
  } = req.body;

  const thumbnail = req.uploadedFiles?.thumbnail?.length
    ? getUploadedImage(req.uploadedFiles.thumbnail[0])
    : null;
  const gallery = req.uploadedFiles?.gallery?.length
    ? req.uploadedFiles.gallery.map(getUploadedImage)
    : [];

  const magazine = await Magazine.create({
    ...otherInformation,
    creator: req.user._id,
    thumbnail,
    gallery,
    tags: parseJsonArray(tags),
    socialLinks: parseJsonArray(socialLinks),
    whatYouWillLearn: parseJsonArray(whatYouWillLearn),
  });

  const translationDocs = await buildMagazineTranslationDocs({
    magazineId: magazine._id,
    title,
    summary,
    content,
    metaTitle,
    metaDescription,
    manualTranslations: parseJsonObject(magazineTranslations),
  });

  await MagazineTranslation.insertMany(translationDocs);

  await Category.findByIdAndUpdate(magazine.category, {
    $push: { magazines: magazine._id },
  });

  res.status(201).json({
    acknowledgement: true,
    message: "Created",
    description: "مجله با موفقیت ایجاد شد",
  });
};

exports.getMagazines = async (req, res) => {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  const skip = (page - 1) * limit;
  const filter = {};

  if (req.query.search) filter.$text = { $search: req.query.search };
  if (req.query.category) filter.category = req.query.category;
  if (req.query.publishStatus) filter.publishStatus = req.query.publishStatus;
  if (req.query.visibility) filter.visibility = req.query.visibility;

  const magazines = await Magazine.find(filter)
    .select("thumbnail gallery readTime isFeatured visibility publishDate publishStatus category creator views whatYouWillLearn")
    .populate([
      { path: "creator", select: "name avatar" },
      { path: "category", select: "title" },
    ])
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: -1 });

  const magazineIds = magazines.map((magazine) => magazine._id);
  const translations = await MagazineTranslation.find({
    magazine: { $in: magazineIds },
  }).select("magazine language title slug summary metaTitle metaDescription canonicalUrl");

  const translationsByMagazine = translations.reduce((result, translation) => {
    const key = String(translation.magazine);
    result[key] = result[key] || [];
    result[key].push(translation);
    return result;
  }, {});

  const data = magazines.map((magazine) => ({
    ...magazine.toObject(),
    translations: translationsByMagazine[String(magazine._id)] || [],
  }));

  const total = await Magazine.countDocuments(filter);
  const totalPages = Math.ceil(total / limit);

  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "مجله‌ها با موفقیت دریافت شدند",
    data,
    pagination: {
      currentPage: page,
      totalPages,
      total,
      hasNext: page < totalPages,
      hasPrev: page > 1,
    },
  });
};

exports.getMagazine = async (req, res) => {
  const magazine = await Magazine.findById(req.params.id).populate([
    { path: "creator", select: "name avatar" },
    { path: "tags", select: "title _id" },
    { path: "category", select: "title" },
  ]);
  const translations = await MagazineTranslation.find({ magazine: req.params.id });

  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "مجله با موفقیت دریافت شد",
    data: {
      ...magazine.toObject(),
      translations,
    },
  });
};

exports.updateMagazine = async (req, res) => {
  const {
    tags,
    socialLinks,
    title = "",
    summary = "",
    content = "",
    metaTitle = "",
    metaDescription = "",
    whatYouWillLearn,
    magazineTranslations,
    ...otherInformation
  } = req.body;

  const updateData = { ...otherInformation };
  if (tags !== undefined) updateData.tags = parseJsonArray(tags);
  if (socialLinks !== undefined) updateData.socialLinks = parseJsonArray(socialLinks);
  if (whatYouWillLearn !== undefined) {
    updateData.whatYouWillLearn = parseJsonArray(whatYouWillLearn);
  }

  if (req.uploadedFiles?.thumbnail?.length) {
    updateData.thumbnail = getUploadedImage(req.uploadedFiles.thumbnail[0]);
  }
  if (req.uploadedFiles?.gallery?.length) {
    updateData.gallery = req.uploadedFiles.gallery.map(getUploadedImage);
  }

  await Magazine.findByIdAndUpdate(req.params.id, updateData);

  const parsedMagazineTranslations = parseJsonObject(magazineTranslations);
  if (
    title ||
    summary ||
    content ||
    metaTitle ||
    metaDescription ||
    hasManualTranslations(parsedMagazineTranslations)
  ) {
    const translationDocs = await buildMagazineTranslationDocs({
      magazineId: req.params.id,
      title,
      summary,
      content,
      metaTitle,
      metaDescription,
      manualTranslations: parsedMagazineTranslations,
    });

    await Promise.all(
      translationDocs.map((translationDoc) =>
        MagazineTranslation.findOneAndUpdate(
          { magazine: req.params.id, language: translationDoc.language },
          translationDoc,
          { upsert: true, new: true }
        )
      )
    );
  }

  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "مجله با موفقیت به‌روزرسانی شد",
  });
};

exports.deleteMagazine = async (req, res) => {
  const magazine = await Magazine.findByIdAndDelete(req.params.id);

  await MagazineTranslation.deleteMany({ magazine: req.params.id });

  if (magazine.thumbnail?.public_id) {
    await remove(magazine.thumbnail.public_id);
  }

  if (magazine.gallery?.length) {
    for (const image of magazine.gallery) {
      if (image.public_id) {
        await remove(image.public_id);
      }
    }
  }

  await Product.updateMany({ magazine: req.params.id }, { $unset: { magazine: "" } });
  await User.findByIdAndUpdate(magazine.creator, {
    $unset: { magazine: "" },
  });

  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "مجله با موفقیت حذف شد",
  });
};
