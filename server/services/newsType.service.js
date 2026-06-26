/* internal imports */
const NewsType = require("../models/newsType.model");
const NewsTypeTranslation = require("../models/newsTypeTranslation.model");
const { generateSlug } = require("../utils/seoUtils");
const translateFields = require("../utils/translateFields");
const {
  buildTranslationDocs,
  buildTranslationInfos
} = require("../utils/translationDocs");

/* 📌 اضافه کردن نوع خبر جدید */
exports.addNewsType = async (req, res) => {
  try {
    const { title, description, icon } = req.body;

    const newsType = new NewsType({
      title,
      description,
      icon,
      creator: req.admin._id
    });
    const result = await newsType.save();
    const slug = await generateSlug(title);

    try {
      const translations = await translateFields(
        {
          title,
          description,
          slug
        },
        {
          stringFields: ["title", "description"],
          lowercaseFields: ["slug"]
        }
      );
      const translationDocs = buildTranslationDocs(
        translations,
        "newsType",
        result._id
      );
      const savedTranslations = await NewsTypeTranslation.insertMany(translationDocs);
      const translationInfos = buildTranslationInfos(savedTranslations);
      await NewsType.findByIdAndUpdate(result._id, {
        $set: { translations: translationInfos }
      });
      res.status(201).json({
        acknowledgement: true,
        message: "Created",
        description: "نوع خبر با موفقیت ایجاد شد",
        data: result
      });
    } catch (translationError) {
      await NewsType.findByIdAndDelete(result._id);
      return res.status(500).json({
        acknowledgement: false,
        message: "Translation Save Error",
        description: "خطا در ذخیره ترجمه‌ها. نوع خبر حذف شد.",
        error: translationError.message
      });
    }
  } catch (error) {
    const errorMessage = error.message.split(":")[2]?.trim();

    res.status(500).json({
      acknowledgement: false,
      message: "Error",
      description: errorMessage,
      error: error.message
    });
  }
};

/* 📌 دریافت همه نوع خبر */
exports.getNewsTypes = async (req,res) => {
  try {
    const newsType = await NewsType.find({ isDeleted: false }).populate([
      {
        path: "translations.translation",
        match: { language: req.locale }
      },
      {
        path: "creator",
        select: "name avatar"
      }
    ]);
    console.log(req.locale)
    res.status(200).json({
      acknowledgement: true,
      message: "Ok",
      description: "لیست نوع خبر با موفقیت دریافت شد",
      data: newsType
    });
  } catch (error) {
    res.status(500).json({
      acknowledgement: false,
      message: "Error",
      description: "خطایی در دریافت نوع خبر رخ داد",
      error: error.message
    });
  }
};

/* 📌 دریافت یک نوع خبر */
exports.getNewsType = async (req, res) => {
  try {
    const newsType = await NewsType.findById(req.params.id);

    if (!newsType) {
      return res.status(404).json({
        acknowledgement: false,
        message: "Not Found",
        description: "نوع خبر مورد نظر یافت نشد"
      });
    }

    res.status(200).json({
      acknowledgement: true,
      message: "Ok",
      description: "نوع خبر با موفقیت دریافت شد",
      data: newsType
    });
  } catch (error) {
    res.status(500).json({
      acknowledgement: false,
      message: "Error",
      description: "خطایی در دریافت نوع خبر رخ داد",
      error: error.message
    });
  }
};

/* 📌 بروزرسانی نوع خبر */
exports.updateNewsType = async (req, res) => {
  try {
    const updatedNewsType = req.body;

    if (updatedNewsType.title || updatedNewsType.description) {
      try {
        const slug = updatedNewsType.title
          ? await generateSlug(updatedNewsType.title)
          : undefined;
        const translations = await translateFields(
          {
            title: updatedNewsType.title,
            description: updatedNewsType.description,
            slug
          },
          {
            stringFields: ["title", "description"],
            lowercaseFields: ["slug"]
          }
        );

        const savedTranslations = [];
        for (const [language, { fields }] of Object.entries(translations)) {
          const translation = await NewsTypeTranslation.findOneAndUpdate(
            { newsType: req.params.id, language },
            { $set: fields },
            { new: true, upsert: true, setDefaultsOnInsert: true }
          );
          savedTranslations.push({
            translation: translation._id,
            language
          });
        }

        await NewsType.findByIdAndUpdate(req.params.id, {
          $set: { translations: savedTranslations }
        });
      } catch (translateErr) {
        console.error("❌ خطا در ترجمه:", translateErr.message);
        return res.status(404).json({
          acknowledgement: false,
          message: "ترجمه نشد",
          description: "خطا در  فرآیند ترجمه"
        });
      }
    }
    if (updatedNewsType.title) {
      updatedNewsType.slug = await generateSlug(updatedNewsType.title);
    }
    const result = await NewsType.findByIdAndUpdate(
      req.params.id,
      updatedNewsType,
      { new: true }
    );

    if (!result) {
      return res.status(404).json({
        acknowledgement: false,
        message: "Not Found",
        description: "نوع خبر مورد نظر یافت نشد"
      });
    }

    res.status(200).json({
      acknowledgement: true,
      message: "Ok",
      description: "نوع خبر با موفقیت دریافت و بروزرسانی شد",
      data: result
    });
  } catch (error) {
    res.status(500).json({
      acknowledgement: false,
      message: "Error",
      description: "خطایی در دریافت یا بروزرسانی نوع خبر رخ داد",
      error: error.message
    });
  }
};

/* 📌 حذف نوع خبر */
exports.deleteNewsType = async (req, res) => {
  try {
    const newsType = await NewsType.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true },
      { new: true }
    );
    if (!newsType) {
      return res.status(404).json({
        acknowledgement: false,
        message: "Not Found",
        description: "نوع خبر مورد نظر برای حذف یافت نشد"
      });
    }

    res.status(200).json({
      acknowledgement: true,
      message: "Ok",
      description: "نوع خبر با موفقیت حذف شد"
    });
  } catch (error) {
    res.status(500).json({
      acknowledgement: false,
      message: "Error",
      description: "خطایی در حذف نوع خبر رخ داد",
      error: error.message
    });
  }
};
