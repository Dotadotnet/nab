const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const baseSchema = require("./baseSchema.model");

const deviceTokenSchema = new mongoose.Schema(
  {
    owner: {
      type: ObjectId,
      required: true,
      refPath: "ownerModel"
    },
    ownerModel: {
      type: String,
      enum: ["User", "Admin"],
      required: true
    },
    token: {
      type: String,
      required: true,
      unique: true
    },
    platform: {
      type: String,
      enum: ["android", "ios", "web"],
      default: "android"
    },
    deviceName: String,
    lastSeenAt: {
      type: Date,
      default: Date.now
    },
    ...baseSchema.obj
  },
  { timestamps: true }
);

deviceTokenSchema.index({ owner: 1, ownerModel: 1 });

module.exports = mongoose.model("DeviceToken", deviceTokenSchema);
