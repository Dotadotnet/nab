/* internal import */
const Unit = require("../models/unit.model");
const Product = require("../models/product.model");
const User = require("../models/user.model");
const remove = require("../utils/remove.util");
const { generateSlug } = require("../utils/seoUtils");
const translateFields = require("../utils/translateFields");
const Translation = require("../models/translation.model");

const defaultDomain = process.env.NEXT_PUBLIC_CLIENT_URL;

/* add new unit */
exports.addUnit = async (req, res) => {
  try {
    const { title, description, category, value } = req.body;
console.log("title, description, category, value",title, description, category, value)
    const unit = new Unit({
      title: title,
      category: category,
      value: value,
      creator: req.admin._id
    });

    const result = await unit.save();
    const slug = await generateSlug(title);
    const canonicalUrl = `${defaultDomain}/unit/${result.unitId}/${slug}`;

    try {
      const translations = await translateFields(
        {
          title,
          description,
          slug,
          canonicalUrl
        },
        {
          stringFields: ["title", "description", "canonicalUrl"],
          lowercaseFields: ["slug"]
        }
      );
      const translationDocs = Object.entries(translations).map(
        ([lang, { fields }]) => ({
          language: lang,
          refModel: "Unit",
          refId: result._id,
          fields
        })
      );
      const insertedTranslations = await Translation.insertMany(
        translationDocs
      );

      const translationInfos = insertedTranslations.map((t) => ({
        translation: t._id,
        language: t.language
      }));
      await Unit.findByIdAndUpdate(result._id, {
        $set: { translations: translationInfos }
      });

      return res.status(201).json({
        acknowledgement: true,
        message: "Created",
        description: "واحد با موفقیت ایجاد و ترجمه شد.",
        data: result
      });
    } catch (translationError) {
      console.log(translationError.message);
      await Unit.findByIdAndDelete(result._id);
      return res.status(500).json({
        acknowledgement: false,
        message: "Translation Save Error",
        description: "خطا در ذخیره ترجمه‌ها. واحد حذف شد.",
        error: translationError.message
      });
    }
  } catch (error) {
    console.error("Error in addUnit:", error.message);
    res.status(500).json({
      acknowledgement: false,
      message: "Error",
      description: "خطا در ایجاد واحد",
      error: error.message
    });
  }
};

/* get all units */
exports.getUnits = async (res) => {
  const units = await Unit.find().populate(["creator"]);

  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "واحد ها با موفقیت دریافت شدند",
    data: units
  });
};

/* get a unit */
exports.getUnit = async (req, res) => {
  const unit = await Unit.findById(req.params.id);

  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "Unit fetched successfully",
    data: unit
  });
};

/* update unit */
exports.updateUnit = async (req, res) => {
  let updatedUnit = req.body;
  console.log("updatedUnit", updatedUnit);
  console.log(req.params.id);
  await Unit.findByIdAndUpdate(req.params.id, updatedUnit);
  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "Unit updated successfully"
  });
};

/* delete unit */
exports.deleteUnit = async (req, res) => {
  const unit = await Unit.findByIdAndDelete(req.params.id);
  await remove(unit.logo.public_id);

  await Product.updateMany({ unit: req.params.id }, { $unset: { unit: "" } });
  await User.findByIdAndUpdate(unit.creator, {
    $unset: { unit: "" }
  });

  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "Unit deleted successfully"
  });
};
