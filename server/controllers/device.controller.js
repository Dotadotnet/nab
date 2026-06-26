const deviceService = require("../services/device.service");

exports.registerAdminDevice = async (req, res, next) => {
  try {
    await deviceService.registerAdminDevice(req, res);
  } catch (error) {
    next(error);
  }
};
