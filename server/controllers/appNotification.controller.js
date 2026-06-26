const appNotificationService = require("../services/appNotification.service");

exports.getAdminNotifications = async (req, res, next) => {
  try {
    await appNotificationService.getAdminNotifications(req, res);
  } catch (error) {
    next(error);
  }
};

exports.markAsRead = async (req, res, next) => {
  try {
    await appNotificationService.markAsRead(req, res);
  } catch (error) {
    next(error);
  }
};
