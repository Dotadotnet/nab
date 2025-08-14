

/* internal import */
const addressService = require("../services/address.service");





exports.getAllAddresses = async (req, res, next) => {
  try {
    await addressService.getAllAddresses(req,res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};
