

/* external import */
const express = require("express");

/* middleware imports */
const verify = require("../middleware/verifyAdmin.middleware");
const authorize = require("../middleware/authorize.middleware");
const authSession = require("../middleware/authSession.middleware");
const { initSession } = require("../middleware/session.middleware");
const localeMiddleware = require("../middleware/locale.middleware");

/* internal import */
const cartController = require("../controllers/cart.controller");

/* router level connection */
const router = express.Router();

/* router methods integration */

// add to cart
router.post(
  "/add-to-cart",
  cartController.addToCart
);

// get from cart
router.get(
  "/get-carts",
  verify,
  authorize("admin"),
  localeMiddleware,
  cartController.getFromCart
);

router.get("/get-cart/:id",localeMiddleware, cartController.getFromCart);


// update cart
router.patch(
  "/update-cart/:id",
  localeMiddleware,
  cartController.updateCart
);

// delete cart
router.delete(
  "/delete-cart/:id",
  verify,
  authorize("buyer"),
  cartController.deleteCart
);

/* export cart router */
module.exports = router;
