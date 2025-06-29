

/* internal import */

const Product = require("../models/product.model");
const remove = require("../utils/remove.util");
const autoTranslation = require("../utils/autoTranslation")




exports.get = async (req, res) => {
  const Model = require(`../models/${req.params.model.toLowerCase()}.model`);
  let json = `{"${req.params.key}": "${req.params.value}"}`;
  let query = JSON.parse(json);
  const data = await Model.find(query);
  const translate = new autoTranslation(data, req);
  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "Data fetched successfully",
    data: await translate.getResult()
  });
};

exports.getOne = async (req, res) => {
  const Model = require(`../models/${req.params.model.toLowerCase()}.model`);
  let json = `{"${req.params.key}": "${req.params.value}"}`;
  let query = JSON.parse(json);
  const data = await Model.findOne(query);
  const translate = new autoTranslation(data, req);
  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "Data fetched successfully",
    data: await translate.getResult()
  });
};



exports.getAll = async (req, res) => {
  const Model = require(`../models/${req.params.model.toLowerCase()}.model`);
  const data = await Model.find();
  const translate = new autoTranslation(data, req);
  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "Data fetched successfully",
    data: await translate.getResult()
  });
};

exports.update = async (req, res) => {
  const Model = require(`../models/${req.params.model.toLowerCase()}.model`);
  let select = JSON.parse(`{"${req.params.key}": "${req.params.value}"}`);
  let update = JSON.parse(`{"${req.params.field}": "${req.params.newvalue}"}`);
  await Model.updateMany(select, update);
  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "Data updated successfully",
  });
};

exports.delete = async (req, res) => {
  const Model = require(`../models/${req.params.model.toLowerCase()}.model`);
  let select = JSON.parse(`{"${req.params.key}": "${req.params.value}"}`);
  await Model.deleteMany(select)
  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "Data deleted successfully",
  });
};
