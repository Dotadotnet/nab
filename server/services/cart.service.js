/* internal imports */
const Cart = require("../models/cart.model");
const Session = require("../models/session.model");
const User = require("../models/user.model");
const { sendSms } = require("../utils/smsService");

const shopOwnerPhones = process.env.SHOP_OWNER_PHONE.split(",").map((p) =>
  p.trim()
);
exports.addToCart = async (req, res) => {
  try {
    console.log("📥 Request body:", req.body);
    console.log("📥 SessionID:", req.sessionID);
    console.log("📥 UserID:", req?.user?._id);

    const { product, quantity = 1, variation } = req.body;
    const userId = req?.user?._id || null;
    const guestSessionId = req.sessionID;

    const productId = product.toString();
    const variationId = variation.toString();

    let cart;
    let isNewCart = false;

    // 🔍 بررسی سبد خرید
    if (userId) {
      console.log("🔎 جستجو سبد خرید برای کاربر:", userId);
      cart = await Cart.findOne({ user: userId, paymentStatus: "pending" });
    } else {
      console.log("🔎 جستجو سبد خرید برای مهمان:", guestSessionId);
      cart = await Cart.findOne({
        guest: guestSessionId,
        paymentStatus: "pending"
      });
    }

    if (!cart) {
      console.log("🆕 سبد خرید جدید ساخته می‌شود...");
      cart = await Cart.create({
        user: userId,
        guest: userId ? null : guestSessionId,
        items: [{ product: productId, variation: variationId, quantity }]
      });
      isNewCart = true;
      console.log("✅ سبد خرید جدید ساخته شد:", cart._id);
    } else {
      console.log("✅ سبد خرید موجود پیدا شد:", cart._id);

      const itemIndex = cart.items.findIndex(
        (item) =>
          item.product.toString() === productId &&
          item.variation.toString() === variationId
      );

      if (itemIndex > -1) {
        console.log(
          "🔄 افزایش تعداد محصول موجود در سبد:",
          cart.items[itemIndex]
        );
        cart.items[itemIndex].quantity += quantity;
        cart.items[itemIndex].addedAt = new Date();
      } else {
        console.log("➕ محصول جدید به سبد اضافه می‌شود...");
        cart.items.push({
          product: productId,
          variation: variationId,
          quantity
        });
      }
      await cart.save();
      console.log("💾 سبد خرید ذخیره شد.");
    }

    // 🔗 ارتباط سبد خرید با کاربر یا سشن
    if (userId) {
      console.log("🔗 اتصال سبد خرید به کاربر:", userId);
      await User.findByIdAndUpdate(userId, { cart: cart._id });
    } else {
      console.log("🔗 اتصال سبد خرید به سشن مهمان:", guestSessionId);
      await Session.findOneAndUpdate(
        { sessionId: guestSessionId },
        { cart: cart._id },
        { new: true }
      );
    }

    console.log("📤 پاسخ به کلاینت با cart:", cart._id);

    return res.status(201).json({
      acknowledgement: true,
      message: "Ok",
      description: "محصول با موفقیت به سبد خرید اضافه شد",
      cart
    });
  } catch (error) {
    console.error("❌ خطا در افزودن محصول به سبد خرید:", error);
    return res.status(500).json({
      acknowledgement: false,
      message: "خطا در افزودن محصول به سبد خرید",
      error: error.message
    });
  }
};

exports.getCarts = async (req, res) => {
  try {
    const { page = 1, limit = 5, search = "" } = req.query;
    const skip = (page - 1) * limit;

    let query = { isDeleted: false };

    if (search) {
      // جستجو بر اساس id یا نام کاربر
      query = {
        ...query,
        $or: [{ _id: search }, { guest: { $regex: search, $options: "i" } }]
      };
    }

    const carts = await Cart.find(query)
      .skip(Number(skip))
      .limit(Number(limit))
      .sort({ createdAt: -1 })
      .populate([
        {
          path: "items.product",
          select: "thumbnail discountAmount translations",
          populate: [
            {
              path: "translations.translation",
              match: { language: req.locale },
              select: "fields.title fields.summary language"
            },
            {
              path: "category",
              select: "title"
            }
          ]
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
              select: "fields.title language"
            }
          }
        }
      ]);

    // محاسبه مجموع قیمت‌ها
    const cartsWithTotals = carts.map((cart) => {
      let totalAmountWithDiscount = 0;
      let totalAmountWithoutDiscount = 0;

      for (const item of cart.items) {
        const price = item.variation?.price || 0;
        const discountPercent = item.product?.discountAmount || 0;
        const discountAmount = (price * discountPercent) / 100;

        totalAmountWithDiscount +=
          Math.max(price - discountAmount, 0) * item.quantity;
        totalAmountWithoutDiscount += price * item.quantity;
      }

      return {
        ...cart._doc,
        totalAmountWithDiscount,
        totalAmountWithoutDiscount
      };
    });

    const total = await Cart.countDocuments(query);

    res.status(200).json({
      acknowledgement: true,
      message: "Ok",
      description: "سبدها با موفقیت دریافت شدند",
      data: cartsWithTotals,
      total
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      acknowledgement: false,
      message: "خطا در دریافت سبدها",
      error: error.message
    });
  }
};

/* get from cart */
exports.getFromCart = async (req, res) => {
  const cart = await Cart.findById({
    _id: req.params.id,
    paymentStatus: "pending"
  }).populate([
    {
      path: "items.product",
      select: "thumbnail discountAmount translations",
      populate: [
        {
          path: "translations.translation",
          match: { language: req.locale },
          select: "fields.title fields.summary fields.slug language"
        },
        {
          path: "category",
          select: "title"
        }
      ]
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
          select: "fields.title language"
        }
      }
    }
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
exports.deleteCartItem = async (req, res) => {
  try {
    const sessionId = req.sessionID;
    const { id } = req.params;

    // پیدا کردن session
    const session = await Session.findOne({ sessionId }).populate("cart");
    if (!session) {
      return res.status(404).json({
        acknowledgement: false,
        message: "Session not found"
      });
    }

    const cart = session.cart.find((c) => c.paymentStatus === "pending");
    if (!cart) {
      return res.status(404).json({
        acknowledgement: false,
        message: "No active cart found"
      });
    }

    const itemIndex = cart.items.findIndex(
      (item) => item._id.toString() === id
    );
    if (itemIndex === -1) {
      return res.status(404).json({
        acknowledgement: false,
        message: "Item not found in cart"
      });
    }

    cart.items.splice(itemIndex, 1);
    await cart.save();

    res.status(200).json({
      acknowledgement: true,
      message: "Item deleted from cart successfully",
      description: "محصول با موفقیت از سبد حرید حذف شد",
      cart
    });
  } catch (error) {
    console.error("❌ Error deleting cart item:", error);
    res.status(500).json({
      acknowledgement: false,
      message: "Error deleting item from cart",
      description: `${error.message} خطای سرور`,
      error: error.message
    });
  }
};
