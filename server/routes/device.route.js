const express = require("express");
const verifyAdmin = require("../middleware/verifyAdmin.middleware");
const authorize = require("../middleware/authorize.middleware");
const deviceController = require("../controllers/device.controller");

const router = express.Router();

router.post("/admin", verifyAdmin, authorize("admin", "superAdmin", "operator"), deviceController.registerAdminDevice);

module.exports = router;
