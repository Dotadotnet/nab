/* external imports */
const mongoose = require("mongoose");
const baseSchema = require("./baseSchema.model");
const Counter = require("./counter");
const { ObjectId } = mongoose.Schema.Types;

/* create cart schema */
const cartSchema = new mongoose.Schema(
  {
    cartId: {
      type: Number,
      unique: true
    },
    product: {
      type: ObjectId,
      ref: "Product"
    },

    // for user
    user: {
      type: ObjectId,
      ref: "User"
    },

    guest: {
      type: String,
      required: function () {
        return !this.user;
      },
      default: null
    },

    items: [
      {
        product: { type: ObjectId, ref: "Product", required: true },
        variation: { type: ObjectId, ref: "Variation", required: true },
        quantity: { type: Number, default: 1, min: 1, required: true },
        addedAt: { type: Date, default: Date.now }
      }
    ],
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "expired"],
      default: "pending"
    },
    ...baseSchema.obj
  },
  { timestamps: true }
);

cartSchema.pre("save", async function (next) {
  if (!this.isNew || this.cartId) {
    return next();
  }

  try {
    const counter = await Counter.findOneAndUpdate(
      { name: "cartId" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );

    this.cartId = counter.seq;
    next();
  } catch (error) {
    next(error);
  }
});

// Method to expire pending carts older than a specified time (default 24 hours)
cartSchema.statics.expirePendingCarts = async function (maxAgeHours = 24) {
  const cutoffTime = new Date(Date.now() - maxAgeHours * 60 * 60 * 1000);
  
  const result = await this.updateMany(
    {
      paymentStatus: "pending",
      createdAt: { $lt: cutoffTime }
    },
    {
      paymentStatus: "expired"
    }
  );
  
  return result;
};

// Method to find and return expired carts
cartSchema.statics.getExpiredCarts = async function (maxAgeHours = 24) {
  const cutoffTime = new Date(Date.now() - maxAgeHours * 60 * 60 * 1000);
  
  return await this.find({
    paymentStatus: "pending",
    createdAt: { $lt: cutoffTime }
  });
};

/* create cart schema */
const Cart = mongoose.model("Cart", cartSchema);

/* export cart schema */
module.exports = Cart;