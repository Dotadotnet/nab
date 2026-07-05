const express = require("express");
const verify = require("../middleware/verifyAdmin.middleware");
const authorize = require("../middleware/authorize.middleware");
const translationController = require("../controllers/translation.controller");

const router = express.Router();

router.post(
  "/",
  verify,
  authorize("superAdmin", "admin"),
  translationController.translateText
);

module.exports = router;
