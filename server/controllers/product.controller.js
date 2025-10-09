

/* internal import */
const productService = require("../services/product.service");

/* add new product */
exports.addProduct = async (req, res, next) => {
  try {
    await productService.addProduct(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* get all products */
exports.getProducts = async (req, res, next) => {
  try {
    await productService.getProducts(req,res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

exports.getDetailsProducts = async (req, res, next) => {
  try {
    await productService.getDetailsProducts(res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* update product */
exports.updateProduct = async (req, res, next) => {
  try {
    await productService.updateProduct(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

exports.updateApproveProduct = async (req, res, next) => {
  try {
    await productService.updateApproveProduct(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

exports.updateRejectProduct = async (req, res, next) => {
  try {
    await productService.updateRejectProduct(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

exports.updateReviewProduct = async (req, res, next) => {
  try {
    await productService.updateReviewProduct(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

exports.updateStatusProduct = async (req, res, next) => {
  try {
    await productService.updateStatusProduct(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* update individual product field */
exports.updateProductField = async (req, res, next) => {
  try {
    await productService.updateProductField(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* update product features */
exports.updateProductFeatures = async (req, res, next) => {
  try {
    await productService.updateProductFeatures(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* update product images */
exports.updateProductImages = async (req, res, next) => {
  try {
    await productService.updateProductImages(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* update product variation */
exports.updateProductVariation = async (req, res, next) => {
  try {
    await productService.updateProductVariation(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* adjust variation stock */
exports.adjustVariationStock = async (req, res, next) => {
  try {
    await productService.adjustVariationStock(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};


/* get a single product */
exports.getProduct = async (req, res, next) => {
  try {
    await productService.getProduct(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* get a  product by cart */
exports.getProductCart = async (req, res, next) => {
  try {
    await productService.getProductCart(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* filtered products */
exports.getFilteredProducts = async (req, res, next) => {
  try {
    await productService.getFilteredProducts(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* delete product */
exports.deleteProduct = async (req, res, next) => {
  try {
    await productService.deleteProduct(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};
