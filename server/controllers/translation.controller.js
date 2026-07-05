const translationService = require("../services/translation.service");

exports.translateText = async (req, res, next) => {
  try {
    await translationService.translateText(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};
