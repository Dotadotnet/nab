export const getUploadErrorMessage = (error) => {
  if (!error) return "Upload failed";
  if (typeof error === "string") return error;

  const payload = error.payload || error;
  const description =
    payload.description ||
    payload.error ||
    error.message ||
    payload.message ||
    "Upload failed";
  const details = payload.details;

  if (details && !description.includes(details)) {
    return `${description} | ${details}`;
  }

  return (
    description ||
    details ||
    "Upload failed"
  );
};

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

  const responseText = await response.text();
  let result = {};

  try {
    result = responseText ? JSON.parse(responseText) : {};
  } catch {
    result = { description: responseText };
  }

  if (!response.ok || !result?.acknowledgement) {
    const message = getUploadErrorMessage(result);
    const uploadError = new Error(message);
    uploadError.status = response.status;
    uploadError.payload = result;
    throw uploadError;
  }

  return result.data?.[fieldName] || [];
};

export const deleteUploadedFileFromArvan = async (file) => {
  const key = typeof file === "string" ? file : file?.key || file?.public_id;

  if (!key || key === "N/A") {
    return;
  }

  const token = localStorage.getItem("accessToken");
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/upload`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify({ key }),
  });

  const responseText = await response.text();
  let result = {};

  try {
    result = responseText ? JSON.parse(responseText) : {};
  } catch {
    result = { description: responseText };
  }

  if (!response.ok || !result?.acknowledgement) {
    const message = getUploadErrorMessage(result);
    const deleteError = new Error(message);
    deleteError.status = response.status;
    deleteError.payload = result;
    throw deleteError;
  }
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
