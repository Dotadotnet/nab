const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const Counter = require("./counter");
const baseSchema = require("./baseSchema.model");

const magazineSchema = new mongoose.Schema(
  {
    magazineId: {
      type: Number,
      unique: true,
    },

    thumbnail: {
      url: {
        type: String,
        required: [true, "لطفاً لینک تصویر بندانگشتی را وارد کنید"],
        default: "https://placehold.co/296x200.png",
      },
      public_id: { type: String, default: "N/A" },
    },

    gallery: [
      {
        url: { type: String, default: "https://placehold.co/296x200.png" },
        public_id: { type: String, default: "N/A" },
      },
    ],

    whatYouWillLearn: [
      {
        type: String,
        required: false
      }
    ],

    readTime: { type: String, default: 0 },
    isFeatured: { type: Boolean, default: false },
    visibility: { type: String, enum: ["public", "private"], default: "public" },
    publishStatus: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    publishDate: Date,
    lastUpdated: { type: Date, default: Date.now },

    category: { type: ObjectId, ref: "Category", required: true },
    tags: [{ type: ObjectId, ref: "Tag", required: true }],
    creator: { type: ObjectId, ref: "Admin", required: true },
    relatedMagazines: [{ type: ObjectId, ref: "Magazine" }],
    relatedEvents: [{ type: ObjectId, ref: "Event" }],

    views: { type: Number, default: 0, min: 0 },
    socialLinks: [
      { name: { type: String, required: true }, url: { type: String, required: true } },
    ],

    ...baseSchema.obj,
  },
  { timestamps: true }
);

magazineSchema.pre("save", async function (next) {
  if (this.magazineId) return next();

  try {
    const counter = await Counter.findOneAndUpdate(
      { name: "magazineId" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
    this.magazineId = counter.seq;
    next();
  } catch (error) {
    console.error("Error generating magazineId:", error);
    next(error);
  }
});

const Magazine = mongoose.model("Magazine", magazineSchema);
module.exports = Magazine;