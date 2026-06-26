const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const { SUPPORTED_LANGUAGES } = require("../utils/languages");

const categoryTranslationSchema = new mongoose.Schema(
  {
    category: {
      type: ObjectId,
      ref: "Category",
      required: true,
      index: true
    },
    language: {
      type: String,
      enum: SUPPORTED_LANGUAGES,
      required: true
    },
    title: { type: String, required: true, trim: true },
    description: { type: String, default: "" },
    slug: { type: String, required: true, trim: true },
    canonicalUrl: { type: String, default: "" },
    tags: [{ type: String }],
    keynotes: [{ type: String }]
  },
  { timestamps: true }
);

categoryTranslationSchema.index(
  { category: 1, language: 1 },
  { unique: true }
);

module.exports = mongoose.model(
  "CategoryTranslation",
  categoryTranslationSchema
);
