const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const campaignSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "عنوان کمپین الزامی است"]
    },
    state: {
      type: String,
      enum: ["new-arrival", "discount", "sold-out", "on-sale"],
      required: [true, "وضعیت کمپین الزامی است"]
    },
    translations: [
      {
        translation: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Translation",
          required: true
        },
        language: {
          type: String,
          enum: ["fa","en", "tr", "ar"],
          required: true
        }
      }
    ],
    products: [
      {
        type: ObjectId,
        ref: "Product"
      }
    ],
    startDate: Date,
    endDate: Date
  },
  { timestamps: true }
);

const Campaign = mongoose.model("Campaign", campaignSchema);
module.exports = Campaign;
