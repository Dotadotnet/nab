const express = require("express");
const verify = require("../middleware/verifyAdmin.middleware");
const authorize = require("../middleware/authorize.middleware");
const categoryFilterController = require("../controllers/categoryFilter.controller");

const router = express.Router();

router.get("/all", categoryFilterController.getCategoryFilters);
router.patch(
  "/reorder",
  verify,
  authorize("superAdmin", "admin"),
  categoryFilterController.reorderCategoryFilters
);
router.get("/:id", categoryFilterController.getCategoryFilter);

router.post(
  "/create",
  verify,
  authorize("superAdmin", "admin"),
  categoryFilterController.createCategoryFilter
);

router.patch(
  "/:id",
  verify,
  authorize("superAdmin", "admin"),
  categoryFilterController.updateCategoryFilter
);

router.delete(
  "/:id",
  verify,
  authorize("superAdmin", "admin"),
  categoryFilterController.deleteCategoryFilter
);

module.exports = router;
