const Cart = require("../models/cart.model");
const Product = require("../models/product.model");
const Purchase = require("../models/purchase.model");
const User = require("../models/user.model");
const Order = require("../models/order.model");
const axios = require("axios");
const Session = require("../models/session.model");
const Address = require("../models/address.model");
const { sendSms } = require("../utils/smsService");
const { notifyAdmins } = require("./support.service");

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
const shopOwnerPhones = process.env.SHOP_OWNER_PHONE.split(",").map((p) =>
  p.trim()
);

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

    // 💰 محاسبه مبلغ
    let totalAmount = 0;
    for (const item of cart.items) {
      const price = item.variation?.price || 0;
      const discountPercent = item.product?.discountAmount || 0;
      const discountAmount = (price * discountPercent) / 100;
      totalAmount += Math.max(price - discountAmount, 0) * item.quantity;
    }
    console.log("🧮 Total calculated amount:", totalAmount);

    const amount = totalAmount * 10;
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
    let user = await User.findOne({ phone: normalizedPhone });
    if (!user) {
      console.log("👤 User not found  شدی. Creating new user...");
      user = await User.create({
        phone: normalizedPhone,
        phoneVerified: false,
        name: fullName
      });
    }
    user.cart.push(cart._id);
    user.sessions.push(sessionData._id);
    cart.user = user._id;
    await cart.save();

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
      cart: cart._id,
      sessionId: sessionData?._id || null,
      totalAmount: amount,
      products: cart.items.map((item) => ({
        product: item.product._id,
        variation: item.variation._id,
        quantity: item.quantity
      })),
      gateway
    });
    const purchaseMessage = `🛍 یک سفارش برای ارسال به درگاه ثبت شد
        🆔 شناسه خرید: ${purchase.purchaseId}
    📌 شناسه سبد خرید: ${cart.cartId}
    💰 مبلغ سفارش: ${totalAmount.toLocaleString("fa-IR")} تومان
    👤 مشتری: ${user.phone}-${user.name}`;
    console.log("shopOwnerPhones", shopOwnerPhones)
    await Promise.all(
      shopOwnerPhones.map((phone) => sendSms(phone, purchaseMessage))
    );

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
        { paymentStatus: "failed", shippingStatus: "failed", ResCode: ResCode }
      );
      const failedMessage = `پرداخت سفارش ${failedPurchase?._id || SaleOrderId
        } با خطا مواجه شد.`;
      await Promise.all(
        shopOwnerPhones.map((phone) => sendSms(phone, failedMessage))
      );
      return res.redirect(
        `${clientBaseUrl}/payment/failure?reason=${getMellatErrorMessage(
          Number(ResCode)
        )}`
      );
    }

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
          shippingStatus: "pending"
        },
        { new: true }
      ).populate("customer products.product");

      if (!updatedPurchase) {
        return res.redirect(
          `${clientBaseUrl}/payment/failure?reason=خرید یافت نشد`
        );
      }
      await Cart.findByIdAndUpdate(
        updatedPurchase.cart, 
        { paymentStatus: "paid" }
      );


      const defaultAddress = await Address.findOne({
        user: updatedPurchase.customer._id,
        isDefault: true
      });

      const order = await Order.create({
        customer: updatedPurchase.customer._id,
        purchase: updatedPurchase._id,
        items: updatedPurchase.products.map((item) => ({
          product: item.product._id,
          quantity: item.quantity,
          price: item.price
        })),
        totalAmount: updatedPurchase.totalAmount,
        orderStatus: defaultAddress && defaultAddress.isComplete ? "final_review" : "awaiting_address",
        paymentRefId: SaleReferenceId
      });

      notifyAdmins({
        type: "order_created",
        title: "سفارش جدید",
        body: `سفارش ${order.orderId} ثبت شد`,
        data: {
          order: order._id,
          orderId: order.orderId
        }
      }).catch((error) => {
        console.error("Admin notification error:", error.message);
      });

      let successMessage = "";
      let customerMessage = `سفارش شما با موفقیت ثبت و در اسرع وقت ارسال خواهد شد.\n`;
      customerMessage += `🎁 از اینکه نقل و حلوا ناب را انتخاب کردید سپاسگزاریم.\n`;
      customerMessage += `🆔 شماره سفارش شما: ${order.orderId}\n`;
      customerMessage += `🙏 با اشتیاق منتظر استقبال دوباره شما هستیم.`;

      if (defaultAddress && defaultAddress.isComplete) {
        successMessage = `سفارش ${order.orderId} با موفقیت تکمیل شد.`;
        customerMessage += `\n📦 سفارش شما تکمیل شده و به زودی ارسال خواهد شد.`;
      } else {
        successMessage = `سفارش ${order.orderId} پرداخت شد اما اطلاعات آدرس تکمیل نیست.`;
        customerMessage += `\n⚠️ لطفا آدرس خود را تکمیل نمائید.`;
      }

      await Promise.all([
        ...shopOwnerPhones.map((phone) => sendSms(phone, successMessage)),
        sendSms(updatedPurchase.customer.phone, customerMessage)
      ]);

      await Promise.all([
        ...shopOwnerPhones.map((phone) => sendSms(phone, successMessage)),
        sendSms(updatedPurchase.customer.phone, customerMessage)
      ]);

      if (defaultAddress && defaultAddress.isComplete) {
        return res.redirect(`${clientBaseUrl}/order/${order.orderId}/success`);
      } else {
        return res.redirect(`${clientBaseUrl}/order/${order.orderId}/address`);
      }
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

    const { postalCode, address, plateNumber, userNote } = req.body;

    const order = await Order.findOne({ orderId }).populate("customer");
    if (!order) {
      return res.status(404).json({
        acknowledgement: false,
        message: "خطای داخلی سرور",
        description: "سفارش مورد نظر یافت نشد"
      });
    }

    const userId = order.customer._id; // 👈 اصلاح شد
    const existingAddress = await Address.findOne({ user: userId });

    if (!existingAddress) {
      return res.status(404).json({
        acknowledgement: false,
        message: "خطای داخلی سرور",
        description: "آدرس مورد نظر یافت نشد"
      });
    }

    // آپدیت آدرس
    existingAddress.postalCode = postalCode;
    existingAddress.address = address;
    existingAddress.plateNumber = plateNumber;
    await existingAddress.save();

    order.userNote = userNote;
    order.address = existingAddress._id;
    order.orderStatus = "final_review";
    await order.save();

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "آدرس با موفقیت تکمیل  شد"
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

