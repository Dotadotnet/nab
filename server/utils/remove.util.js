/* external import */
const { S3Client, DeleteObjectCommand } = require("@aws-sdk/client-s3");

const endpoint = process.env.ARVAN_S3_ENDPOINT || process.env.MINIO_ENDPOINT;
const bucketName = process.env.ARVAN_S3_BUCKET || process.env.MINIO_BUCKET;
const accessKeyId = process.env.ARVAN_S3_ACCESS_KEY || process.env.MINIO_ACCESS_KEY;
const secretAccessKey = process.env.ARVAN_S3_SECRET_KEY || process.env.MINIO_SECRET_KEY;

/* MinIO client configuration */
const s3Client = new S3Client({
  endpoint,
  forcePathStyle: process.env.ARVAN_S3_FORCE_PATH_STYLE !== "false",
  region: process.env.ARVAN_S3_REGION || process.env.MINIO_REGION || "us-east-1",
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

const resolveDeleteTarget = (bucketNameOrObjectName, objectName) => {
  if (bucketName && objectName) {
    return { bucket: bucketName, key: objectName };
  }

  if (bucketName) {
    return { bucket: bucketName, key: bucketNameOrObjectName };
  }

  return {
    bucket: objectName ? bucketNameOrObjectName : undefined,
    key: objectName || bucketNameOrObjectName,
  };
};

/* remove object from S3-compatible storage */
async function remove(bucketNameOrObjectName, objectName) {
  try {
    const { bucket, key } = resolveDeleteTarget(bucketNameOrObjectName, objectName);

    if (!bucket || !key || key === "N/A") return false;

    const deleteCommand = new DeleteObjectCommand({
      Bucket: bucket,
      Key: key,
    });

    await s3Client.send(deleteCommand);
    console.log(`رسانه ${objectName} با موفقیت حذف شد`);
  } catch (error) {
    console.error("خطا در حذف  از فضای ابری:", error);
  }
}

module.exports = remove;
