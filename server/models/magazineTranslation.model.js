const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const magazineTranslationSchema = new mongoose.Schema(
  {
    magazine: {
      type: ObjectId,
      ref: "Magazine",
      required: true,
      index: true,
    },
    language: {
      type: String,
      required: true,
      enum: ["fa", "en", "tr", "ar"],
    },
    title: {
      type: String,
      required: [true, "عنوان الزامی است"],
      trim: true,
      minLength: 3,
      maxLength: 100,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    summary: {
      type: String,
      maxLength: 300,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    metaTitle: {
      type: String,
      maxLength: 60,
    },
    metaDescription: {
      type: String,
      maxLength: 160,
    },
    canonicalUrl: {
      type: String,
      trim: true,
      validate: {
        validator: (v) => /^(https?:\/\/[^\s$.?#].[^\s]*)$/.test(v),
        message: "URL معتبر نیست",
      },
    },
  },
  { timestamps: true }
);

// تنظیم خودکار canonicalUrl
magazineTranslationSchema.pre("save", function (next) {
  if (!this.canonicalUrl) {
    const domain = process.env.NEXT_PUBLIC_CLIENT_URL;
    this.canonicalUrl = `${domain}/magazine/${this.slug}`;
  }

  // metaTitle و metaDescription خودکار
  if (!this.metaTitle) {
    this.metaTitle = this.title.length > 57 ? this.title.slice(0, 57) + "..." : this.title;
  }
  if (!this.metaDescription && this.summary) {
    this.metaDescription =
      this.summary.length > 157 ? this.summary.slice(0, 157) + "..." : this.summary;
  }

  next();
});

const MagazineTranslation = mongoose.model(
  "MagazineTranslation",
  magazineTranslationSchema
);
module.exports = MagazineTranslation;