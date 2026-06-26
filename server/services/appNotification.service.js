const AppNotification = require("../models/appNotification.model");

exports.getAdminNotifications = async (req, res) => {
  try {
    const { page = 1, limit = 30, unreadOnly = "false" } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const query = {
      recipient: req.admin._id,
      recipientModel: "Admin",
      isDeleted: false,
      ...(unreadOnly === "true" ? { readAt: { $exists: false } } : {})
    };

    const notifications = await AppNotification.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(Number(limit));

    const unread = await AppNotification.countDocuments({
      recipient: req.admin._id,
      recipientModel: "Admin",
      isDeleted: false,
      readAt: { $exists: false }
    });

    res.status(200).json({
      acknowledgement: true,
      message: "Ok",
      description: "اعلان‌ها با موفقیت دریافت شدند",
      data: {
        notifications,
        unread
      }
    });
  } catch (error) {
    res.status(500).json({
      acknowledgement: false,
      message: "Error",
      description: error.message
    });
  }
};

exports.markAsRead = async (req, res) => {
  try {
    const notification = await AppNotification.findOneAndUpdate(
      {
        _id: req.params.id,
        recipient: req.admin._id,
        recipientModel: "Admin"
      },
      { readAt: new Date() },
      { new: true }
    );

    res.status(200).json({
      acknowledgement: true,
      message: "Ok",
      description: "اعلان خوانده شد",
      data: notification
    });
  } catch (error) {
    res.status(500).json({
      acknowledgement: false,
      message: "Error",
      description: error.message
    });
  }
};
