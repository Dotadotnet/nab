const mongoose = require("mongoose");
const ProductAttribute = require("../models/productAttribute.model");
const ProductAttributeTranslation = require("../models/productAttributeTranslation.model");
const { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } = require("../utils/languages");
const {
  buildPaginationMeta,
  buildSearchQuery,
  getPaginationOptions,
  getSearchTerm,
} = require("../utils/pagination.util");

function isObjectId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

function normalizeKey(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

function buildPayload(body) {
  const label = String(body.label || "").trim();
  const key = normalizeKey(body.key || label);

  if (!label) throw new Error("عنوان ویژگی الزامی است");
  if (!key || !/^[a-z][a-z0-9_]*$/.test(key)) {
    throw new Error("کلید ویژگی باید با حروف انگلیسی شروع شود و snake_case باشد");
  }

  return {
    key,
    label,
    status: body.isActive === false || body.status === "inactive" ? "inactive" : "active",
  };
}

function getTranslatedAttribute(item) {
  const object = item.toObject ? item.toObject() : item;
  const translated = Array.isArray(object.translations)
    ? object.translations.find((entry) => entry.translation)?.translation || {}
    : {};

  return {
    ...object,
    label: translated.label || object.label,
  };
}

async function upsertOneTranslation(attribute, payload, language) {
  const translation = await ProductAttributeTranslation.findOneAndUpdate(
    { productAttribute: attribute._id, language },
    {
      $set: {
        productAttribute: attribute._id,
        language,
        label: payload.label,
      },
    },
    { new: true, upsert: true, runValidators: true }
  );

  const hasTranslation = (attribute.translations || []).some(
    (item) => String(item.translation) === String(translation._id)
  );

  if (!hasTranslation) {
    attribute.translations = [
      ...(attribute.translations || []),
      { translation: translation._id, language },
    ];
    await attribute.save();
  }
}

async function upsertTranslations(attribute, payload, translations = {}) {
  await upsertOneTranslation(attribute, payload, DEFAULT_LANGUAGE);

  for (const language of SUPPORTED_LANGUAGES) {
    if (language === DEFAULT_LANGUAGE) continue;
    const label = String(translations?.[language]?.label || "").trim();
    if (!label) continue;
    await upsertOneTranslation(attribute, { ...payload, label }, language);
  }
}

exports.createProductAttribute = async (req, res) => {
  const payload = buildPayload(req.body);
  payload.creator = req.admin?._id || null;
  const lastAttribute = await ProductAttribute.findOne({ isDeleted: false })
    .sort({ sortOrder: -1 })
    .select("sortOrder");
  payload.sortOrder = Number(lastAttribute?.sortOrder || 0) + 1;

  const attribute = await ProductAttribute.create(payload);
  await upsertTranslations(attribute, payload, req.body.translations);
  await attribute.populate({
    path: "translations.translation",
    match: { language: req.locale },
    select: "label language",
  });

  res.status(201).json({
    acknowledgement: true,
    message: "Created",
    description: "ویژگی با موفقیت ایجاد شد",
    data: getTranslatedAttribute(attribute),
  });
};

exports.getProductAttributes = async (req, res) => {
  const search = getSearchTerm(req.query);
  const query = {
    isDeleted: false,
    ...buildSearchQuery(search, ["key", "label"]),
  };

  const { limit, page, skip } = getPaginationOptions(req.query);
  const [attributes, totalItems] = await Promise.all([
    ProductAttribute.find(query)
      .populate({
        path: "translations.translation",
        match: { language: req.locale },
        select: "label language",
      })
      .sort({ sortOrder: 1, createdAt: -1 })
      .skip(skip)
      .limit(limit),
    ProductAttribute.countDocuments(query),
  ]);

  res.status(200).json({
    acknowledgement: true,
    message: "OK",
    description: "لیست ویژگی‌ها دریافت شد",
    data: attributes.map(getTranslatedAttribute),
    pagination: buildPaginationMeta({ limit, page, totalItems }),
  });
};

exports.reorderProductAttributes = async (req, res) => {
  const { orderedIds = [], startSortOrder = 0 } = req.body;

  if (!Array.isArray(orderedIds) || orderedIds.length === 0) {
    return res.status(400).json({
      acknowledgement: false,
      message: "Bad Request",
      description: "لیست ویژگی‌ها برای مرتب‌سازی معتبر نیست",
    });
  }

  const invalidId = orderedIds.find((id) => !isObjectId(id));
  if (invalidId) {
    return res.status(400).json({
      acknowledgement: false,
      message: "Bad Request",
      description: "شناسه ویژگی معتبر نیست",
    });
  }

  const start = Number(startSortOrder) || 0;

  await ProductAttribute.bulkWrite(
    orderedIds.map((id, index) => ({
      updateOne: {
        filter: { _id: id, isDeleted: false },
        update: { $set: { sortOrder: start + index } },
      },
    }))
  );

  res.status(200).json({
    acknowledgement: true,
    message: "OK",
    description: "ترتیب ویژگی‌ها ذخیره شد",
  });
};

exports.getProductAttribute = async (req, res) => {
  const { id } = req.params;
  if (!isObjectId(id)) {
    return res.status(400).json({
      acknowledgement: false,
      message: "Bad Request",
      description: "شناسه ویژگی معتبر نیست",
    });
  }

  const attribute = await ProductAttribute.findOne({ _id: id, isDeleted: false }).populate({
    path: "translations.translation",
    match: { language: req.locale },
    select: "label language",
  });

  if (!attribute) {
    return res.status(404).json({
      acknowledgement: false,
      message: "Not Found",
      description: "ویژگی یافت نشد",
    });
  }

  res.status(200).json({
    acknowledgement: true,
    message: "OK",
    description: "جزئیات ویژگی دریافت شد",
    data: getTranslatedAttribute(attribute),
  });
};

exports.updateProductAttribute = async (req, res) => {
  const { id } = req.params;
  if (!isObjectId(id)) {
    return res.status(400).json({
      acknowledgement: false,
      message: "Bad Request",
      description: "شناسه ویژگی معتبر نیست",
    });
  }

  const attribute = await ProductAttribute.findOne({ _id: id, isDeleted: false });
  if (!attribute) {
    return res.status(404).json({
      acknowledgement: false,
      message: "Not Found",
      description: "ویژگی یافت نشد",
    });
  }

  const payload = buildPayload({ ...attribute.toObject(), ...req.body });
  Object.assign(attribute, payload);
  await attribute.save();
  await upsertTranslations(attribute, payload, req.body.translations);
  await attribute.populate({
    path: "translations.translation",
    match: { language: req.locale },
    select: "label language",
  });

  res.status(200).json({
    acknowledgement: true,
    message: "OK",
    description: "ویژگی با موفقیت به‌روزرسانی شد",
    data: getTranslatedAttribute(attribute),
  });
};

exports.deleteProductAttribute = async (req, res) => {
  const { id } = req.params;
  if (!isObjectId(id)) {
    return res.status(400).json({
      acknowledgement: false,
      message: "Bad Request",
      description: "شناسه ویژگی معتبر نیست",
    });
  }

  const attribute = await ProductAttribute.findOneAndUpdate(
    { _id: id, isDeleted: false },
    { isDeleted: true, deletedAt: Date.now(), status: "inactive" },
    { new: true }
  );

  if (!attribute) {
    return res.status(404).json({
      acknowledgement: false,
      message: "Not Found",
      description: "ویژگی یافت نشد",
    });
  }

  res.status(200).json({
    acknowledgement: true,
    message: "OK",
    description: "ویژگی با موفقیت حذف شد",
  });
};
