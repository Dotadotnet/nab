/* external imports */
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const baseSchema = require("./baseSchema.model");
const Counter = require("./counter");

const purchaseSchema = new mongoose.Schema(
  {
    purchaseId: {
      type: Number,
      unique: true
    },
    customer: {
      type: ObjectId,
      ref: "User"
    },

    sessionId: {
      type: ObjectId,
      ref: "Session"
    },
    cart: {
      type: ObjectId,
      ref: "Cart",
      required: true
    },

    products: [
      {
        product: {
          type: ObjectId,
          ref: "Product"
        },
        variation: {
          type: ObjectId,
          ref: "Variation"
        },
        quantity: {
          type: Number,
          default: 1
        }
      }
    ],

    customerId: {
      type: String,
      required: true
    },
    saleReferenceId: {
      type: String,
    },

    paymentId: {
      type: String,
      required: true
    },
    totalAmount: {
      type: Number,
      required: true
    },

    shippingStatus: {
      type: String,
      enum: ["pending", "shipped", "failed"],
      default: "pending"
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed", "expired", "refunded", "canceled"],
      default: "pending"
    },
    ResCode: {
      type: String
    },
    gateway: {
      type: String,
      enum: ["mellat", "zarinpal", "idpay"],
      required: true
    },

    ...baseSchema.obj
  },
  { timestamps: true }
);

purchaseSchema.pre("save", async function (next) {
  if (!this.isNew || this.purchaseId) {
    return next();
  }

  try {
    const counter = await Counter.findOneAndUpdate(
      { name: "purchaseId" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );

    this.purchaseId = counter.seq;
    next();
  } catch (error) {
    next(error);
  }
});
/* create purchase model */
const Purchase = mongoose.model("Purchase", purchaseSchema);

/* export purchase model */
module.exports = Purchase;
