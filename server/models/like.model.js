/* external imports */
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const baseSchema = require("./baseSchema.model");
const Counter = require("./counter");

/* create like schema */
const likeSchema = new mongoose.Schema(
  {
    likeId: {
      type: Number,
      unique: true
    },

    user: {
      type: ObjectId,
      ref: "User",
      default: null
    },

    guest: {
      type: String,
      required: function () {
        return !this.user;
      },
      default: null
    },
    refType: {
      type: String,
      enum: ["Product", "Mag", "News"],
      required: true
    },
    product: {
      type: ObjectId,
      ref: "Product",
      required: true
    },

    type: {
      type: String,
      enum: ["like", "dislike"],
      required: true
    },

    ...baseSchema.obj
  },
  { timestamps: true }
);

likeSchema.pre("save", async function (next) {
  if (!this.isNew || this.likeId) return next();

  try {
    const counter = await Counter.findOneAndUpdate(
      { name: "likeId" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
    this.likeId = counter.seq;
    next();
  } catch (error) {
    next(error);
  }
});

/* create and export model */
const Like = mongoose.model("Like", likeSchema);
module.exports = Like;
