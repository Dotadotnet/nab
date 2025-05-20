const Service = require("../services/settings.service");

// init session
exports.getAll = async (req, res, next) => {
  try {
    await Service.getAll(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

