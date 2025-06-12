const Cart = require("../models/cart.model");
const Product = require("../models/product.model");
const Purchase = require("../models/purchase.model");
const User = require("../models/user.model");
const axios = require('axios');

/* external import */
require("dotenv").config();

/* stripe setup */
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

/**
 * تابع جهت تبدیل کدهای خطای Mellat به پیام‌های فارسی
 */
function getMellatErrorMessage(code) {
  const errors = {
    11: "شماره کارت نامعتبر است",
    12: "موجودی کافی نیست",
    17: "کاربر از انجام تراکنش منصرف شده است",
    23: "اعتبار کارت تمام شده است",
    34: "تعداد دفعات ورود رمز بیش از حد مجاز است",
    41: "کارت مفقودی است",
    42: "کارت مسدود است",
    // می‌توانید سایر کدها را نیز اضافه کنید...
  };
  return errors[code] || "خطای نامشخص از سمت درگاه Mellat";
}

/**
 * ایجاد پرداخت جدید با REST به جای SOAP
 */
exports.createPayment = async (req, res) => {
  try {
    const { cartId, province, city, phone, fullName, gateway, userId } = req.body;

    console.log("درخواست پرداخت دریافتی:", req.body);

    // بررسی وجود سبد خرید
    const cart = await Cart.findById(cartId).populate([
      { path: "items.product", select: "discountAmount" },
      { path: "items.variation", select: "price" }
    ]);

    if (!cart) {
      return res.status(404).json({
        acknowledgement: false,
        description: "سبد خرید پیدا نشد"
      });
    }

    // محاسبه مبلغ کل
    let totalAmount = 0;
    for (const item of cart.items) {
      const price = item.variation?.price || 0;
      const discountPercent = item.product?.discountAmount || 0;
      const discountAmount = (price * discountPercent) / 100;
      const itemPrice = Math.max(price - discountAmount, 0);
      totalAmount += itemPrice * item.quantity;
    }

    const amount = totalAmount;
    console.log("مبلغ نهایی پرداخت:", amount);

    const orderId = Date.now(); // شناسه سفارش منحصر به فرد

    // آماده‌سازی داده برای ارسال به REST API درگاه
    const paymentPayload = {
      terminalId: process.env.MELLAT_TERMINAL_ID,
      userName: process.env.MELLAT_USERNAME,
      userPassword: process.env.MELLAT_PASSWORD,
      orderId: orderId,
      amount: amount,
      localDate: new Date().toISOString().slice(0, 10).replace(/-/g, ""),
      localTime: new Date().toTimeString().slice(0, 8).replace(/:/g, ""),
      additionalData: "",
      callBackUrl: `${process.env.ORIGIN_URL}/api/payment/callback`,
      payerId: 0
    };

    const url = `${process.env.IRAN_SHAPARAK_API_URL}/payment/mellat`;
    console.log("ارسال درخواست پرداخت به آدرس:", url);

    // ارسال درخواست POST به REST API درگاه Mellat
    const response = await axios.post(url, paymentPayload);

    const resData = response.data.return.split(",");
    console.log("پاسخ Mellat:", resData);

    if (resData[0] === "0") {
      const refId = resData[1];

      // ثبت سفارش در دیتابیس
      const purchase = await Purchase.create({
        customer: userId,
        customerId: refId,
        orderId: orderId,
        totalAmount: amount,
        products: cart.items.map(item => ({
          product: item.product._id,
          variation: item.variation._id,
          quantity: item.quantity
        })),
        province,
        city,
        phone,
        fullName,
      });

      console.log("سفارش با موفقیت ثبت شد:", purchase);

      // پاسخ موفق به کلاینت
      return res.status(201).json({
        acknowledgement: true,
        description: "هدایت به درگاه Mellat",
        url: `https://bpm.shaparak.ir/pgwchannel/startpay.mellat?RefId=${refId}`
      });
    } else {
      // خطای برگشتی از درگاه
      const errorCode = parseInt(resData[0], 10);
      const errorMessage = getMellatErrorMessage(errorCode);

      console.error(`خطای درگاه Mellat [کد: ${errorCode}]: ${errorMessage}`);

      return res.status(400).json({
        acknowledgement: false,
        description: errorMessage,
        errorCode: errorCode
      });
    }
  } catch (error) {
    console.error("خطای داخلی سرور:", error.response?.data || error.message || error);
    return res.status(500).json({
      acknowledgement: false,
      description: `خطای${error.message}`,
      error: error.response?.data || error.message || error.toString()
    });
  }
};
