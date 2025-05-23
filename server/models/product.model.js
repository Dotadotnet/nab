/* واردات خارجی */
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const baseSchema = require("./baseSchema.model");
const Counter = require("./counter");

const productSchema = new mongoose.Schema(
  {
    productId: {
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
          enum: ["fa","en", "tr", "ar"],
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

    gallery: {
      type: [
        {
          url: {
            type: String,
            required: [true, "لطفاً لینک تصویر گالری را وارد کنید"],
            default: "https://placehold.co/296x200.png"
          },
          public_id: {
            type: String,
            default: "N/A"
          }
        }
      ],
      validate: {
        validator: function (value) {
          return value.length <= 10;
        },
        message: "امکان افزودن بیش از ۱۰ تصویر در گالری وجود ندارد"
      }
    },

    views: {
      type: Number,
      default: 0,
      min: [0, "تعداد بازدید نمی‌تواند منفی باشد"]
    },
    publishStatus: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
      required: [true, "وضعیت انتشار الزامی است"]
    },
    rejectMessage: {
      type: String,
      required: function () {
        return this.publishStatus === "rejected";
      },
      message: "لطفاً دلیل رد شدن را وارد کنید"
    },
    variations: [
      {
        type: ObjectId,
        ref: "Variation"
      }
    ],

    campaign: {
      type: ObjectId,
      ref: "Campaign"
    },

    discountAmount: {
      type: Number,
      default: 0
    },

    stockStatus: {
      type: String,
      enum: ["in-stock", "out-of-stock", "low-stock"],
      default: "in-stock"
    },

    category: {
      type: ObjectId,
      ref: "Category"
    },
    qrCode: {
      type: String,
      required: false
    },

    reviews: [
      {
        type: ObjectId,
        ref: "Review"
      }
    ],
    isFeatured: {
      type: Boolean,
      default: false
    },
    creator: {
      type: ObjectId,
      ref: "Admin"
    },
    scans: [
      {
        user: {
          type: ObjectId,
          ref: "User"
        },
        role: {
          type: String,
          enum: ["admin", "superAdmin", "buyyer"],
          default: "unknown"
        },
        scannedAt: {
          type: Date,
          default: Date.now
        },
        userAgent: String // اطلاعات دستگاه اسکن‌کننده
      }
    ],
    tags: [
      {
        type: ObjectId,
        ref: "Tag",
        required: [true, "تگ محصول الزامی است"]
      }
    ],

    ...baseSchema.obj
  },
  { timestamps: true }
);
const defaultDomain = process.env.NEXT_PUBLIC_CLIENT_URL;

productSchema.pre("save", async function (next) {
  if (!this.isNew || this.productId) {
    return next();
  }
  try {
    const counter = await Counter.findOneAndUpdate(
      { name: "productId" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
    this.productId = counter.seq;

    next();
  } catch (error) {
    console.error("خطا در تولید QR Code:", error);
    next(error);
  }

 
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
