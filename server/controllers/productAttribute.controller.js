const productAttributeService = require("../services/productAttribute.service");

exports.createProductAttribute = async (req, res, next) => {
  try {
    await productAttributeService.createProductAttribute(req, res);
  } catch (error) {
    next(error);
  }
};

exports.getProductAttributes = async (req, res, next) => {
  try {
    await productAttributeService.getProductAttributes(req, res);
  } catch (error) {
    next(error);
  }
};

exports.getProductAttribute = async (req, res, next) => {
  try {
    await productAttributeService.getProductAttribute(req, res);
  } catch (error) {
    next(error);
  }
};

exports.reorderProductAttributes = async (req, res, next) => {
  try {
    await productAttributeService.reorderProductAttributes(req, res);
  } catch (error) {
    next(error);
  }
};

exports.updateProductAttribute = async (req, res, next) => {
  try {
    await productAttributeService.updateProductAttribute(req, res);
  } catch (error) {
    next(error);
  }
};

exports.deleteProductAttribute = async (req, res, next) => {
  try {
    await productAttributeService.deleteProductAttribute(req, res);
  } catch (error) {
    next(error);
  }
};
