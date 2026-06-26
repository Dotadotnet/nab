const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const baseSchema = require("./baseSchema.model");

const chatMessageSchema = new mongoose.Schema(
  {
    ticket: {
      type: ObjectId,
      ref: "Ticket",
      required: true
    },
    sender: {
      type: ObjectId,
      required: true,
      refPath: "senderModel"
    },
    senderModel: {
      type: String,
      enum: ["User", "Admin"],
      required: true
    },
    body: {
      type: String,
      required: [true, "متن پیام الزامی است"],
      trim: true,
      maxLength: [5000, "متن پیام نمی‌تواند بیشتر از 5000 کاراکتر باشد"]
    },
    attachments: [
      {
        url: String,
        public_id: String,
        type: {
          type: String,
          enum: ["image", "video", "file"],
          default: "file"
        }
      }
    ],
    readByAdminAt: Date,
    readByUserAt: Date,
    ...baseSchema.obj
  },
  { timestamps: true }
);

chatMessageSchema.index({ ticket: 1, createdAt: -1 });

module.exports = mongoose.model("ChatMessage", chatMessageSchema);
