const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const { SUPPORTED_LANGUAGES } = require("../utils/languages");

const venueTranslationSchema = new mongoose.Schema(
  {
    venue: {
      type: ObjectId,
      ref: "Venue",
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
    address: { type: String, default: "" },
    slug: { type: String, default: "", trim: true }
  },
  { timestamps: true }
);

venueTranslationSchema.index({ venue: 1, language: 1 }, { unique: true });

module.exports = mongoose.model("VenueTranslation", venueTranslationSchema);
