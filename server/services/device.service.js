const DeviceToken = require("../models/deviceToken.model");

exports.registerAdminDevice = async (req, res) => {
  try {
    const { token, platform = "android", deviceName } = req.body;

    const device = await DeviceToken.findOneAndUpdate(
      { token },
      {
        owner: req.admin._id,
        ownerModel: "Admin",
        platform,
        deviceName,
        lastSeenAt: new Date(),
        isDeleted: false
      },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    res.status(200).json({
      acknowledgement: true,
      message: "Ok",
      description: "دستگاه ادمین ثبت شد",
      data: device
    });
  } catch (error) {
    res.status(500).json({
      acknowledgement: false,
      message: "Error",
      description: error.message
    });
  }
};
