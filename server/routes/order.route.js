/* external import */
const express = require("express");

/* middleware imports */
const verify = require("../middleware/verifyAdmin.middleware");
const authorize = require("../middleware/authorize.middleware");

/* internal import */
const orderController = require("../controllers/order.controller");

/* router level connection */
const router = express.Router();

router.get(
  "/get-orders",
  verify,
  authorize("admin", "superAdmin"),
  orderController.getAllOrders
);



/* export router */
module.exports = router;
