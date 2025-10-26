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
          { province: { $regex: search, $options: "i" } },
          { city: { $regex: search, $options: "i" } }
        ]
      };
    }

    const addresses = await Address.find(query)
      .skip(Number(skip))
      .limit(Number(limit))
      .sort({ createdAt: -1 })
      .populate({
        path: "user",
        select: "name email phone userId"
      });

    const total = await Address.countDocuments(query);

    res.status(200).json({
      acknowledgement: true,
      message: "Ok",
      description: "آدرسها با موفقیت دریافت شدند",
      data: addresses,
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


