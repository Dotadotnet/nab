

/* internal import */
const paymentService = require("../services/payment.service");

// create payment
exports.createPayment = async (req, res, next) => {
  try {
    await paymentService.createPayment(req, res);
  } catch (err) {
    next(err);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

exports.verifyMellatPayment = async (req, res, next) => {
  try {
    await paymentService.verifyMellatPayment(req, res);
  } catch (err) {
    next(err);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

exports.completeOrder  = async (req, res, next) => {
  try {
    await paymentService.completeOrder(req, res);
  } catch (err) {
    next(err);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};


