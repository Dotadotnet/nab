/* external import */
const express = require("express");

/* middleware imports */
const verify = require("../middleware/verifyAdmin.middleware");
const authorize = require("../middleware/authorize.middleware");

/* internal import */
const addressController = require("../controllers/address.controller");

/* router level connection */
const router = express.Router();

router.get(
  "/get-addresss",
  verify,
  authorize("admin", "superAdmin"),
  addressController.getAllAddresses
);



/* export router */
module.exports = router;
