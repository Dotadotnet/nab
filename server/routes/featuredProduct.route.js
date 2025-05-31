

/* external import */
const express = require("express");

/* middleware imports */
const upload = require("../middleware/upload.middleware");

/* internal import */
const featuredProductController = require("../controllers/featuredProduct.controller");
const verify = require("../middleware/verifyAdmin.middleware");
const authorize = require("../middleware/authorize.middleware");
const localeMiddleware = require("../middleware/locale.middleware");

/* router level connection */
const router = express.Router();

/* router methods integration */

// add new featuredProduct
router.post(
  "/add-featuredProduct",
  verify,
  authorize("superAdmin","admin", "seller"),
  upload('featured').fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "carouselThumbnail", maxCount: 1 }
  ]),
  featuredProductController.addFeaturedProduct
);

// get all categories
router.get("/get-featuredProducts",localeMiddleware, featuredProductController.getFeaturedProducts);

// get a featuredProduct
router.get("/get-featuredProduct/:id", featuredProductController.getFeaturedProduct);

// update featuredProduct
router.patch(
  "/update-featuredProduct/:id",
  verify,
  authorize("superAdmin","admin", "seller"),
  upload('featuredProduct').single("thumbnail"),
  featuredProductController.updateFeaturedProduct
);

// delete featuredProduct
router.delete(
  "/delete-featuredProduct/:id",
  verify,
  authorize("superAdmin","admin", "seller"),
  featuredProductController.deleteFeaturedProduct
);

module.exports = router;
