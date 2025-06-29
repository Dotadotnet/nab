/* internal imports */
const Cart = require("../models/cart.model");
const User = require("../models/user.model");
const Session = require("../models/session.model");
/* Add to Cart */

exports.addToCart = async (req, res) => {
  try {
    const { product, quantity = 1, variation } = req.body;
    const userId = req?.user?._id || null;
    const guestSessionId = req.sessionID;

    const productId = product.toString();
    const variationId = variation.toString();

    let cart;
    if (userId) {
      cart = await Cart.findOne({ user: userId, paymentStatus : "pending" });
    } else {
      cart = await Cart.findOne({ guest: guestSessionId, paymentStatus : "pending" });
    }

    if (!cart) {
      cart = await Cart.create({
        user: userId,
        guest: userId ? null : guestSessionId,
        items: [{ product: productId, variation: variationId, quantity }],
      });
    } else {
      const itemIndex = cart.items.findIndex(item => 
        item.product.toString() === productId && item.variation.toString() === variationId
      );

      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
        cart.items[itemIndex].addedAt = new Date();
      } else {
        cart.items.push({ product: productId, variation: variationId, quantity });
      }
      await cart.save();
    }

    if (userId) {
      await User.findByIdAndUpdate(userId, { cart: cart._id });
    } else {
      await Session.findOneAndUpdate(
        { sessionId: guestSessionId },
        { cart: cart._id },
        { new: true }
      );
    }

    return res.status(201).json({
      acknowledgement: true,
      message: "Ok",
      description: "محصول با موفقیت به سبد خرید اضافه شد",
      cart,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      acknowledgement: false,
      message: "خطا در افزودن محصول به سبد خرید",
      error: error.message,
    });
  }
};





/* get from cart */
exports.getFromCart = async (req, res) => {
  console.log("req locale cart", req.locale);
  console.log("eq.params.id", req.params.id);
 const cart = await Cart.findById(req.params.id).populate([
      {
        path: "items.product",
        select: "thumbnail discountAmount translations",
        populate: [
          {
            path: "translations.translation",
            match: { language: req.locale },
            select: "fields.title fields.summary fields.slug language",
          },
          {
            path: "category",
            select: "title",
          },
        ],
      },
      {
        path: "items.variation",
        select: "price unit",
        populate: {
          path: "unit",
          select: "value",
          populate: {
            path: "translations.translation",
            match: { language: req.locale },
            select: "fields.title language",
          },
        },
      },
    ]);
  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "Cart fetched successfully",
    data: cart
  });
};

/* update cart */
exports.updateCart = async (req, res) => {
  await Cart.findByIdAndUpdate(req.params.id, req.body);

  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "Cart updated successfully"
  });
};

/* delete cart */
exports.deleteCart = async (req, res) => {
  const cart = await Cart.findByIdAndDelete(req.params.id);

  await User.findByIdAndUpdate(cart.user, {
    $pull: { cart: cart._id }
  });

  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "Cart deleted successfully"
  });
};