exports.getAllPayments = async (req, res) => {
  try {
    const { page = 1, limit = 5, search = "" } = req.query;
    const skip = (page - 1) * limit;

    let query = { isDeleted: false };

    if (search) {
      query = {
        ...query,
        $or: [
          { _id: search },
          { customerId: { $regex: search, $options: "i" } } // جستجو بر اساس customerId یا هر فیلدی که میخواید
        ]
      };
    }

    const payments = await Purchase.find(query)
      .skip(Number(skip))
      .limit(Number(limit))
      .sort({ createdAt: -1 })
      .populate([
        {
          path: "customer",
          select: "name email phone "
        },
        {
          path: "products.product",
          select: "thumbnail discountAmount title"
        },
        {
          path: "products.variation",
          select: "price unit",
          populate: {
            path: "unit",
            select: "value",
            populate: {
              path: "translations.translation",
              match: { language: req.locale },
              select: "title language"
            }
          }
        }
      ]);

    // محاسبه مجموع قیمت‌ها
    const paymentsWithTotals = payments.map((payment) => {
      let totalAmountWithDiscount = 0;
      let totalAmountWithoutDiscount = 0;

      for (const item of payment.products) {
        const price = item.variation?.price || 0;
        const discountPercent = item.product?.discountAmount || 0;
        const discountAmount = (price * discountPercent) / 100;

        totalAmountWithDiscount +=
          Math.max(price - discountAmount, 0) * item.quantity;
        totalAmountWithoutDiscount += price * item.quantity;
      }

      return {
        ...payment._doc,
        totalAmountWithDiscount,
        totalAmountWithoutDiscount
      };
    });

    const total = await Purchase.countDocuments(query);

    res.status(200).json({
      acknowledgement: true,
      message: "Ok",
      description: "پرداخت‌ها با موفقیت دریافت شدند",
      data: paymentsWithTotals,
      total
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      acknowledgement: false,
      message: "خطا در دریافت پرداخت‌ها",
      error: error.message
    });
  }
};

