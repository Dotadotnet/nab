

/* external import */
const express = require("express");

/* middleware imports */
const upload = require("../middleware/upload.middleware");

/* internal import */
const cookieController = require("../controllers/cookie.controller");
const verify = require("../middleware/verify.middleware");
const authorize = require("../middleware/authorize.middleware");
const router = express.Router();
router.get("/get/:key", cookieController.getCookie);
router.post("/set/:key/:value", cookieController.setCookie);
router.delete("/delete/:key", cookieController.deleteCookie);
module.exports = router;
