/* internal import */
const Magazine = require("../models/magazine.model");
const MagazineTranslation = require("../models/magazineTranslation.model");
const Product = require("../models/product.model");
const User = require("../models/user.model");
const remove = require("../utils/remove.util");
const Category = require("../models/category.model");
const translateFields = require("../utils/translateFields");

/* add new magazine */
exports.addMagazine = async (req, res) => {
  const {tags, socialLinks, title, summary, content, metaTitle, metaDescription, whatYouWillLearn, ...otherInformation} = req.body;
  let thumbnail = null;
  let gallery = [];
  const parsedTags = tags ? JSON.parse(tags) : [];
  const parsedSocialLinks = socialLinks ? JSON.parse(socialLinks) : [];
  const parsedWhatYouWillLearn = whatYouWillLearn ? JSON.parse(whatYouWillLearn) : [];

  if (req.uploadedFiles && req.uploadedFiles["thumbnail"] && req.uploadedFiles["thumbnail"].length) {
    thumbnail = {
      url: req.uploadedFiles["thumbnail"][0].url,
      public_id: req.uploadedFiles["thumbnail"][0].key,
    };
  }

  if (req.uploadedFiles && req.uploadedFiles["gallery"] && req.uploadedFiles["gallery"].length > 0) {
    gallery = req.uploadedFiles["gallery"].map((file) => ({
      url: file.url,
      public_id: file.key,
    }));
  }

  // Create the main magazine document
  const magazineData = {
    ...otherInformation,
    creator: req.user._id,
    thumbnail,
    gallery,  
    tags: parsedTags,
    socialLinks: parsedSocialLinks,
    whatYouWillLearn: parsedWhatYouWillLearn
  };

  const magazine = await Magazine.create(magazineData);
  
  // Prepare data for translation
  const translationData = {
    title: title || "",
    summary: summary || "",
    content: content || "",
    metaTitle: metaTitle || "",
    metaDescription: metaDescription || ""
  };

  // Generate translations
  const translations = await translateFields(
    translationData,
    {
      stringFields: ["title", "metaTitle"],
      longTextFields: ["summary", "content"],
      lowercaseFields: ["metaDescription"]
    }
  );

  // Create translation documents for each language
  const translationPromises = Object.entries(translations).map(async ([language, translation]) => {
    const slug = title 
      ? title
          .toString()
          .trim()
          .toLowerCase()
          .replace(/[\u200B-\u200D\uFEFF]/g, "")
          .replace(/[\s\ـ]+/g, "-")
          .replace(/[^\u0600-\u06FFa-z0-9\-]/g, "")
          .replace(/-+/g, "-")
          .replace(/^-+|-+$/g, "")
      : "magazine";

    const translationDoc = {
      magazine: magazine._id,
      language,
      title: translation.fields.title || "",
      summary: translation.fields.summary || "",
      content: translation.fields.content || "",
      metaTitle: translation.fields.metaTitle || "",
      metaDescription: translation.fields.metaDescription || "",
      slug: language === "fa" ? slug : `${slug}-${language}`
    };

    return await MagazineTranslation.create(translationDoc);
  });

  await Promise.all(translationPromises);

  await Category.findByIdAndUpdate(magazine.category, {
    $push: { magazines: magazine._id },
  });

  res.status(201).json({
    acknowledgement: true,
    message: "Created",
    description: "مجله با موفقیت ایجاد شد",
  });
};

/* get all magazines */
exports.getMagazines = async (req, res) => {
  // Extract query parameters for pagination and filtering
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  
  // Build filter object
  const filter = {};
  
  // Add search filter if provided
  if (req.query.search) {
    filter.$text = { $search: req.query.search };
  }
  
  // Add category filter if provided
  if (req.query.category) {
    filter.category = req.query.category;
  }
  
  // Add publish status filter if provided
  if (req.query.publishStatus) {
    filter.publishStatus = req.query.publishStatus;
  }
  
  // Add visibility filter if provided
  if (req.query.visibility) {
    filter.visibility = req.query.visibility;
  }

  const magazines = await Magazine.find(filter)
    .select('thumbnail gallery readTime isFeatured visibility publishDate publishStatus category creator views whatYouWillLearn')
    .populate([
      {
        path: 'creator',
        select: 'name avatar'  
      },
      {
        path: 'category',
        select: 'title'
      }
    ])
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: -1 });

  const total = await Magazine.countDocuments(filter);
  const totalPages = Math.ceil(total / limit);

  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "مجله‌ها با موفقیت دریافت شدند",
    data: magazines,
    pagination: {
      currentPage: page,
      totalPages,
      total,
      hasNext: page < totalPages,
      hasPrev: page > 1
    }
  });
};

