const Category = require("../models/category.model");
const User = require("../models/user.model");
const remove = require("../utils/remove.util");
const Translation = require("../models/translation.model");
const { generateSlug } = require("../utils/seoUtils");
const translateFields = require("../utils/translateFields");

const defaultDomain = process.env.NEXT_PUBLIC_CLIENT_URL;

/* add new category */
exports.addCategory = async (req, res) => {
  const { title, description, icon, tags, keynotes } = req.body;
  try {
    const thumbnail = req.uploadedFiles["thumbnail"]
      ? {
          url: req.uploadedFiles["thumbnail"][0].url,
          public_id: req.uploadedFiles["thumbnail"][0].key
        }
      : null;

    const category = new Category({
      title: title,
      thumbnail,
      creator: req.admin._id,
      icon: icon
    });

    const parseKeynotes = JSON.parse(keynotes);
    const parseTags = JSON.parse(tags);

    const result = await category.save();

    const slug = await generateSlug(title);
    const canonicalUrl = `${defaultDomain}/category/${result.categoryId}/${slug}`;

    try {
      const translations = await translateFields(
        {
          title,
          description,
          slug,
          canonicalUrl,
          tags: parseTags,
          keynotes: parseKeynotes
        },
        {
          stringFields: ["title", "description", "canonicalUrl"],
          lowercaseFields: ["slug"],

          arrayStringFields: ["keynotes", "tags"]
        }
      );
      const translationDocs = Object.entries(translations).map(
        ([lang, { fields }]) => ({
          language: lang,
          refModel: "Category",
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
      await Category.findByIdAndUpdate(result._id, {
        $set: { translations: translationInfos }
      });

      return res.status(201).json({
        acknowledgement: true,
        message: "Created",
        description: "دسته‌بندی با موفقیت ایجاد و ترجمه شد.",
        data: result
      });
    } catch (translationError) {
      console.log(translationError.message);
      await Category.findByIdAndDelete(result._id);
      return res.status(500).json({
        acknowledgement: false,
        message: "Translation Save Error",
        description: "خطا در ذخیره ترجمه‌ها. دسته‌بندی حذف شد.",
        error: translationError.message
      });
    }
  } catch (error) {
    console.error("Error in addCategory:", error.message);
    res.status(500).json({
      acknowledgement: false,
      message: "Error",
      description: "خطا در ایجاد دسته بندی",
      error: error.message
    });
  }
};
/* get all categories */
exports.getCategories = async (req, res) => {
  const categories = await Category.find().populate([
    {
      path: "translations.translation",
      match: { language: req.locale }
    },
    {
      path: "creator",
      select: "name avatar"
    }
  ]);
  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "دسته بندی ها با موفقیت دریافت شدند",
    data: categories
  });
};

exports.getProductCategories = async (res) => {
  const categories = await Category.find().populate({
    path: "products",
    match: { isDeleted: false, status: "active", publishStatus: "approved" },
    select: "_id"
  });
  const filteredCategories = categories.filter(
    (category) => category.products.length > 0
  );

  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "دسته بندی ها با موفقیت دریافت شدند",
    data: filteredCategories
  });
};
/* get a category */
exports.getCategory = async (req, res) => {
  const category = await Category.findById(req.params.id);
  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "Category fetched successfully",
    data: category
  });
};

/* update category */
exports.updateCategory = async (req, res) => {
  const category = await Category.findById(req.params.id);
  let updatedCategory = req.body;
  if (!req.body.thumbnail && req.file) {
    await remove(category.thumbnail.public_id);

    updatedCategory.thumbnail = {
      url: req.file.path,
      public_id: req.file.filename
    };
  }

  updatedCategory.keynotes = JSON.parse(req.body.keynotes);
  updatedCategory.tags = JSON.parse(req.body.tags);

  await Category.findByIdAndUpdate(req.params.id, updatedCategory);

  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "Category updated successfully"
  });
};

/* delete category */
exports.deleteCategory = async (req, res, next) => {
  const category = await Category.findByIdAndUpdate(
    req.params.id,
    {
      isDeleted: true,
      deletedAt: Date.now()
    },
    { new: true }
  );

  if (!category) {
    return res.status(404).json({
      acknowledgement: false,
      message: "دسته بندی پیدا نشد",
      description: "دسته بندی  که می‌خواهید حذف کنید، وجود ندارد"
    });
  }

  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "دسته بندی با موفقیت حذف شد"
  });
};
