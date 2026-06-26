const express = require("express");
const verifyAdmin = require("../middleware/verifyAdmin.middleware");
const authorize = require("../middleware/authorize.middleware");
const notificationController = require("../controllers/appNotification.controller");

const router = express.Router();

router.get("/admin", verifyAdmin, authorize("admin", "superAdmin", "operator"), notificationController.getAdminNotifications);
router.patch("/admin/:id/read", verifyAdmin, authorize("admin", "superAdmin", "operator"), notificationController.markAsRead);

module.exports = router;
