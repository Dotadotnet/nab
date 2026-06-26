/* internal imports */
const NewsCountry = require("../models/newsCountry.model");
const Admin = require("../models/admin.model");
const CountryTranslation = require("../models/countryTranslation.model");
const translateFields = require("../utils/translateFields");
const { generateSlug } = require("../utils/seoUtils");
exports.addNewsCountry = async (req, res) => {
  try {
    const { title, name, description, ...otherInformation } = req.body;
    console.log(req.body)
    const newsCountry = new NewsCountry({
      ...otherInformation,
      creator: req.admin._id
    });

    const result = await newsCountry.save();
    const countryName = name || title;
    const slug = await generateSlug(countryName);
    try {
      const translations = await translateFields(
        {
          name: countryName,
          description,
          slug
        },
        {
          stringFields: ["name", "description"],
          lowercaseFields: ["slug"]
        }
      );
      const translationDocs = Object.entries(translations).map(
        ([lang, { fields }]) => ({
          language: lang,
          country: result._id,
          name: fields.name,
          description: fields.description,
          slug: fields.slug
        })
      );
      const savedTranslations = await CountryTranslation.insertMany(translationDocs);
      const translationInfos = savedTranslations.map((t) => ({
        translation: t._id,
        language: t.language
      }));
      await NewsCountry.findByIdAndUpdate(result._id, {
        $set: { translations: translationInfos }
      });
      res.status(201).json({
        acknowledgement: true,
        message: "Created",
        description: "اخبار با موفقیت ایجاد شد",
        data: result
      });
    } catch (translationError) {
      await NewsCountry.findByIdAndDelete(result._id);
      console.log(translationError.message);
      return res.status(500).json({
        acknowledgement: false,
        message: "Translation Save Error",
        description: "خطا در ذخیره ترجمه‌ها. کشور خبر حذف شد.",
        error: translationError.message
      });
    }
  } catch (error) {
    console.log(error.message)
    const errorMessage = error.message.split(":")[2]?.trim();
    res.status(500).json({
      acknowledgement: false,
      message: "Error",
      description: error.message,
      error: error.message
    });
  }
};

/* 📌 دریافت همه کشور خبر */
exports.getNewsCountries = async (res,req) => {
  try {
    console.log(req)
    const countries = await NewsCountry.find({
      isDeleted: false
    }).populate([
      {
        path: "translations.translation",
        match: { language: req.locale }
      },
      {
        path: "creator",
        select: "name avatar"
      }
    ])
    res.status(200).json({
      acknowledgement: true,
      message: "Ok",
      description: "لیست کشور خبر با موفقیت دریافت شد",
      data: countries
    });
  } catch (error) {
    res.status(500).json({
      acknowledgement: false,
      message: "Error",
      description: "خطایی در دریافت کشور خبر رخ داد",
      error: error.message
    });
  }
};

/* 📌 دریافت یک کشور خبر */
exports.getNewsCountry = async (req, res) => {
  try {
    const newsCountry = await NewsCountry.findById(req.params.id);

    if (!newsCountry) {
      return res.status(404).json({
        acknowledgement: false,
        message: "Not Found",
        description: "کشور خبر مورد نظر یافت نشد"
      });
    }

    res.status(200).json({
      acknowledgement: true,
      message: "Ok",
      description: "کشور خبر با موفقیت دریافت شد",
      data: newsCountry
    });
  } catch (error) {
    console.log(error);
    const errorMessage = error.message.split(":")[2]?.trim();

    res.status(500).json({
      acknowledgement: false,
      message: "Error",
      description: errorMessage,
      error: error.message
    });
  }
};

/* 📌 بروزرسانی کشور خبر */
exports.updateNewsCountry = async (req, res) => {
  try {
    const updatedNewsCountry = req.body;
    const updatedCountryName = updatedNewsCountry.name || updatedNewsCountry.title;
    if (updatedCountryName || updatedNewsCountry.description) {
      try {
        const slug = updatedCountryName
          ? await generateSlug(updatedCountryName)
          : undefined;
        const translations = await translateFields(
          {
            name: updatedCountryName,
            description: updatedNewsCountry.description,
            slug
          },
          {
            stringFields: ["name", "description"],
            lowercaseFields: ["slug"]
          }
        );

        const savedTranslations = [];
        for (const [language, { fields }] of Object.entries(translations)) {
          const translation = await CountryTranslation.findOneAndUpdate(
            { country: req.params.id, language },
            {
              $set: {
                name: fields.name,
                description: fields.description,
                slug: fields.slug
              }
            },
            { new: true, upsert: true, setDefaultsOnInsert: true }
          );
          savedTranslations.push({
            translation: translation._id,
            language
          });
        }

        await NewsCountry.findByIdAndUpdate(req.params.id, {
          $set: { translations: savedTranslations }
        });
      } catch (translateErr) {
        console.error("خطا در ترجمه:", translateErr);
        return res.status(500).json({
          acknowledgement: false,
          message: "Error",
          description: "خطایی در فرآیند ترجمه هنگام بروزرسانی رخ داد",
          error: translateErr.message
        });
      }
    }
    if (updatedCountryName) {
      updatedNewsCountry.slug = await generateSlug(updatedCountryName);
    }
    const result = await NewsCountry.findByIdAndUpdate(
      req.params.id,
      updatedNewsCountry,
      { new: true, runValidators: true }
    );

    if (!result) {
      return res.status(404).json({
        acknowledgement: false,
        message: "Not Found",
        description: "کشور خبر مورد نظر برای بروزرسانی یافت نشد"
      });
    }

    res.status(200).json({
      acknowledgement: true,
      message: "Ok",
      description: "کشور خبر با موفقیت بروزرسانی شد",
      data: result
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      acknowledgement: false,
      message: "Error",
      description: "خطایی در بروزرسانی کشور خبر رخ داد",
      error: error.message
    });
  }
};

/* 📌 حذف کشور خبر */
exports.deleteNewsCountry = async (req, res) => {
  try {
    const newsCountry = await NewsCountry.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true },
      { new: true }
    );
    if (!newsCountry) {
      return res.status(404).json({
        acknowledgement: false,
        message: "Not Found",
        description: "کشور خبر مورد نظر برای حذف یافت نشد"
      });
    }

    res.status(200).json({
      acknowledgement: true,
      message: "Ok",
      description: "کشور خبر با موفقیت حذف شد"
    });
  } catch (error) {
    res.status(500).json({
      acknowledgement: false,
      message: "Error",
      description: "خطایی در حذف کشور خبر رخ داد",
      error: error.message
    });
  }
};
