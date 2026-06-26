const express = require("express");
const sessionController = require("../controllers/session.controller");
const localeMiddleware = require("../middleware/locale.middleware");
const verifyAdmin = require("../middleware/verifyAdmin.middleware");
const authorize = require("../middleware/authorize.middleware");

const router = express.Router();

router.post("/create",localeMiddleware, sessionController.initSession);
router.post("/track", localeMiddleware, sessionController.trackSession);
router.get("/me",localeMiddleware, sessionController.getSession);
router.get("/clear", sessionController.clearSession);
router.get(
  "/all",
  verifyAdmin,
  authorize("superAdmin", "admin", "operator"),
  sessionController.getSessions
);
router.get(
  "/:id",
  verifyAdmin,
  authorize("superAdmin", "admin", "operator"),
  sessionController.getSessionDetails
);

module.exports = router;
