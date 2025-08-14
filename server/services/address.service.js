const Address = require("../models/address.model");



exports.getAllAddresses = async (req, res) => {
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

    const addresss = await Address.find(query)
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
          select: "thumbnail discountAmount title",
          
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
              select: "fields.title language"
            }
          }
        }
      ]);

    // محاسبه مجموع قیمت‌ها
    const addresssWithTotals = addresss.map((address) => {
      let totalAmountWithDiscount = 0;
      let totalAmountWithoutDiscount = 0;

      for (const item of address.products) {
        const price = item.variation?.price || 0;
        const discountPercent = item.product?.discountAmount || 0;
        const discountAmount = (price * discountPercent) / 100;

        totalAmountWithDiscount +=
          Math.max(price - discountAmount, 0) * item.quantity;
        totalAmountWithoutDiscount += price * item.quantity;
      }

      return {
        ...address._doc,
        totalAmountWithDiscount,
        totalAmountWithoutDiscount
      };
    });

    const total = await Address.countDocuments(query);

    res.status(200).json({
      acknowledgement: true,
      message: "Ok",
      description: "آدرسها با موفقیت دریافت شدند",
      data: addresssWithTotals,
      total
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      acknowledgement: false,
      message: "خطا در دریافت آدرسها",
      error: error.message
    });
  }
};
