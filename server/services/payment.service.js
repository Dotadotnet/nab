const Cart = require("../models/cart.model");
const Product = require("../models/product.model");
const Purchase = require("../models/purchase.model");
const User = require("../models/user.model");
const axios = require("axios");
const Session = require("../models/session.model");
const Order = require("../models/order.model");
const Address = require("../models/address.model");

require("dotenv").config();

function getMellatErrorMessage(code) {
  const errors = {
    11: "شماره کارت نامعتبر است",
    12: "موجودی کافی نیست",
    17: "کاربر از انجام تراکنش منصرف شده است",
    23: "اعتبار کارت تمام شده است",
    34: "تعداد دفعات ورود رمز بیش از حد مجاز است",
    41: "کارت مفقودی است",
    42: "کارت مسدود است"
  };
  return errors[code] || "خطای نامشخص از سمت درگاه Mellat";
}

exports.createPayment = async (req, res) => {
  try {
    console.log("✅ createPayment called with body:", req.body);
    console.log("🔐 Session ID:", req.sessionID);

    const { cartId, province, city, phone, fullName, gateway } = req.body;

    // 🛠 نرمال‌سازی شماره موبایل
    const normalizedPhone = phone.replace(/[-\s]/g, "");
    if (!/^09\d{9}$/.test(normalizedPhone)) {
      return res.status(400).json({
        acknowledgement: false,
        description: "شماره تماس معتبر نیست. باید با 09 شروع شود"
      });
    }

    // 📌 پیدا کردن سبد خرید
    const cart = await Cart.findById(cartId).populate([
      { path: "items.product", select: "discountAmount" },
      { path: "items.variation", select: "price" }
    ]);
    if (!cart) {
      console.warn("❌ Cart not found:", cartId);
      return res
        .status(404)
        .json({ acknowledgement: false, description: "سبد خرید پیدا نشد" });
    }

    console.log("🛒 Cart loaded:", cart._id);
    console.log("🛒 Cart items:", cart.items.length);

    // 💰 محاسبه مبلغ
    let totalAmount = 0;
    for (const item of cart.items) {
      const price = item.variation?.price || 0;
      const discountPercent = item.product?.discountAmount || 0;
      const discountAmount = (price * discountPercent) / 100;
      totalAmount += Math.max(price - discountAmount, 0) * item.quantity;
    }
    console.log("🧮 Total calculated amount:", totalAmount);

    const amount = totalAmount;
    const orderId = Date.now();
    const callBackUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/payment/callback`;

    // 📡 درخواست به بانک
    const paymentPayload = {
      terminalId: process.env.MELLAT_TERMINAL_ID,
      userName: process.env.MELLAT_USERNAME,
      userPassword: process.env.MELLAT_PASSWORD,
      orderId,
      amount,
      localDate: new Date().toISOString().slice(0, 10).replace(/-/g, ""),
      localTime: new Date().toTimeString().slice(0, 8).replace(/:/g, ""),
      additionalData: "",
      callBackUrl,
      payerId: 0
    };

    console.log("📦 Payload:", paymentPayload);
    const response = await axios.post(
      `${process.env.IRAN_SHAPARAK_API_URL}/payment/mellat`,
      paymentPayload
    );
    console.log("📥 Response from Mellat:", response.data);

    const resData = response.data.return.split(",");
    if (resData[0] !== "0") {
      const errorCode = parseInt(resData[0], 10);
      return res.status(400).json({
        acknowledgement: false,
        description: getMellatErrorMessage(errorCode),
        errorCode
      });
    }

    const refId = resData[1];
    console.log("✅ Payment initiated successfully. RefId:", refId);

    // 🗝 پیدا کردن سشن واقعی
    const sessionData = await Session.findOne({ sessionId: req.sessionID });
    const sessionArray = sessionData ? [sessionData._id] : [];
    if (!sessionData)
      console.warn("⚠️ Session not found for sessionID:", req.sessionID);

    // 👤 پیدا یا ساخت کاربر
    let user = await User.findOne({ phone: normalizedPhone });
    if (!user) {
      console.log("👤 User not found. Creating new user...");
      user = await User.create({
        phone: normalizedPhone,
        phoneVerified: false,
        name: fullName,
        sessions: sessionArray
      });
      console.log("👤 New user created:", user._id);
    } else {
      console.log("👤 Existing user found:", user._id);
    }

    // 📍 ذخیره آدرس
    const address = await Address.create({
      user: user._id,
      province,
      city,
      isDefault: true
    });
    console.log("📍 Address created:", address._id);

    if (!user.addresses.includes(address._id)) {
      user.addresses.push(address._id);
      await user.save();
      console.log("📬 Address added to user.");
    }

    // 🛒 ساخت خرید
    const purchase = await Purchase.create({
      customerId: refId,
      customer: user._id,
      paymentId: orderId,
      sessionId: sessionData?._id || null,
      totalAmount: amount,
      products: cart.items.map((item) => ({
        product: item.product._id,
        variation: item.variation._id,
        quantity: item.quantity
      })),
      gateway
    });
    console.log("🛒 Purchase created:", purchase._id);

    return res.status(201).json({
      acknowledgement: true,
      description: "هدایت به درگاه Mellat",
      url: `https://bpm.shaparak.ir/pgwchannel/startpay.mellat?RefId=${refId}`
    });
  } catch (error) {
    console.error(
      "❌ خطای داخلی سرور:",
      error.response?.data || error.message || error
    );
    return res.status(500).json({
      acknowledgement: false,
      description: `خطای ${error.message}`,
      error: error.response?.data || error.message || error.toString()
    });
  }
};

