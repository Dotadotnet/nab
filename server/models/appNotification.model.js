const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const baseSchema = require("./baseSchema.model");

const appNotificationSchema = new mongoose.Schema(
  {
    recipient: {
      type: ObjectId,
      required: true,
      refPath: "recipientModel"
    },
    recipientModel: {
      type: String,
      enum: ["User", "Admin"],
      required: true
    },
    type: {
      type: String,
      enum: ["order_created", "ticket_created", "message_created"],
      required: true
    },
    title: {
      type: String,
      required: true
    },
    body: String,
    data: {
      type: mongoose.Schema.Types.Mixed,
      default: {}
    },
    readAt: Date,
    ...baseSchema.obj
  },
  { timestamps: true }
);

appNotificationSchema.index({ recipient: 1, recipientModel: 1, createdAt: -1 });

module.exports = mongoose.model("AppNotification", appNotificationSchema);
