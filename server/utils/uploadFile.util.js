const crypto = require("crypto");
const path = require("path");
const sharp = require("sharp");

const getDateFolder = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
};

const getExtensionFromMime = (mimetype = "") => {
  const extensions = {
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/webp": "webp",
    "image/gif": "gif",
    "image/svg+xml": "svg",
    "video/mp4": "mp4",
    "application/pdf": "pdf",
  };

  return extensions[mimetype] || "bin";
};

const getResourceType = (contentType = "") => {
  if (contentType.startsWith("image/")) return "image";
  if (contentType.startsWith("video/")) return "video";
  return "raw";
};

const makeObjectName = (customFolder = null, extension = "bin") => {
  const hashedName = crypto.randomBytes(16).toString("hex");
  const cleanExtension = extension.replace(/^\./, "").toLowerCase();
  const filename = `${hashedName}.${cleanExtension}`;
  const folder = customFolder ? `${customFolder}/${getDateFolder()}` : getDateFolder();

  return {
    filename,
    key: `${folder}/${filename}`,
  };
};

const prepareFile = async (file) => {
  const originalExtension = path.extname(file.originalname || "").replace(".", "").toLowerCase();
  let extension = originalExtension || getExtensionFromMime(file.mimetype);
  let fileBuffer = file.buffer;
  let contentType = file.mimetype || "application/octet-stream";

  if (["jpg", "jpeg", "png"].includes(extension)) {
    fileBuffer = await sharp(file.buffer)
      .toFormat("webp", {
        quality: 80,
        lossless: extension === "png",
      })
      .toBuffer();
    extension = "webp";
    contentType = "image/webp";
  }

  return { extension, fileBuffer, contentType };
};

module.exports = {
  getResourceType,
  makeObjectName,
  prepareFile,
};