exports.verifyMellatPayment = async (req, res) => {
  try {
    console.log("📥 Callback method:", req.method);
    console.log("📥 Callback headers:", req.headers);
    console.log("📥 Callback body:", req.body);
    console.log("📥 Callback query:", req.query);

    const clientBaseUrl = process.env.NEXT_PUBLIC_CLIENT_URL;

    const { RefId, ResCode, SaleOrderId, SaleReferenceId } = req.body;

    console.log("📥 callback data:", req.body);

    if (!SaleOrderId || !SaleReferenceId) {
      return res.redirect(
        `${clientBaseUrl}/payment/failure?reason=اطلاعات پرداخت ناقص است`
      );
    }

    // پرداخت ناموفق
    if (ResCode !== "0") {
      await Purchase.findOneAndUpdate(
        { paymentId: SaleOrderId },
        { paymentStatus: "failed", shippingStatus: "failed" }
      );
      return res.redirect(
        `${clientBaseUrl}/payment/failure?reason=${getMellatErrorMessage(
          Number(ResCode)
        )}`
      );
    }

    // تأیید نهایی بانک ملت
    const verificationPayload = {
      terminalId: process.env.MELLAT_TERMINAL_ID,
      userName: process.env.MELLAT_USERNAME,
      userPassword: process.env.MELLAT_PASSWORD,
      orderId: SaleOrderId,
      saleOrderId: SaleOrderId,
      saleReferenceId: SaleReferenceId
    };

    const verifyUrl = `${process.env.IRAN_SHAPARAK_API_URL}/payment/mellat/verify`;
    const verifyRes = await axios.post(verifyUrl, verificationPayload);

    const verifyResult = verifyRes?.data?.return?.toString();
    console.log("✅ نتیجه verify:", verifyResult);

    if (verifyResult === "0") {
      const updatedPurchase = await Purchase.findOneAndUpdate(
        { paymentId: SaleOrderId },
        {
          paymentStatus: "paid",
          saleReferenceId: SaleReferenceId,
          shippingStatus: "shipped"
        },
        { new: true }
      ).populate("customer products.product");

      if (!updatedPurchase) {
        return res.redirect(
          `${clientBaseUrl}/payment/failure?reason=خرید یافت نشد`
        );
      }

      const order = await Order.create({
        customer: updatedPurchase.customer._id,
        purchase: updatedPurchase._id,
        items: updatedPurchase.products.map((item) => ({
          product: item.product._id,
          quantity: item.quantity,
          price: item.price
        })),
        totalAmount: updatedPurchase.totalAmount,
        orderStatus: "awaiting_address",
        paymentRefId: SaleReferenceId
      });

      return res.redirect(`${clientBaseUrl}/order/${order.orderId}/address`);
    } else {
      const errorMessage = getMellatErrorMessage(parseInt(verifyResult));
      return res.redirect(
        `${clientBaseUrl}/payment/failure?reason=${errorMessage}`
      );
    }
  } catch (err) {
    console.error("❌ خطای تأیید پرداخت:", err);
    return res.redirect(
      `${process.env.NEXT_PUBLIC_CLIENT_URL}/payment/failure?reason=خطای داخلی سرور`
    );
  }
};

exports.completeOrder = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    console.log("📥 completeOrder data:", req.body);
    const { addressId, postalCode, address, plateNumber, userNote } = req.body;
const order = await Order.findOne({ orderId }).populate("customer");
    if (!order)
      return res.status(404).json({
        acknowledgement: false,
        message: "خطای داخلی سرور",
        description: "سفارش مورد نظر یافت نشد"
      });

    const userId = order.user._id;

    const existingAddress = await Address.findOne({
      _id: addressId,
      user: userId
    });
    if (!existingAddress)
      return res.status(404).json({
        acknowledgement: false,
        message: "خطای داخلی سرور",
        description: "آدرس مورد نظر یافت نشد"
      });

    // 3. آپدیت آدرس
    existingAddress.postalCode = postalCode;
    existingAddress.address = address;
    existingAddress.plateNumber = plateNumber;
    await existingAddress.save();

    order.userNote = userNote;
    order.address = existingAddress._id;
    await order.save();

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "آدرس با موفقیت به‌روزرسانی شد"
    });
  } catch (error) {
    console.error("completeOrder error:", error.message);
    res.status(500).json({
      acknowledgement: false,
      message: "خطای داخلی سرور",
      description: "خطای داخلی سرور در هنگام تکمیل سفارش"
    });
  }
};
