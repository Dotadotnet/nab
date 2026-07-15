/* external imports */
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const baseSchema = require("./baseSchema.model");
const Counter = require("./counter");
const { SUPPORTED_LANGUAGES } = require("../utils/languages");

const tagSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "عنوان تگ الزامی است"],
      trim: true,
      unique: [true, "تگ مشابه از قبل وجود دارد"],
      maxLength: [70, "عنوان تگ نباید بیشتر از 70 کاراکتر باشد"]
    },
    slug: {
      type: String,
      trim: true,
      unique: true,
      sparse: true,
      index: true
    },
    translations: [
      {
        translation: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "TagTranslation",
          required: true
        },
        language: {
          type: String,
          enum: SUPPORTED_LANGUAGES,
          required: true
        }
      }
    ],

    creator: {
      type: ObjectId,
      ref: "Admin",
      required: [true, "شناسه نویسنده الزامی است"]
    },

    thumbnail: {
      url: {
        type: String,
        default: "https://placehold.co/300x300.png"
      },
      public_id: {
        type: String,
        default: "N/A"
      }
    },
    lang: {
      type: String
    }
    ,
    tagId: {
      type: Number
    },
    ...baseSchema.obj
  },
  { timestamps: true }
);

tagSchema.pre("save", async function (next) {
  if (!this.isNew || this.tagId) {
    return next();
  }

  try {
    const counter = await Counter.findOneAndUpdate(
      { name: "tagId" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );

    this.tagId = counter.seq;
    next();
  } catch (error) {
    next(error);
  }
});




const Tag = mongoose.model("Tag", tagSchema);

module.exports = Tag;
