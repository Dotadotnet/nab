exports.uploadFiles = async (req, res) => {
  res.status(200).json({
    acknowledgement: true,
    message: "OK",
    description: "Files uploaded successfully",
    data: req.uploadedFiles || {},
  });
};