/* get a magazine */
exports.getMagazine = async (req, res) => {
  const magazine = await Magazine.findById(req.params.id).populate([
    {
      path: "creator",
      select: "name avatar",
    },
    {
      path: "tags",
      select: "title _id",
    },
    {
      path: "category",
      select: "title",
    }
  ]);
  
  // Get translations for this magazine
  const translations = await MagazineTranslation.find({ magazine: req.params.id });
  
  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "مجله با موفقیت دریافت شد",
    data: {
      ...magazine.toObject(),
      translations
    },
  });
};

/* update magazine */
exports.updateMagazine = async (req, res) => {
  const {tags, socialLinks, title, summary, content, metaTitle, metaDescription, whatYouWillLearn, ...otherInformation} = req.body;
  const parsedTags = tags ? JSON.parse(tags) : undefined;
  const parsedSocialLinks = socialLinks ? JSON.parse(socialLinks) : undefined;
  const parsedWhatYouWillLearn = whatYouWillLearn ? JSON.parse(whatYouWillLearn) : undefined;

  // Prepare update data
  const updateData = {...otherInformation};
  
  if (parsedTags !== undefined) updateData.tags = parsedTags;
  if (parsedSocialLinks !== undefined) updateData.socialLinks = parsedSocialLinks;
  if (parsedWhatYouWillLearn !== undefined) updateData.whatYouWillLearn = parsedWhatYouWillLearn;

  // Handle file uploads if present
  if (req.uploadedFiles) {
    if (req.uploadedFiles["thumbnail"] && req.uploadedFiles["thumbnail"].length) {
      updateData.thumbnail = {
        url: req.uploadedFiles["thumbnail"][0].url,
        public_id: req.uploadedFiles["thumbnail"][0].key,
      };
    }

    if (req.uploadedFiles["gallery"] && req.uploadedFiles["gallery"].length > 0) {
      updateData.gallery = req.uploadedFiles["gallery"].map((file) => ({
        url: file.url,
        public_id: file.key,
      }));
    }
  }

  // Update the main magazine document
  await Magazine.findByIdAndUpdate(req.params.id, updateData);
  
  // If content fields are being updated, regenerate translations
  if (title || summary || content || metaTitle || metaDescription) {
    const translationData = {
      title: title || "",
      summary: summary || "",
      content: content || "",
      metaTitle: metaTitle || "",
      metaDescription: metaDescription || ""
    };

    const translations = await translateFields(
      translationData,
      {
        stringFields: ["title", "metaTitle"],
        longTextFields: ["summary", "content"],
        lowercaseFields: ["metaDescription"]
      }
    );

    // Update or create translation documents for each language
    const translationPromises = Object.entries(translations).map(async ([language, translation]) => {
      const slug = title 
        ? title
            .toString()
            .trim()
            .toLowerCase()
            .replace(/[\u200B-\u200D\uFEFF]/g, "")
            .replace(/[\s\ـ]+/g, "-")
            .replace(/[^\u0600-\u06FFa-z0-9\-]/g, "")
            .replace(/-+/g, "-")
            .replace(/^-+|-+$/g, "")
        : "magazine";

      const translationDoc = {
        magazine: req.params.id,
        language,
        title: translation.fields.title || "",
        summary: translation.fields.summary || "",
        content: translation.fields.content || "",
        metaTitle: translation.fields.metaTitle || "",
        metaDescription: translation.fields.metaDescription || "",
        slug: language === "fa" ? slug : `${slug}-${language}`
      };

      return await MagazineTranslation.findOneAndUpdate(
        { magazine: req.params.id, language },
        translationDoc,
        { upsert: true, new: true }
      );
    });

    await Promise.all(translationPromises);
  }

  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "مجله با موفقیت به‌روزرسانی شد",
  });
};

/* delete magazine */
exports.deleteMagazine = async (req, res) => {
  const magazine = await Magazine.findByIdAndDelete(req.params.id);
  
  // Remove associated translations
  await MagazineTranslation.deleteMany({ magazine: req.params.id });
  
  // Remove thumbnail from cloud storage if exists
  if (magazine.thumbnail && magazine.thumbnail.public_id) {
    await remove(magazine.thumbnail.public_id);
  }

  // Remove gallery images from cloud storage if exists
  if (magazine.gallery && magazine.gallery.length > 0) {
    for (const image of magazine.gallery) {
      if (image.public_id) {
        await remove(image.public_id);
      }
    }
  }

  await Product.updateMany({ magazine: req.params.id }, { $unset: { magazine: "" } });
  await User.findByIdAndUpdate(magazine.creator, {
    $unset: { magazine: "" },
  });

  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "مجله با موفقیت حذف شد",
  });
};