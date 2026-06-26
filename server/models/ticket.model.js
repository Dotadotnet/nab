const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const baseSchema = require("./baseSchema.model");
const Counter = require("./counter");

const ticketSchema = new mongoose.Schema(
  {
    ticketId: {
      type: String,
      unique: true
    },
    ...baseSchema.obj,
    subject: {
      type: String,
      required: [true, "موضوع تیکت الزامی است"],
      trim: true,
      maxLength: [160, "موضوع تیکت نمی‌تواند بیشتر از 160 کاراکتر باشد"]
    },
    customer: {
      type: ObjectId,
      ref: "User",
      required: true
    },
    assignedAdmin: {
      type: ObjectId,
      ref: "Admin"
    },
    relatedOrder: {
      type: ObjectId,
      ref: "Order"
    },
    priority: {
      type: String,
      enum: ["low", "normal", "high", "urgent"],
      default: "normal"
    },
    status: {
      type: String,
      enum: ["open", "pending_admin", "pending_user", "closed"],
      default: "open"
    },
    lastMessageAt: {
      type: Date,
      default: Date.now
    },
    closedAt: Date
  },
  { timestamps: true }
);

ticketSchema.pre("save", async function (next) {
  if (!this.isNew || this.ticketId) return next();

  try {
    const counter = await Counter.findOneAndUpdate(
      { name: "ticketId" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
    this.ticketId = `TCK-${String(counter.seq).padStart(6, "0")}`;
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model("Ticket", ticketSchema);
