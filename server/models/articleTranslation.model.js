const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const { SUPPORTED_LANGUAGES } = require("../utils/languages");

const articleTranslationSchema = new mongoose.Schema(
  {
    article: {
      type: ObjectId,
      ref: "News",
      required: true,
      index: true
    },
    language: {
      type: String,
      enum: SUPPORTED_LANGUAGES,
      required: true
    },
    title: { type: String, required: true, trim: true },
    summary: { type: String, default: "" },
    content: { type: String, default: "" },
    slug: { type: String, required: true, trim: true },
    metaTitle: { type: String, default: "" },
    metaDescription: { type: String, default: "" },
    canonicalUrl: { type: String, default: "" }
  },
  { timestamps: true }
);

articleTranslationSchema.index(
  { article: 1, language: 1 },
  { unique: true }
);

module.exports = mongoose.model("ArticleTranslation", articleTranslationSchema);
