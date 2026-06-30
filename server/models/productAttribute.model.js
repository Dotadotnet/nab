const mongoose = require("mongoose");
const baseSchema = require("./baseSchema.model");
const { SUPPORTED_LANGUAGES } = require("../utils/languages");

const productAttributeSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      required: [true, "Attribute key is required"],
      trim: true,
      lowercase: true,
      match: [/^[a-z][a-z0-9_]*$/, "Attribute key must be snake_case"],
      maxLength: [60, "Attribute key must be at most 60 characters"],
    },
    label: {
      type: String,
      required: [true, "Attribute label is required"],
      trim: true,
      maxLength: [100, "Attribute label must be at most 100 characters"],
    },
    translations: [
      {
        translation: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "ProductAttributeTranslation",
          required: true,
        },
        language: {
          type: String,
          enum: SUPPORTED_LANGUAGES,
          required: true,
        },
      },
    ],
    sortOrder: {
      type: Number,
      default: 0,
    },
    ...baseSchema.obj,
  },
  { timestamps: true }
);

productAttributeSchema.index(
  { key: 1, isDeleted: 1 },
  { unique: true, partialFilterExpression: { isDeleted: false } }
);

const ProductAttribute = mongoose.model("ProductAttribute", productAttributeSchema);

module.exports = ProductAttribute;
