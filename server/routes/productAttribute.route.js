const express = require("express");
const verify = require("../middleware/verifyAdmin.middleware");
const authorize = require("../middleware/authorize.middleware");
const productAttributeController = require("../controllers/productAttribute.controller");

const router = express.Router();

router.get("/all", productAttributeController.getProductAttributes);
router.patch(
  "/reorder",
  verify,
  authorize("superAdmin", "admin"),
  productAttributeController.reorderProductAttributes
);
router.get("/:id", productAttributeController.getProductAttribute);

router.post(
  "/create",
  verify,
  authorize("superAdmin", "admin"),
  productAttributeController.createProductAttribute
);

router.patch(
  "/:id",
  verify,
  authorize("superAdmin", "admin"),
  productAttributeController.updateProductAttribute
);

router.delete(
  "/:id",
  verify,
  authorize("superAdmin", "admin"),
  productAttributeController.deleteProductAttribute
);

module.exports = router;
