/* external import */
const express = require("express");

/* middleware imports */
const verify = require("../middleware/verify.middleware");
const authorize = require("../middleware/authorize.middleware");

/* internal import */
const Controller = require("../controllers/settings.controller");

/* router level connection */
const router = express.Router();

/* router methods integration */


router.get(
  "/get-all",
  verify,
  authorize("superAdmin" , 'admin'),
  Controller.getAll
);



module.exports = router;
