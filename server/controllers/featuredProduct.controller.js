

/* internal import */
const featuredProductService = require("../services/featuredProduct.service");

/* add new featuredProduct */
exports.addFeaturedProduct = async (req, res, next) => {
  try {
    await featuredProductService.addFeaturedProduct(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* get all categories */
exports.getFeaturedProducts = async (req, res, next) => {
  try {
    await featuredProductService.getFeaturedProducts(req,res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* get categories with products */
exports.getProductCategories = async (req, res, next) => {
  try {
    await featuredProductService.getProductCategories(res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};


/* get a featuredProduct */
exports.getFeaturedProduct = async (req, res, next) => {
  try {
    await featuredProductService.getFeaturedProduct(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* update featuredProduct */
exports.updateFeaturedProduct = async (req, res, next) => {
  try {
    await featuredProductService.updateFeaturedProduct(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* delete featuredProduct */
exports.deleteFeaturedProduct = async (req, res, next) => {
  try {
    await featuredProductService.deleteFeaturedProduct(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};
