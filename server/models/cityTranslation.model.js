const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const { SUPPORTED_LANGUAGES } = require("../utils/languages");

const cityTranslationSchema = new mongoose.Schema(
  {
    city: {
      type: ObjectId,
      ref: "City",
      required: true,
      index: true
    },
    language: {
      type: String,
      enum: SUPPORTED_LANGUAGES,
      required: true
    },
    name: { type: String, required: true, trim: true },
    description: { type: String, default: "" },
    slug: { type: String, default: "", trim: true }
  },
  { timestamps: true }
);

cityTranslationSchema.index({ city: 1, language: 1 }, { unique: true });

module.exports = mongoose.model("CityTranslation", cityTranslationSchema);
