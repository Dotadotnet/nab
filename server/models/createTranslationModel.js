const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const { SUPPORTED_LANGUAGES } = require("../utils/languages");

const createTranslationModel = (modelName, refField, refModel) => {
  const schema = new mongoose.Schema(
    {
      [refField]: {
        type: ObjectId,
        ref: refModel,
        required: true,
        index: true
      },
      language: {
        type: String,
        enum: SUPPORTED_LANGUAGES,
        required: true
      }
    },
    { timestamps: true, strict: false }
  );

  schema.index({ [refField]: 1, language: 1 }, { unique: true });

  return mongoose.model(modelName, schema);
};

module.exports = createTranslationModel;
