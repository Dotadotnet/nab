const mongoose = require("mongoose");
const FilterDefinition = require("../models/filterDefinition.model");
const FilterDefinitionTranslation = require("../models/filterDefinitionTranslation.model");
const { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } = require("../utils/languages");
const {
  buildPaginationMeta,
  buildSearchQuery,
  getPaginationOptions,
  getSearchTerm,
} = require("../utils/pagination.util");

const SELECT_TYPES = ["select", "multi_select", "color"];
const NUMERIC_TYPES = ["number", "range"];

function isObjectId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

function normalizeOptions(options = []) {
  if (!Array.isArray(options)) return [];

  return options
    .map((option) => ({
      label: String(option.label || "").trim(),
      value: String(option.value || option.label || "").trim(),
    }))
    .filter((option) => option.label && option.value);
}

function normalizeNumber(value) {
  if (value === "" || value === null || value === undefined) return null;
  const number = Number(value);
  return Number.isNaN(number) ? null : number;
}

function normalizeTranslationOptions(options = []) {
  return normalizeOptions(options);
}

function buildPayload(body) {
  const payload = {
    key: String(body.key || "").trim().toLowerCase(),
    label: String(body.label || "").trim(),
    type: body.type || "select",
    options: normalizeOptions(body.options),
    min: normalizeNumber(body.min),
    max: normalizeNumber(body.max),
    unit: String(body.unit || "").trim(),
    status: body.isActive === false || body.status === "inactive" ? "inactive" : "active",
  };

  if (!payload.label) throw new Error("عنوان فیلتر الزامی است");
  if (!payload.key) throw new Error("کلید فیلتر الزامی است");
  if (NUMERIC_TYPES.includes(payload.type) && payload.min !== null && payload.max !== null && payload.min > payload.max) {
    throw new Error("حداقل نباید از حداکثر بیشتر باشد");
  }
  if (!SELECT_TYPES.includes(payload.type)) payload.options = [];
  if (!NUMERIC_TYPES.includes(payload.type)) {
    payload.min = null;
    payload.max = null;
    payload.unit = "";
  }

  return payload;
}

function getTranslatedFilter(item) {
  const object = item.toObject ? item.toObject() : item;
  const translated = Array.isArray(object.translations)
    ? object.translations.find((entry) => entry.translation)?.translation || {}
    : {};

  return {
    ...object,
    label: translated.label || object.label,
    options: translated.options || object.options || [],
    unit: translated.unit || object.unit || "",
  };
}

async function upsertOneFilterDefinitionTranslation(filter, payload, language) {
  const translation = await FilterDefinitionTranslation.findOneAndUpdate(
    { filterDefinition: filter._id, language },
    {
      $set: {
        filterDefinition: filter._id,
        language,
        label: payload.label,
        options: payload.options || [],
        unit: payload.unit || "",
      },
    },
    { new: true, upsert: true, runValidators: true }
  );

  const hasTranslation = (filter.translations || []).some(
    (item) => String(item.translation) === String(translation._id)
  );

  if (!hasTranslation) {
    filter.translations = [
      ...(filter.translations || []),
      { translation: translation._id, language },
    ];
    await filter.save();
  }
}

async function upsertFilterDefinitionTranslation(filter, payload, translations = {}) {
  await upsertOneFilterDefinitionTranslation(filter, payload, DEFAULT_LANGUAGE);

  for (const language of SUPPORTED_LANGUAGES) {
    if (language === DEFAULT_LANGUAGE) continue;

    const fields = translations?.[language];
    if (!fields || typeof fields !== "object") continue;

    const translatedPayload = {
      label:
        typeof fields.label === "string" && fields.label.trim()
          ? fields.label.trim()
          : payload.label,
      options: Array.isArray(fields.options)
        ? normalizeTranslationOptions(fields.options)
        : payload.options,
      unit:
        typeof fields.unit === "string" && fields.unit.trim()
          ? fields.unit.trim()
          : payload.unit,
    };

    await upsertOneFilterDefinitionTranslation(filter, translatedPayload, language);
  }
}

