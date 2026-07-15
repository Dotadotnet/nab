import React, { useRef, useState } from "react";
import CloudUpload from "@/components/icons/CloudUpload";
import ImageEditorModal from "./ImageEditorModal";
import { toast } from "react-hot-toast";
import { getUploadErrorMessage, uploadFilesToArvan } from "@/utils/directUpload";

const getUploadedPreviewSrc = (file) => {
  if (!file) return null;
  if (typeof file === "string") return file;

  return file.url || file.src || file.location || file.path || null;
};

const ThumbnailUpload = ({
  setThumbnail,
  setThumbnailPreview,
  register,
  isTitle = true,
  iconSize = 5,
  border = true,
  cropHeight = 800,
  cropWidth = 800,
  enableCrop = true,
  title = "انتخاب یک فایل (عکس یا ویدئو)",
  name = "thumbnail",
  inputId = name,
  accept = "image/*",
  folder,
  uploadOnSelect = false,
  onUploadStateChange,
}) => {
  const [cropFile, setCropFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const uploadRequestId = useRef(0);

  const setUploading = (value) => {
    setIsUploading(value);
    onUploadStateChange?.(value);
  };

  const applyThumbnailFile = async (file) => {
    if (!file) return;

    const requestId = uploadRequestId.current + 1;
    uploadRequestId.current = requestId;
    setThumbnail(null);
    setThumbnailPreview(null);

    const reader = new FileReader();
    reader.onloadend = () => {
      if (uploadRequestId.current !== requestId) return;
      setThumbnailPreview(reader.result);
    };
    reader.readAsDataURL(file);

    if (!uploadOnSelect) {
      setThumbnail(file);
      return;
    }

    try {
      setUploading(true);
      const uploadedFiles = await uploadFilesToArvan({
        files: file,
        fieldName: name,
        folder: folder || name,
        options: {
          width: cropWidth,
          height: cropHeight,
          fit: "cover",
        },
      });

      if (uploadRequestId.current !== requestId) return;

      const uploadedFile = uploadedFiles[0] || null;
      setThumbnail(uploadedFile);

      const uploadedPreview = getUploadedPreviewSrc(uploadedFile);
      if (uploadedPreview) {
        setThumbnailPreview(uploadedPreview);
      }
    } catch (error) {
      if (uploadRequestId.current !== requestId) return;
      setThumbnail(null);
      setThumbnailPreview(null);
      toast.error(getUploadErrorMessage(error));
      console.error("[DIRECT_UPLOAD] thumbnail upload failed", error);
    } finally {
      if (uploadRequestId.current === requestId) {
        setUploading(false);
      }
    }
  };

  const handleThumbnailPreview = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    if (file && enableCrop && file.type.startsWith("image/")) {
      setCropFile(file);
      return;
    }

    applyThumbnailFile(file);
  };

  return (
    <div className="flex flex-col gap-y-2">
      <label htmlFor={inputId} className="relative">
        <button
          type="button"
          className={`py-1 px-4 flex flex-row gap-x-2 bg-green-100 dark:bg-blue-100 ${
            border
              ? "border border-green-900 cursor-pointer rounded-secondary"
              : "rounded-md"
          } dark:border-blue-900 text-green-900 dark:text-blue-900 w-fit disabled:cursor-not-allowed disabled:opacity-60`}
          disabled={isUploading}
        >
          <CloudUpload className={`h-${iconSize} w-${iconSize}`} />
          {isTitle && (isUploading ? "در حال آپلود..." : title)}
        </button>
        <input
          type="file"
          name={name}
          id={inputId}
          accept={accept}
          className="absolute top-0 left-0 h-full w-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
          {...register}
          multiple={false}
          disabled={isUploading}
          onChange={(event) => {
            register?.onChange?.(event);
            handleThumbnailPreview(event);
          }}
        />
      </label>

      {isUploading && (
        <span className="text-xs text-green-700 dark:text-blue-300">
          در حال آپلود تصویر...
        </span>
      )}

      {enableCrop && (
        <ImageEditorModal
          file={cropFile}
          height={cropHeight}
          width={cropWidth}
          onApply={(file) => {
            applyThumbnailFile(file);
            setCropFile(null);
          }}
          onCancel={() => setCropFile(null)}
        />
      )}
    </div>
  );
};

export default ThumbnailUpload;
