/* internal import */
const Tag = require("../models/tag.model");
const TagTranslation = require("../models/tagTranslation.model");
const { generateSlug, generateSeoFields } = require("../utils/seoUtils");
const translateFields = require("../utils/translateFields");
const Product = require("../models/product.model");
const {
  buildTranslationDocs,
  buildTranslationInfos
} = require("../utils/translationDocs");


const defaultDomain = process.env.NEXT_PUBLIC_CLIENT_URL;

/* add new tag */
exports.addTag = async (req, res) => {
  try {
    const { title, description, keynotes } = req.body;

    const parsedKeynotes = JSON.parse(keynotes);
    const thumbnail = req.uploadedFiles?.thumbnail?.length
      ? {
          url: req.uploadedFiles.thumbnail[0].url,
          public_id: req.uploadedFiles.thumbnail[0].key
        }
      : undefined;

    const tag = new Tag({
      creator: req.admin._id,
      title: title,
      ...(thumbnail ? { thumbnail } : {})
    });

    const result = await tag.save();
    const slug = await generateSlug(title);
    const canonicalUrl = `${defaultDomain}/tag/${result.tagId}/${slug}`;
    const { metaTitle, metaDescription } = generateSeoFields({
      title,
      summary: description
    });
    try {
      const translations = await translateFields(
        {
          title,
          description,
          metaTitle,
          slug,
          metaDescription,
          keynotes: parsedKeynotes,
          canonicalUrl
        },
        {
          stringFields: [
            "title",
            "description",
            "content",
            "metaTitle",
            "metaDescription"
          ],
          copyFields: ["canonicalUrl"],
          lowercaseFields: ["slug"],
          arrayStringFields: ["keynotes"]
        }
      );
      const translationDocs = buildTranslationDocs(
        translations,
        "tag",
        result._id
      );
      const savedTranslations = await TagTranslation.insertMany(translationDocs);
      const translationInfos = buildTranslationInfos(savedTranslations);
      await Tag.findByIdAndUpdate(result._id, {
        $set: { translations: translationInfos }
      });
    } catch (translationError) {
      console.log(translationError.message);
      await Tag.findByIdAndDelete(result._id);
      return res.status(500).json({
        acknowledgement: false,
        message: "Translation Save Error",
        description: "خطا در ذخیره ترجمه‌ها.  کلمه کلیدی حذف شد.",
        error: translationError.message
      });
    }

    res.status(201).json({
      acknowledgement: true,
      message: "Created",
      description: "تگ با موفقیت ترجمه و ذخیره شد"
    });
  } catch (error) {
    console.error("Error in addTag:", error);
    res.status(500).json({
      acknowledgement: false,
      message: "Error",
      description: "خطایی در ایجاد تگ رخ داد",
      error: error.message
    });
  }
};

exports.getTag = async (req, res) => {
  const tag = await Tag.findOne({ _id: req.params.id, isDeleted: false })
    .populate([
      {
        path: "translations.translation",
        match: { language: req.locale }
      },
      {
        path: "creator",
        select: "name avatar"
      }
    ]);

  if (!tag) {
    return res.status(404).json({
      acknowledgement: false,
      message: "Not Found",
      description: "ØªÚ¯ ÛŒØ§ÙØª Ù†Ø´Ø¯"
    });
  }

  const object = tag.toObject();
  const fields = object.translations?.find((item) => item.translation)?.translation || {};

  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "ØªÚ¯ Ø¨Ø§ Ù…ÙˆÙÙ‚ÛŒØª Ø¯Ø±ÛŒØ§ÙØª Ø´Ø¯",
    data: {
      ...object,
      description: fields.description || "",
      keynotes: fields.keynotes || []
    }
  });
};




exports.getItem = async (req, res) => {
  let { page, name } = req.params;
  const tag = await Tag.find({ title : name });
  const id =  tag[0]._id;
  const Products = await Product.find();
  const Blogs = await Blog.find();

  const items = [].concat(Products,  Blogs);
  const result = [];

  items.forEach(item => {
    if (item.tags.includes(id)) {
      result.push(item)
    }
  });
  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "تگ‌ها با موفقیت دریافت شدند",
    data: {
      total: result.length,
      data: result.splice(page - 1, page * 10),
      tag: tag[0]
    },
  });


};



exports.getTags = async (req, res) => {
  const { page = 1, limit = 5, search = "" } = req.query;
  const skip = (page - 1) * limit;

  try {
    let matchedTagIds = [];

    if (search) {
      const translations = await TagTranslation.find({
        language: req.locale,
        title: { $regex: search, $options: "i" }
      }).select("tag");

      matchedTagIds = translations.map((t) => t.tag);
    }

    const query = {
      isDeleted: false,
      ...(search ? { _id: { $in: matchedTagIds } } : {})
    };

    const tags = await Tag.find(query)
      .skip(skip)
      .limit(Number(limit))
      .sort({ createdAt: -1 })
      .populate([
        {
          path: "translations.translation",
          match: { language: req.locale }
        },
        {
          path: "creator",
          select: "name avatar"
        }
      ]);

    const total = await Tag.countDocuments(query);

    res.status(200).json({
      acknowledgement: true,
      message: "Ok",
      description: "تگ‌ها با موفقیت دریافت شدند",
      data: tags,
      total
    });
  } catch (error) {
    console.error("Error fetching tags:", error);
    res.status(500).json({
      acknowledgement: false,
      message: "Error",
      description: "خطا در دریافت تگ‌ها",
      error: error.message
    });
  }
};


/* update tag */
exports.updateTag = async (req, res) => {
  let updatedTag = req.body;

  updatedTag.keynotes = JSON.parse(req.body.keynotes);
  if (req.uploadedFiles?.thumbnail?.length) {
    updatedTag.thumbnail = {
      url: req.uploadedFiles.thumbnail[0].url,
      public_id: req.uploadedFiles.thumbnail[0].key
    };
  }

  await Tag.findByIdAndUpdate(req.params.id, updatedTag);

  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "تگ با موفقیت ویرایش شد"
  });
};

/* delete tag */
exports.deleteTag = async (req, res) => {
  const tag = await Tag.findByIdAndUpdate(
    req.params.id,
    {
      isDeleted: true,
      deletedAt: Date.now()
    },
    { new: true }
  );

  if (!tag) {
    return res.status(404).json({
      acknowledgement: false,
      message: "تگ پیدا نشد",
      description: "تگی که می‌خواهید حذف کنید، وجود ندارد"
    });
  }

  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "تگ با موفقیت حذف شد"
  });
};
