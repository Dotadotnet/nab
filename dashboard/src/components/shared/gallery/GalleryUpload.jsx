import React, { useState } from "react";
import CloudUpload from "@/components/icons/CloudUpload";
import { toast } from "react-hot-toast";
import ImageEditorModal from "./ImageEditorModal";
import { getUploadErrorMessage, uploadFilesToArvan } from "@/utils/directUpload";

const GalleryUpload = ({
  setGalleryPreview,
  setGallery,
  maxFiles = 5,
  register,
  istitle = true,
  iconSize = 5,
  border = true,
  cropHeight = 800,
  cropWidth = 800,
  enableCrop = true,
  title = "",
  name = "gallery",
  folder = "gallery",
  uploadOnSelect = false,
  onUploadStateChange,
}) => {
  const [cropQueue, setCropQueue] = useState([]);
  const [croppedFiles, setCroppedFiles] = useState([]);
  const [croppedPreviews, setCroppedPreviews] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  const setUploading = (value) => {
    setIsUploading(value);
    onUploadStateChange?.(value);
  };

  const uploadGalleryFiles = async (files) => {
    if (!uploadOnSelect) {
      setGallery(files);
      return;
    }

    try {
      setUploading(true);
      const uploadedFiles = await uploadFilesToArvan({
        files,
        fieldName: name,
        folder,
        options: {
          width: cropWidth,
          height: cropHeight,
          fit: "cover",
        },
      });
      setGallery(uploadedFiles);
    } catch (error) {
      setGallery([]);
      setGalleryPreview([]);
      toast.error(getUploadErrorMessage(error));
      console.error("[DIRECT_UPLOAD] gallery upload failed", error);
    } finally {
      setUploading(false);
    }
  };

  const finishGallery = (files, previews) => {
    setGalleryPreview(previews);
    uploadGalleryFiles(files);
    setCropQueue([]);
    setCroppedFiles([]);
    setCroppedPreviews([]);
  };

  const buildPreviews = (files) => {
    const previewItems = [];

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const isVideo = file.type.startsWith("video/");
        previewItems.push({
          type: isVideo ? "video" : "image",
          url: event.target.result,
        });

        if (previewItems.length === files.length) {
          setGalleryPreview(previewItems);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleGalleryPreview = (event) => {
    const files = Array.from(event.target.files || []);

    if (files.length > maxFiles) {
      toast.error(`شما می‌توانید حداکثر ${maxFiles} فایل آپلود کنید.`);
      return;
    }

    if (!files.length) return;

    if (enableCrop && files.every((file) => file.type.startsWith("image/"))) {
      setCropQueue(files);
      setCroppedFiles([]);
      setCroppedPreviews([]);
      return;
    }

    buildPreviews(files);
    uploadGalleryFiles(files);
  };

  return (
    <div className="flex flex-col gap-y-2">
      <label htmlFor={name} className="relative">
        <button
          type="button"
          className={`py-1 px-4 text-xs flex flex-row gap-x-2 bg-green-100 dark:bg-blue-100 ${
            border
              ? "border border-green-900 cursor-pointer rounded-secondary"
              : "rounded-md"
          } dark:border-blue-900 text-green-900 dark:text-blue-900 w-fit disabled:cursor-not-allowed disabled:opacity-60`}
          disabled={isUploading}
        >
          <CloudUpload className={`h-${iconSize} w-${iconSize}`} />
          {istitle &&
            (isUploading
              ? "در حال آپلود..."
              : title || `مجاز به انتخاب ${maxFiles} فایل (عکس یا ویدئو) می‌باشید.`)}
        </button>
        <input
          type="file"
          name={name}
          id={name}
          accept="image/*, video/*"
          className="absolute top-0 left-0 h-full w-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
          multiple
          {...register}
          disabled={isUploading}
          onChange={(event) => {
            register?.onChange?.(event);
            handleGalleryPreview(event);
          }}
        />
      </label>

      {isUploading && (
        <span className="text-xs text-green-700 dark:text-blue-300">
          در حال آپلود فایل‌ها...
        </span>
      )}

      {enableCrop && (
        <ImageEditorModal
          file={cropQueue[0]}
          height={cropHeight}
          width={cropWidth}
          onApply={(file, previewUrl) => {
            const nextFiles = [...croppedFiles, file];
            const nextPreviews = [
              ...croppedPreviews,
              { type: "image", url: previewUrl },
            ];
            const nextQueue = cropQueue.slice(1);

            if (nextQueue.length === 0) {
              finishGallery(nextFiles, nextPreviews);
            } else {
              setCroppedFiles(nextFiles);
              setCroppedPreviews(nextPreviews);
              setCropQueue(nextQueue);
            }
          }}
          onCancel={() => {
            setCropQueue([]);
            setCroppedFiles([]);
            setCroppedPreviews([]);
          }}
          title={`برش تصویر ${croppedFiles.length + 1} از ${
            croppedFiles.length + cropQueue.length
          }`}
        />
      )}
    </div>
  );
};

export default GalleryUpload;
