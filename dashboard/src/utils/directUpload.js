export const uploadFilesToArvan = async ({
  files,
  fieldName,
  folder = "uploads",
  options = {},
}) => {
  const fileList = Array.isArray(files) ? files : [files].filter(Boolean);

  if (!fileList.length) {
    return [];
  }

  const formData = new FormData();
  fileList.forEach((file) => formData.append(fieldName, file));

  Object.entries(options).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      formData.append(key, value);
    }
  });

  const token = localStorage.getItem("accessToken");
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/upload/${folder}`, {
    method: "POST",
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    body: formData,
  });

  const result = await response.json().catch(() => ({}));

  if (!response.ok || !result?.acknowledgement) {
    throw new Error(result?.description || result?.error || "Upload failed");
  }

  return result.data?.[fieldName] || [];
};

export const appendUploadedFiles = (formData, uploadedFiles) => {
  const cleanUploadedFiles = Object.fromEntries(
    Object.entries(uploadedFiles || {}).filter(([, files]) =>
      Array.isArray(files) ? files.length > 0 : Boolean(files)
    )
  );

  if (Object.keys(cleanUploadedFiles).length) {
    formData.append("uploadedFiles", JSON.stringify(cleanUploadedFiles));
  }
};

export const isUploadedArvanFile = (value) => {
  return (
    value &&
    typeof value === "object" &&
    !(value instanceof File) &&
    Boolean(value.url) &&
    Boolean(value.key || value.public_id)
  );
};

export const appendMediaFields = (formData, fields) => {
  const uploadedFiles = {};

  Object.entries(fields || {}).forEach(([fieldName, value]) => {
    const values = Array.isArray(value) ? value : [value].filter(Boolean);

    values.forEach((item) => {
      if (isUploadedArvanFile(item)) {
        uploadedFiles[fieldName] = [...(uploadedFiles[fieldName] || []), item];
      } else if (item instanceof File) {
        formData.append(fieldName, item);
      }
    });
  });

  appendUploadedFiles(formData, uploadedFiles);
};
