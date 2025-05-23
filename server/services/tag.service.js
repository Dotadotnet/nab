/* internal import */
const Tag = require("../models/tag.model");
const User = require("../models/user.model");
const Translation = require("../models/translation.model");
const { generateSlug, generateSeoFields } = require("../utils/seoUtils");
const translateFields = require("../utils/translateFields");

const defaultDomain = process.env.NEXT_PUBLIC_CLIENT_URL;

/* add new tag */
exports.addTag = async (req, res) => {
  try {
    const { title, description, keynotes, robots } = req.body;

    const parsedKeynotes = JSON.parse(keynotes);
    const parsedRobots = JSON.parse(robots);

    const robotsArray = parsedRobots.map((value, index) => ({
      id: index + 1,
      value
    }));

    const tag = new Tag({
      creator: req.admin._id,
      title: title,
      robots: robotsArray
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
            "metaDescription",
            "canonicalUrl"
          ],
          lowercaseFields: ["slug"],
          arrayStringFields: ["keynotes"]
        }
      );
      const translationDocs = Object.entries(translations).map(
        ([lang, { fields }]) => ({
          language: lang,
          refModel: "Tag",
          refId: result._id,
          fields
        })
      );
      const savedTranslations = await Translation.insertMany(translationDocs);
      const translationInfos = savedTranslations.map((t) => ({
        translation: t._id,
        language: t.language
      }));
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


exports.getTags = async (req, res) => {
  const { page = 1, limit = 5, search = "" } = req.query;
  const skip = (page - 1) * limit;

  try {
    let matchedTagIds = [];

    if (search) {
      const translations = await Translation.find({
        language: req.locale,
        refModel: "Tag",
        "fields.title": { $regex: search, $options: "i" }
      }).select("refId");

      matchedTagIds = translations.map((t) => t.refId);
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
  const parsedRobots = JSON.parse(req.body.robots);
  const robotsArray = parsedRobots.map((value, index) => ({
    id: index + 1,
    value
  }));

  updatedTag.keynotes = JSON.parse(req.body.keynotes);
  updatedTag.robots = robotsArray;
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