// New function to get payment statistics
exports.getPaymentStatistics = async (req, res) => {
  try {
    // Get count of payments by status
    const statusCounts = await Purchase.aggregate([
      { $match: { isDeleted: false } },
      {
        $group: {
          _id: "$paymentStatus",
          count: { $sum: 1 }
        }
      }
    ]);

    // Format status counts
    const statusStats = {
      paid: 0,
      pending: 0,
      failed: 0,
      expired: 0,
      refunded: 0,
      canceled: 0
    };

    statusCounts.forEach(item => {
      statusStats[item._id] = item.count;
    });

    // Get highest and lowest successful payment amounts with customer info
    const successfulPayments = await Purchase.find({ 
      paymentStatus: "paid", 
      isDeleted: false 
    }).populate({
      path: "customer",
      select: "name phone email"
    }).select("totalAmount customer paymentStatus createdAt");

    let highestPayment = null;
    let lowestPayment = null;
    let totalSuccessfulPayments = 0;

    if (successfulPayments.length > 0) {
      // Sort by totalAmount to find highest and lowest
      successfulPayments.sort((a, b) => b.totalAmount - a.totalAmount);
      highestPayment = successfulPayments[0];
      lowestPayment = successfulPayments[successfulPayments.length - 1];
      totalSuccessfulPayments = successfulPayments.length;
    }

    // Get monthly payment statistics
    const monthlyStats = await Purchase.aggregate([
      { $match: { paymentStatus: "paid", isDeleted: false } },
      {
        $project: {
          month: { $month: "$createdAt" },
          year: { $year: "$createdAt" },
          totalAmount: 1
        }
      },
      {
        $group: {
          _id: {
            year: "$year",
            month: "$month"
          },
          count: { $sum: 1 },
          totalAmount: { $sum: "$totalAmount" }
        }
      },
      {
        $sort: {
          "_id.year": 1,
          "_id.month": 1
        }
      }
    ]);

    // Format monthly stats for easier consumption and convert amounts to Tomans
    const formattedMonthlyStats = monthlyStats.map(stat => ({
      year: stat._id.year,
      month: stat._id.month,
      count: stat.count,
      totalAmount: stat.totalAmount / 10 // Convert from Rials to Tomans
    }));

    res.status(200).json({
      acknowledgement: true,
      message: "Ok",
      description: "آمار پرداخت‌ها با موفقیت دریافت شد",
      data: {
        statusStats,
        highestPayment,
        lowestPayment,
        totalSuccessfulPayments,
        monthlyStats: formattedMonthlyStats
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      acknowledgement: false,
      message: "خطا در دریافت آمار پرداخت‌ها",
      error: error.message
    });
  }
};

// Function to get sales count by product
exports.getSalesCountByProduct = async (req, res) => {
  try {
    const salesData = await Purchase.aggregate([
      { $match: { paymentStatus: "paid", isDeleted: false } },
      { $unwind: "$products" },
      {
        $group: {
          _id: "$products.product",
          count: { $sum: "$products.quantity" },
          totalAmount: { $sum: { $multiply: ["$products.variation.price", "$products.quantity"] } }
        }
      },
      {
        $lookup: {
          from: "products",
          localField: "_id",
          foreignField: "_id",
          as: "productInfo"
        }
      },
      {
        $unwind: "$productInfo"
      },
      {
        $project: {
          _id: 1,
          productName: "$productInfo.title",
          count: 1,
          totalAmount: { $divide: ["$totalAmount", 10] } // Convert from Rials to Tomans
        }
      },
      {
        $sort: { count: -1 }
      },
      {
        $limit: 10
      }
    ]);

    res.status(200).json({
      acknowledgement: true,
      message: "Ok",
      description: "آمار فروش بر اساس محصول با موفقیت دریافت شد",
      data: salesData
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      acknowledgement: false,
      message: "خطا در دریافت آمار فروش بر اساس محصول",
      error: error.message
    });
  }
};

// Function to get detailed payment information by ID
exports.getPaymentDetails = async (req, res) => {
  try {
    const { id } = req.params;
    
    const payment = await Purchase.findById(id)
      .populate([
        {
          path: "customer",
          select: "name phone email userId"
        },
        {
          path: "products.product",
          select: "title thumbnail discountAmount"
        },
        {
          path: "products.variation",
          select: "price unit",
          populate: {
            path: "unit",
            select: "value",
            populate: {
              path: "translations.translation",
              match: { language: req.locale },
              select: "title language"
            }
          }
        }
      ]);

    if (!payment) {
      return res.status(404).json({
        acknowledgement: false,
        message: "خطا",
        description: "پرداخت یافت نشد"
      });
    }

    // Find associated order to get address information
    const order = await Order.findOne({ purchase: payment._id })
      .populate({
        path: "address",
        select: "province city address postalCode plateNumber"
      });

    // Calculate totals
    let totalAmountWithDiscount = 0;
    let totalAmountWithoutDiscount = 0;

    for (const item of payment.products) {
      const price = item.variation?.price || 0;
      const discountPercent = item.product?.discountAmount || 0;
      const discountAmount = (price * discountPercent) / 100;

      totalAmountWithDiscount += Math.max(price - discountAmount, 0) * item.quantity;
      totalAmountWithoutDiscount += price * item.quantity;
    }

    const paymentWithTotals = {
      ...payment._doc,
      totalAmountWithDiscount,
      totalAmountWithoutDiscount,
      address: order?.address || null
    };

    res.status(200).json({
      acknowledgement: true,
      message: "Ok",
      description: "اطلاعات پرداخت با موفقیت دریافت شد",
      data: paymentWithTotals
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      acknowledgement: false,
      message: "خطا در دریافت اطلاعات پرداخت",
      error: error.message
    });
  }
};


















