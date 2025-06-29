const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema({
  type : { type: String, required: true },
  table : { type: Number, required: true },
  field : { type: Number, required: true },
});

const Counter = mongoose.model("Counter", counterSchema);

module.exports = Counter;
