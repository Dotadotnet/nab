/* external import */
const express = require("express");

/* middleware imports */
const upload = require("../middleware/upload.middleware");
const verify = require("../middleware/verifyAdmin.middleware");
const authorize = require("../middleware/authorize.middleware");
const localeMiddleware = require("../middleware/locale.middleware");

/* internal import */
const productController = require("../controllers/product.controller");

/* router level connection */
const router = express.Router();

/* router methods integration */

// add new product
router.post(
  "/add-product",
  verify,
  authorize("superAdmin", "admin"),
  upload("product").fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "gallery", maxCount: 10 }
  ]),
  productController.addProduct
);

// get all products
router.get(
  "/get-products",
  localeMiddleware,
  productController.getProducts
);
router.get("/get-product-cart", productController.getProductCart);

// update product
router.patch(
  "/update-product/:id",
  verify,
  authorize("superAdmin", "admin"),
  upload("product").fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "gallery", maxCount: 5 }
  ]),
  productController.updateProduct
);

router.patch(
  "/update-product-approve/:id",
  verify,
  authorize("superAdmin"),
  productController.updateApproveProduct
);
router.patch(
  "/update-product-reject/:id",
  verify,
  authorize("superAdmin"),
  productController.updateRejectProduct
);

router.patch(
  "/update-product-review/:id",
  verify,
  authorize("admin"),
  productController.updateReviewProduct
);


router.patch(
  "/update-product-status/:id",
  verify,
  authorize("superAdmin","admin"),
  productController.updateStatusProduct
);

// update individual product field
router.patch(
  "/update-product-field/:id",
  verify,
  authorize("superAdmin", "admin"),
  productController.updateProductField
);

// update product features
router.patch(
  "/update-product-features/:id",
  verify,
  authorize("superAdmin", "admin"),
  productController.updateProductFeatures
);

// update product images
router.patch(
  "/update-product-images/:id",
  verify,
  authorize("superAdmin", "admin"),
  upload("product").fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "gallery", maxCount: 10 }
  ]),
  productController.updateProductImages
);

// update product variation
router.patch(
  "/update-product-variation",
  verify,
  authorize("superAdmin", "admin"),
  productController.updateProductVariation
);

// adjust variation stock
router.patch(
  "/adjust-variation-stock",
  verify,
  authorize("superAdmin", "admin"),
  productController.adjustVariationStock
);

// get a single product
router.get("/get-product/:id",localeMiddleware, productController.getProduct);

// filtered products
router.get("/filtered-products",localeMiddleware, productController.getFilteredProducts);

// delete product
router.delete(
  "/delete-product/:id",
  verify,
  authorize("superAdmin", "admin"),
  productController.deleteProduct
);

module.exports = router;
