import React, { useState } from "react";
import SkeletonImage from "@/components/shared/skeleton/SkeletonImage";
import NavigationButton from "@/components/shared/button/NavigationButton";
import ThumbnailUpload from "@/components/shared/gallery/ThumbnailUpload";
import PreviewableMedia from "@/components/shared/gallery/PreviewableMedia";

const ThumbnailStep = ({
  nextStep,
  errors,
  register,
  setThumbnail,
  onUploadStateChange,
}) => {
  const [thumbnailPreview, setThumbnailPreview] = useState(null);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="profile-container shine-effect rounded-full flex justify-center mb-4">
          {thumbnailPreview ? (
            <PreviewableMedia
              src={thumbnailPreview}
              alt="thumbnail"
              height={100}
              width={100}
              className="h-[100px] w-[100px] profile-pic rounded-full"
            />
          ) : (
            <SkeletonImage />
          )}
        </div>
        <label htmlFor="thumbnail" className="flex flex-col text-center gap-y-2">
          تصویر عنوان دسته بندی
          <ThumbnailUpload
            setThumbnailPreview={setThumbnailPreview}
            setThumbnail={setThumbnail}
            title="لطفا یک تصویر بند انگشتی انتخاب کنید"
            maxFiles={1}
            register={register("thumbnail")}
            folder="category"
            uploadOnSelect
            onUploadStateChange={onUploadStateChange}
          />
        </label>
        {errors?.thumbnail && (
          <span className="text-red-500 text-sm">{errors?.thumbnail.message}</span>
        )}
      </div>

      <div className="flex justify-start mt-12">
        <NavigationButton direction="next" onClick={nextStep} />
      </div>
    </>
  );
};

export default ThumbnailStep;
