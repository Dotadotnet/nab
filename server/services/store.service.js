

/* internal imports */
const Product = require("../models/product.model");
const Store = require("../models/store.model");
const User = require("../models/user.model");
const remove = require("../utils/remove.util");

/* add new store */
exports.addStore = async (req, res) => {
  const { body } = req;
  const uploadedThumbnail = req.uploadedFiles?.thumbnail?.[0];

  const store = new Store({
    title: body.title,
    description: body.description,
    thumbnail: uploadedThumbnail
      ? {
          url: uploadedThumbnail.url,
          public_id: uploadedThumbnail.key,
        }
      : null,
    keynotes: JSON.parse(body.keynotes),
    tags: JSON.parse(body.tags),
    owner: req.user._id,
  });

  const result = await store.save();

  await User.findByIdAndUpdate(result.owner, {
    $set: { store: result._id },
  });

  res.status(201).json({
    acknowledgement: true,
    message: "Created",
    description: "Store created successfully",
  });
};

/* get all stores */
exports.getStores = async (res) => {
  const stores = await Store.find().populate([
    "owner",
    {
      path: "products",
      populate: ["category", "brand", "store"],
    },
  ]);

  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "Stores fetched successfully",
    data: stores,
  });
};

/* get a store */
exports.getStore = async (req, res) => {
  const store = await Store.findById(req.params.id);

  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "Store fetched successfully",
    data: store,
  });
};

/* update store */
exports.updateStore = async (req, res) => {
  const store = await Store.findById(req.params.id);
  if (!store) {
    return res.status(404).json({
      acknowledgement: false,
      message: "Not Found",
      description: "Store not found",
    });
  }

  const updatedStore = req.body;

  if (req.uploadedFiles?.thumbnail?.length) {
    if (store.thumbnail?.public_id) {
      await remove(store.thumbnail.public_id);
    }

    updatedStore.thumbnail = {
      url: req.uploadedFiles.thumbnail[0].url,
      public_id: req.uploadedFiles.thumbnail[0].key,
    };
  }

  updatedStore.keynotes = JSON.parse(req.body.keynotes);
  updatedStore.tags = JSON.parse(req.body.tags);

  await Store.findByIdAndUpdate(req.params.id, updatedStore);

  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "Store updated successfully",
  });
};

/* delete store */
exports.deleteStore = async (req, res) => {
  const store = await Store.findByIdAndDelete(req.params.id);
  await remove(store.thumbnail.public_id);

  await Product.updateMany({ store: req.params.id }, { $unset: { store: "" } });
  await User.findByIdAndUpdate(store.owner, {
    $unset: { store: "" },
  });

  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "Store deleted successfully",
  });
};
