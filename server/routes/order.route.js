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

router.patch(
  "/update-order-status-to-shipped/:id",
  verify,
  authorize("admin", "superAdmin"),
  orderController.updateOrderStatusToShipped
);

/* export router */
module.exports = router;