const remove = require("../utils/remove.util");

exports.uploadFiles = async (req, res) => {
  res.status(200).json({
    acknowledgement: true,
    message: "OK",
    description: "Files uploaded successfully",
    data: req.uploadedFiles || {},
  });
};

exports.deleteUploadedFile = async (req, res) => {
  const key = req.body?.key || req.body?.public_id;

  if (!key || typeof key !== "string") {
    return res.status(400).json({
      acknowledgement: false,
      message: "Bad Request",
      description: "شناسه فایل برای حذف معتبر نیست",
    });
  }

  await remove(key);

  res.status(200).json({
    acknowledgement: true,
    message: "OK",
    description: "فایل با موفقیت حذف شد",
  });
};
