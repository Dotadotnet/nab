const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const qrCodeSchema = new mongoose.Schema(
  {
    variation: {
      type: ObjectId,
      ref: "Variation",
      required: true,
    },
    code: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const QRCode = mongoose.model("QRCode", qrCodeSchema);
module.exports = QRCode;
