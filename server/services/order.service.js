const Cart = require("../models/cart.model");
const Order = require("../models/order.model");



exports.getAllOrders = async (req, res) => {
  try {
    const { page = 1, limit = 5, search = "" } = req.query;
    const skip = (page - 1) * limit;

    let query = { isDeleted: false };

    if (search) {
      query = {
        ...query,
        $or: [
          { _id: search },
          { customerId: { $regex: search, $options: "i" } }
        ]
      };
    }

    const orders = await Order.find(query)
      .skip(Number(skip))
      .limit(Number(limit))
      .sort({ createdAt: -1 })
      
      



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
