const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const baseSchema = require("./baseSchema.model");

const addressSchema = new mongoose.Schema(
  {
    user: {
      type: ObjectId,
      ref: "User",
      required: true
    },
    province: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    address: {
      type: String
    },
    plateNumber: { 
      type: Number,
    },
    postalCode: {
      type: Number,
    },
    isDefault: {
      type: Boolean,
      default: false
    },
    isComplete: {
      type: Boolean,
      default: false
    },
    ...baseSchema.obj
  },
  { timestamps: true }
);

// بررسی کامل بودن قبل از ذخیره
addressSchema.pre("save", function (next) {
  const requiredFields = [
    this.province,
    this.city,
    this.address,
    this.plaque,
    this.postalCode
  ];
  const allFilled = requiredFields.every(
    field => typeof field === "string" && field.trim().length > 0
  );
  this.isComplete = allFilled;
  next();
});

const Address = mongoose.model("Address", addressSchema);
module.exports = Address;