exports.createFilterDefinition = async (req, res) => {
  const payload = buildPayload(req.body);
  payload.creator = req.admin?._id || null;
  const filter = await FilterDefinition.create(payload);
  await upsertFilterDefinitionTranslation(filter, payload, req.body.translations);
  await filter.populate({
    path: "translations.translation",
    match: { language: req.locale },
    select: "label options unit language",
  });

  res.status(201).json({
    acknowledgement: true,
    message: "Created",
    description: "تعریف فیلتر با موفقیت ایجاد شد",
    data: getTranslatedFilter(filter),
  });
};

exports.getFilterDefinitions = async (req, res) => {
  const search = getSearchTerm(req.query);
  const query = {
    isDeleted: false,
    ...buildSearchQuery(search, ["key", "label", "type", "unit", "options.label", "options.value"]),
  };

  const { limit, page, skip } = getPaginationOptions(req.query);
  const [filters, totalItems] = await Promise.all([
    FilterDefinition.find(query)
      .populate({
        path: "translations.translation",
        match: { language: req.locale },
        select: "label options unit language",
      })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit),
    FilterDefinition.countDocuments(query),
  ]);

  res.status(200).json({
    acknowledgement: true,
    message: "OK",
    description: "لیست تعریف فیلترها دریافت شد",
    data: filters.map(getTranslatedFilter),
    pagination: buildPaginationMeta({ limit, page, totalItems }),
  });
};

exports.getFilterDefinition = async (req, res) => {
  const { id } = req.params;

  if (!isObjectId(id)) {
    return res.status(400).json({
      acknowledgement: false,
      message: "Bad Request",
      description: "شناسه فیلتر معتبر نیست",
    });
  }

  const filter = await FilterDefinition.findOne({ _id: id, isDeleted: false }).populate({
    path: "translations.translation",
    match: { language: req.locale },
    select: "label options unit language",
  });
  if (!filter) {
    return res.status(404).json({
      acknowledgement: false,
      message: "Not Found",
      description: "تعریف فیلتر یافت نشد",
    });
  }

  res.status(200).json({
    acknowledgement: true,
    message: "OK",
    description: "جزئیات تعریف فیلتر دریافت شد",
    data: getTranslatedFilter(filter),
  });
};

exports.updateFilterDefinition = async (req, res) => {
  const { id } = req.params;

  if (!isObjectId(id)) {
    return res.status(400).json({
      acknowledgement: false,
      message: "Bad Request",
      description: "شناسه فیلتر معتبر نیست",
    });
  }

  const filter = await FilterDefinition.findOne({ _id: id, isDeleted: false });
  if (!filter) {
    return res.status(404).json({
      acknowledgement: false,
      message: "Not Found",
      description: "تعریف فیلتر یافت نشد",
    });
  }

  const payload = buildPayload({ ...filter.toObject(), ...req.body });
  Object.assign(filter, payload);
  await filter.save();
  await upsertFilterDefinitionTranslation(filter, payload, req.body.translations);
  await filter.populate({
    path: "translations.translation",
    match: { language: req.locale },
    select: "label options unit language",
  });

  res.status(200).json({
    acknowledgement: true,
    message: "OK",
    description: "تعریف فیلتر با موفقیت به‌روزرسانی شد",
    data: getTranslatedFilter(filter),
  });
};

exports.deleteFilterDefinition = async (req, res) => {
  const { id } = req.params;

  if (!isObjectId(id)) {
    return res.status(400).json({
      acknowledgement: false,
      message: "Bad Request",
      description: "شناسه فیلتر معتبر نیست",
    });
  }

  const filter = await FilterDefinition.findOneAndUpdate(
    { _id: id, isDeleted: false },
    { isDeleted: true, deletedAt: Date.now(), status: "inactive" },
    { new: true }
  );

  if (!filter) {
    return res.status(404).json({
      acknowledgement: false,
      message: "Not Found",
      description: "تعریف فیلتر یافت نشد",
    });
  }

  res.status(200).json({
    acknowledgement: true,
    message: "OK",
    description: "تعریف فیلتر با موفقیت حذف شد",
  });
};
