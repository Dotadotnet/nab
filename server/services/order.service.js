/* external imports */
const Order = require("../models/order.model");
const { sendSms } = require("../utils/smsService");

exports.getAllOrders = async (req, res) => {
  try {
    const { page = 1, limit = 5, search = "" } = req.query;
    const skip = (page - 1) * limit;

    let query = { isDeleted: false };

    if (search) {
      query = {
        ...query,
        $or: [
          { orderId: { $regex: search, $options: "i" } },
          { paymentRefId: { $regex: search, $options: "i" } }
        ]
      };
    }

    const orders = await Order.find(query)
      .skip(Number(skip))
      .limit(Number(limit))
      .sort({ createdAt: -1 })
      .populate([
        {
          path: "customer",
          select: "name email phone userId"
        },
        {
          path: "purchase",
          select: "customerId totalAmountWithDiscount totalAmountWithoutDiscount"
        },
        {
          path: "address",
          select: "province city address postalCode"
        }
      ]);

    const total = await Order.countDocuments(query);

    res.status(200).json({
      acknowledgement: true,
      message: "Ok",
      description: "سفارش ها با موفقیت دریافت شدند",
      data: orders,
      total
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      acknowledgement: false,
      message: "خطا در دریافت سفارشها",
      error: error.message
    });
  }
};

// Update order status to shipped
exports.updateOrderStatusToShipped = async (req, res) => {
  try {
    const { id } = req.params;
    const { trackingCode } = req.body;

    // Find and update the order
    const order = await Order.findByIdAndUpdate(
      id,
      {
        orderStatus: "delivered",
        trackingCode: trackingCode,
        shippingDate: new Date()
      },
      { new: true }
    ).populate([
      {
        path: "customer",
        select: "name phone"
      }
    ]);

    if (!order) {
      return res.status(404).json({
        acknowledgement: false,
        message: "خطا",
        description: "سفارش یافت نشد"
      });
    }

    // Send SMS to customer
    if (order.customer && order.customer.phone) {
      const message = `🚚 سفارش شما ارسال شد\n🔢 شماره پیگیری پستی: ${trackingCode || 'نامشخص'}\n📦 از اینکه نقل و حلوا ناب را انتخاب کردید سپاسگزاریم`;
      await sendSms(order.customer.phone, message);
    }

    res.status(200).json({
      acknowledgement: true,
      message: "موفق",
      description: "وضعیت سفارش به ارسال شده تغییر یافت و پیامک ارسال شد",
      data: order
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      acknowledgement: false,
      message: "خطا در به‌روزرسانی سفارش",
      error: error.message
    });
  }
};
