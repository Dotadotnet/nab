/* واردات خارجی */
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const baseSchema = require("./baseSchema.model");
const Counter = require("./counter");

const featuredProductSchema = new mongoose.Schema(
  {
    featuredProductId: {
      type: Number,
      unique: true
    },
    title: {
      type: String,
      required: [true, "لطفاً عنوان محصول را وارد کنید"],
      trim: true,
      unique: [true, "محصول مشابه قبلاً ثبت شده است"],
      maxLength: [100, "عنوان نمی‌تواند بیشتر از ۱۰۰ کاراکتر باشد"]
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
          enum: ["fa", "en", "tr", "ar"],
          required: true
        }
      }
    ],

    thumbnail: {
      url: {
        type: String,
        required: [true, "لطفاً لینک تصویر بندانگشتی را وارد کنید"],
        default: "https://placehold.co/296x200.png"
      },
      public_id: {
        type: String,
        default: "N/A"
      }
    },
    carouselThumbnail: {
      url: {
        type: String,
        required: [true, "لطفاً لینک تصویر چرخ و فلکی  را وارد کنید"],
        default: "https://placehold.co/296x200.png"
      },
      public_id: {
        type: String,
        default: "N/A"
      }
    },
    clickCount: {
      type: Number,
      default: 0
    },
    category: {
      type: ObjectId,
      ref: "Category",
      required: [true, "دسته بندی الزامی است"]
    },
    product: {
      type: ObjectId,
      ref: "Product",
      required: [true, " محصول الزامی است"]
    },

    priority: {
      type: Number,
      default: 0,
      required: [true, " الویت الزامی است"],
      unique: [true, "این جایگاه  ثبت شده است "]
    },

    creator: {
      type: ObjectId,
      ref: "Admin"
    },

    ...baseSchema.obj
  },
  { timestamps: true }
);

featuredProductSchema.pre("save", async function (next) {
  if (!this.isNew || this.featuredProductId) {
    return next();
  }
  try {
    const counter = await Counter.findOneAndUpdate(
      { name: "featuredProductId" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
    this.featuredProductId = counter.seq;

    next();
  } catch (error) {
    console.error("خطا در تولید featuredProductId:", error);
    next(error);
  }
});

const FeaturedProduct = mongoose.model(
  "FeaturedProduct",
  featuredProductSchema
);

module.exports = FeaturedProduct;
