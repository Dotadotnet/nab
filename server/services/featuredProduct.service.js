const FeaturedProduct = require("../models/featuredProduct.model");
const remove = require("../utils/remove.util");
const Translation = require("../models/translation.model");
const translateFields = require("../utils/translateFields");

/* add new featuredProduct */
exports.addFeaturedProduct = async (req, res) => {
  const { title, description, product, category, priority } = req.body;
  try {
    const thumbnail = req.uploadedFiles["thumbnail"]
      ? {
          url: req.uploadedFiles["thumbnail"][0].url,
          public_id: req.uploadedFiles["thumbnail"][0].key
        }
      : null;
    const carouselThumbnail = req.uploadedFiles["carouselThumbnail"]
      ? {
          url: req.uploadedFiles["carouselThumbnail"][0].url,
          public_id: req.uploadedFiles["carouselThumbnail"][0].key
        }
      : null;

    const featuredProduct = new FeaturedProduct({
      title: title,
      thumbnail,
      carouselThumbnail,
      creator: req.admin._id,
      product: product,
      category: category,
      priority: priority
    });
    const result = await featuredProduct.save();

    try {
      const translations = await translateFields(
        {
          title,
          description
        },
        {
          stringFields: ["title", "description"]
        }
      );
      const translationDocs = Object.entries(translations).map(
        ([lang, { fields }]) => ({
          language: lang,
          refModel: "FeaturedProduct",
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
      await FeaturedProduct.findByIdAndUpdate(result._id, {
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
      await FeaturedProduct.findByIdAndDelete(result._id);
      return res.status(500).json({
        acknowledgement: false,
        message: "Translation Save Error",
        description: "خطا در ذخیره ترجمه‌ها. دسته‌بندی حذف شد.",
        error: translationError.message
      });
    }
  } catch (error) {
    console.error("Error in addFeaturedProduct:", error.message);
    res.status(500).json({
      acknowledgement: false,
      message: "Error",
      description: "خطا در ایجاد دسته بندی",
      error: error.message
    });
  }
};

/* get all featuredProducts */
exports.getFeaturedProducts = async (req, res) => {
  try {
    const featuredProducts = await FeaturedProduct.find()
      .select("thumbnail carouselThumbnail priority translations")
      .populate([
        {
          path: "translations.translation",
          match: { language: req.locale },
          select: "fields.title fields.description language"
        },
        {
          path: "product",
          select: "productId _id translations variations",
          populate: [
            {
              path: "translations.translation",
              match: { language: req.locale },
              select: "fields.slug language"
            },
            {
              path: "variations",
              select: "price"
            }
          ]
        },
        {
          path: "creator",
          select: "name avatar"
        }
      ])
      .sort({ priority: 1 });

    res.status(200).json({
      acknowledgement: true,
      message: "Ok",
      description: "محصولات ویژه با موفقیت دریافت شدند",
      data: featuredProducts
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      acknowledgement: false,
      message: "خطا در دریافت محصولات ویژه",
      description: error.message
    });
  }
};

exports.getFeaturedProduct = async (req, res) => {
  const featuredProduct = await FeaturedProduct.findById(req.params.id);
  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "FeaturedProduct fetched successfully",
    data: featuredProduct
  });
};

/* update featuredProduct */
exports.updateFeaturedProduct = async (req, res) => {
  const featuredProduct = await FeaturedProduct.findById(req.params.id);
  let updatedFeaturedProduct = req.body;
  if (!req.body.thumbnail && req.file) {
    await remove(featuredProduct.thumbnail.public_id);

    updatedFeaturedProduct.thumbnail = {
      url: req.file.path,
      public_id: req.file.filename
    };
  }

  updatedFeaturedProduct.keynotes = JSON.parse(req.body.keynotes);
  updatedFeaturedProduct.tags = JSON.parse(req.body.tags);

  await FeaturedProduct.findByIdAndUpdate(
    req.params.id,
    updatedFeaturedProduct
  );

  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "FeaturedProduct updated successfully"
  });
};

/* delete featuredProduct */
exports.deleteFeaturedProduct = async (req, res, next) => {
  try {
    const featuredProduct = await FeaturedProduct.findById(req.params.id);
    console.log(featuredProduct);
    if (!featuredProduct) {
      return res.status(404).json({
        acknowledgement: false,
        message: "Not Found",
        description: "محصول ویژه مورد نظر برای حذف یافت نشد"
      });
    }
    const translationIds = featuredProduct.translations.map(
      (item) => item.translation
    );
    await Translation.deleteMany({ _id: { $in: translationIds } });
    await FeaturedProduct.findByIdAndDelete(req.params.id);
    await remove("featuredProduct", featuredProduct.thumbnail.public_id);

    res.status(200).json({
      acknowledgement: true,
      message: "Ok",
      description: "دسته بندی با موفقیت حذف شد"
    });
  } catch (error) {
    res.status(500).json({
      acknowledgement: false,
      message: "Error",
      description: "خطایی در حذف اخبار رخ داد",
      error: error.message
    });
  }
};
