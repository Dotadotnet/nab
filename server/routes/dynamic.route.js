

/* external import */
const express = require("express");

/* middleware imports */
const upload = require("../middleware/upload.middleware");

/* internal import */
const dynamicController = require("../controllers/dynamic.controller");
const verify = require("../middleware/verifyAdmin.middleware");
const authorize = require("../middleware/authorize.middleware");
const localeMiddleware = require("../middleware/locale.middleware");


/* router level connection */
const router = express.Router();

/* router methods integration */

router.get("/get-one/:model/:key/:value", localeMiddleware, dynamicController.getOne);
router.get("/get/:model/:key/:value", localeMiddleware, dynamicController.get);
router.patch("/update/:model/:key/:value/:field/:newvalue", verify, authorize("superAdmin", "admin"), dynamicController.update);
router.delete("/delete/:model/:key/:value", verify, authorize("superAdmin", "admin"), dynamicController.delete);

module.exports = router;

// , verify, authorize("superAdmin", "admin"),