const express = require("express");

const upload = require("../middleware/arvanUpload.middleware");
const verify = require("../middleware/verifyAdmin.middleware");
const uploadController = require("../controllers/upload.controller");

const router = express.Router();

const normalizeFolder = (req, res, next) => {
  const folder = String(req.params.folder || "uploads")
    .replace(/[^a-zA-Z0-9_-]/g, "")
    .slice(0, 40);

  req.uploadFolder = folder || "uploads";
  next();
};

router.post("/:folder", verify, normalizeFolder, (req, res, next) => {
  upload(req.uploadFolder).any()(req, res, next);
}, uploadController.uploadFiles);

module.exports = router;
