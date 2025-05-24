const express = require("express");
const sessionController = require("../controllers/session.controller");
const localeMiddleware = require("../middleware/locale.middleware");

const router = express.Router();

router.post("/create",localeMiddleware, sessionController.initSession);
router.get("/me",localeMiddleware, sessionController.getSession);
router.get("/clear", sessionController.clearSession);

module.exports = router;
