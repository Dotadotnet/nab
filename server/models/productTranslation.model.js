const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const { SUPPORTED_LANGUAGES } = require("../utils/languages");

const requiredText = (field) => ({
  type: String,
  required: [true, `${field} translation is required`],
  trim: true,
  validate: {
    validator(value) {
      return typeof value === "string" && value.trim().length > 0;
    },
    message: `${field} translation cannot be empty`,
  },
});

const productTranslationSchema = new mongoose.Schema(
  {
    product: {
      type: ObjectId,
      ref: "Product",
      required: true,
      index: true,
    },
    language: {
      type: String,
      enum: SUPPORTED_LANGUAGES,
      required: true,
    },
    title: requiredText("Title"),
    summary: requiredText("Summary"),
    description: requiredText("Description"),
  },
  { timestamps: true, strict: false }
);

productTranslationSchema.index({ product: 1, language: 1 }, { unique: true });

module.exports = mongoose.model("ProductTranslation", productTranslationSchema);
