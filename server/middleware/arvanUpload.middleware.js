const multer = require("multer");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const {
  getResourceType,
  makeObjectName,
  prepareFile,
} = require("../utils/uploadFile.util");

console.log("[ARVAN_UPLOAD] initializing S3 client", {
  endpoint: process.env.ARVAN_S3_ENDPOINT,
  region: process.env.ARVAN_S3_REGION || "us-east-1",
  bucket: process.env.ARVAN_S3_BUCKET,
  hasAccessKey: Boolean(process.env.ARVAN_S3_ACCESS_KEY),
  hasSecretKey: Boolean(process.env.ARVAN_S3_SECRET_KEY),
  forcePathStyle: process.env.ARVAN_S3_FORCE_PATH_STYLE !== "false",
});

const s3Client = new S3Client({
  endpoint: process.env.ARVAN_S3_ENDPOINT,
  region: process.env.ARVAN_S3_REGION || "us-east-1",
  forcePathStyle: process.env.ARVAN_S3_FORCE_PATH_STYLE !== "false",
  credentials: {
    accessKeyId: process.env.ARVAN_S3_ACCESS_KEY,
    secretAccessKey: process.env.ARVAN_S3_SECRET_KEY,
  },
});

const getObjectAcl = () => process.env.ARVAN_S3_ACL || "public-read";

const getUploadErrorDetails = (error) => {
  const metadata = error?.$metadata || {};
  const parts = [
    error?.name,
    error?.Code || error?.code,
    error?.message,
    metadata.httpStatusCode ? `HTTP ${metadata.httpStatusCode}` : "",
    metadata.requestId ? `requestId: ${metadata.requestId}` : "",
    metadata.extendedRequestId ? `extendedRequestId: ${metadata.extendedRequestId}` : "",
  ].filter(Boolean);

  return [...new Set(parts)].join(" | ") || "Unknown upload error";
};

const getPublicUrl = (key) => {
  const baseUrl =
    process.env.ARVAN_PUBLIC_BASE_URL ||
    `${process.env.ARVAN_S3_ENDPOINT}/${process.env.ARVAN_S3_BUCKET}`;
  return `${baseUrl.replace(/\/$/, "")}/${key.split("/").map(encodeURIComponent).join("/")}`;
};

const parseUploadedFiles = (value) => {
  if (!value) return {};
  if (typeof value === "object") return value;

  try {
    const parsed = JSON.parse(value);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
};

const normalizeUploadedFile = (file) => {
  if (!file || typeof file !== "object") return null;

  const key = file.key || file.public_id;
  const url = file.url || file.secure_url;

  if (!key || !url) return null;

  return {
    url,
    public_id: key,
    key,
    filename: file.filename || key.split("/").pop(),
    format: file.format || key.split(".").pop(),
    resource_type: file.resource_type || getResourceType(file.contentType || file.mimetype),
    storage: file.storage || "arvan",
  };
};

const mergePreUploadedFiles = (req, fieldConfig = []) => {
  const preUploaded = parseUploadedFiles(req.body?.uploadedFiles);
  const fieldNames = new Set(fieldConfig.map((field) => field.name));

  Object.entries(preUploaded).forEach(([field, files]) => {
    const normalizedFiles = (Array.isArray(files) ? files : [files])
      .map(normalizeUploadedFile)
      .filter(Boolean);

    if (!normalizedFiles.length) return;

    req.uploadedFiles[field] = [
      ...(req.uploadedFiles[field] || []),
      ...normalizedFiles,
    ];
    fieldNames.add(field);
  });

  fieldNames.forEach((field) => {
    if (!req.uploadedFiles[field]) {
      req.uploadedFiles[field] = [];
    }
  });
};

const uploadArvan = (customFolder = null) => {
  const multerInstance = multer({ storage: multer.memoryStorage() });

  const arvanUploadMiddleware = (fieldConfig, multerHandler = multerInstance.fields(fieldConfig)) => async (req, res, next) => {
    multerHandler(req, res, async (err) => {
      console.log("[ARVAN_UPLOAD] multer callback start", {
        fieldConfig,
        hasFiles: Boolean(req.files),
        fileKeys: Array.isArray(req.files)
          ? req.files.map((file) => file.fieldname)
          : req.files
            ? Object.keys(req.files)
            : [],
        bodyKeys: Object.keys(req.body || {}),
      });

      if (err) {
        console.error("[ARVAN_UPLOAD] multer error", err);
        const details = getUploadErrorDetails(err);
        return res.status(400).json({
          acknowledgement: false,
          message: "Upload Error",
          description: `خطا در دریافت فایل: ${details}`,
          error: err.message || "File upload error",
          details,
        });
      }

      req.uploadedFiles = {};

      try {
        mergePreUploadedFiles(req, fieldConfig);
        const filesByField = Array.isArray(req.files)
          ? req.files.reduce((fields, file) => {
              fields[file.fieldname] = [...(fields[file.fieldname] || []), file];
              return fields;
            }, {})
          : req.files || {};
        const fileFields = Object.keys(filesByField);

        for (const field of fileFields) {
          req.uploadedFiles[field] = req.uploadedFiles[field] || [];

          for (const file of filesByField[field]) {
            console.log("[ARVAN_UPLOAD] processing file", {
              field,
              originalname: file.originalname,
              mimetype: file.mimetype,
              size: file.size,
              customFolder,
            });

            const { extension, fileBuffer, contentType } = await prepareFile(file, req.body);
            const { filename, key } = makeObjectName(customFolder, extension);

            console.log("[ARVAN_UPLOAD] prepared file", {
              field,
              extension,
              contentType,
              filename,
              key,
              bufferLength: fileBuffer?.length,
            });

            await s3Client.send(
              new PutObjectCommand({
                Bucket: process.env.ARVAN_S3_BUCKET,
                Key: key,
                Body: fileBuffer,
                ContentType: contentType,
                ACL: getObjectAcl(),
              })
            );

            console.log("[ARVAN_UPLOAD] upload success", {
              field,
              key,
              url: getPublicUrl(key),
              bucket: process.env.ARVAN_S3_BUCKET,
            });

            req.uploadedFiles[field].push({
              url: getPublicUrl(key),
              public_id: key,
              key,
              filename,
              format: extension,
              resource_type: getResourceType(contentType),
              storage: "arvan",
            });
          }
        }

        next();
      } catch (error) {
        const details = getUploadErrorDetails(error);
        console.error("[ARVAN_UPLOAD] upload failed", {
          details,
          name: error?.name,
          code: error?.Code || error?.code,
          message: error?.message,
          metadata: error?.$metadata,
        });
        res.status(500).json({
          acknowledgement: false,
          message: "Upload Error",
          description: `خطا در بارگذاری فایل‌ها روی Arvan Cloud: ${error.message}`,
        });
      }
    });
  };

  return {
    single: (fieldName) => arvanUploadMiddleware([{ name: fieldName, maxCount: 1 }]),
    fields: (fieldsConfig) => arvanUploadMiddleware(fieldsConfig),
    any: () => arvanUploadMiddleware([], multerInstance.any()),
  };
};

module.exports = uploadArvan;
