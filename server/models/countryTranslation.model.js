const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const { SUPPORTED_LANGUAGES } = require("../utils/languages");

const countryTranslationSchema = new mongoose.Schema(
  {
    country: {
      type: ObjectId,
      ref: "NewsCountry",
      required: true,
      index: true
    },
    language: {
      type: String,
      enum: SUPPORTED_LANGUAGES,
      required: true
    },
    name: { type: String, default: "", trim: true },
    description: { type: String, default: "" },
    slug: { type: String, default: "", trim: true }
  },
  { timestamps: true }
);

countryTranslationSchema.index(
  { country: 1, language: 1 },
  { unique: true }
);

module.exports = mongoose.model("CountryTranslation", countryTranslationSchema);
