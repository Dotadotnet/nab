/* external imports */
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const baseSchema = require("./baseSchema.model");
const Counter = require("./counter");

/* order schema */
const orderSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      unique: true
    },

    purchase: {
      type: ObjectId,
      ref: "Purchase",
      required: true
    },

    customer: {
      type: ObjectId,
      ref: "User",
      required: true
    },



    trackingCode: {
      type: String
    },
    paymentRefId: {
      type: String
    },

    shippingDate: {
      type: Date
    },

    deliveryDate: {
      type: Date
    },
    address: {
      type: ObjectId,
      ref: "Address"
    },

    userNote: {
      type: String
    },

    adminNote: {
      type: String
    },
    orderStatus: {
      type: String,
      enum: ["awaiting_address", "final_review", "cancelled", "delivered"],
      default: "awaiting_address"
    },
    ...baseSchema.obj
  },
  { timestamps: true }
);

/* create order model */
orderSchema.pre("save", async function (next) {
  if (this.isNew) {
    try {
      const counter = await Counter.findOneAndUpdate(
        { name: "orderId" },
        { $inc: { seq: 1 } },
        { new: true, upsert: true }
      );

      const date = new Date();
      const yyyy = date.getFullYear();
      const mm = String(date.getMonth() + 1).padStart(2, "0");
      const dd = String(date.getDate()).padStart(2, "0");
      const paddedSeq = String(counter.seq).padStart(6, "0");

      this.orderId = `NHN-${yyyy}${mm}${dd}-${paddedSeq}`;
      next();
    } catch (error) {
      next(error);
    }
  } else {
    next();
  }
});
const Order = mongoose.model("Order", orderSchema);

/* export order model */
module.exports = Order;
