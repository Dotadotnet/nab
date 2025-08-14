

/* internal import */
const orderService = require("../services/order.service");





exports.getAllOrders = async (req, res, next) => {
  try {
    await orderService.getAllOrders(req,res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};
