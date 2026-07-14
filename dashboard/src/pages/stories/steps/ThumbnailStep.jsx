import { useState } from "react";
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
  const [mediaPreview, setThumbnailPreview] = useState(null);
  const [mediaType, setMediaType] = useState(null);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="profile-container shine-effect rounded-full flex justify-center mb-4">
          {mediaPreview ? (
            mediaType?.startsWith("video") ? (
              <PreviewableMedia
                src={mediaPreview}
                type="video"
                className="h-full w-full rounded-full object-cover"
              />
            ) : (
              <PreviewableMedia
                src={mediaPreview}
                alt="media"
                height={100}
                width={100}
                className="h-[100px] w-[100px] profile-pic rounded-full object-cover"
              />
            )
          ) : (
            <SkeletonImage />
          )}
        </div>

        <label htmlFor="media" className="flex flex-col text-center gap-y-2">
          تصویر یا ویدئو استوری
          <ThumbnailUpload
            setThumbnailPreview={setThumbnailPreview}
            setThumbnail={(file) => {
              setThumbnail(file);
              if (file?.type) {
                setMediaType(file.type);
              } else if (file?.resource_type === "video") {
                setMediaType("video");
              } else if (file?.resource_type === "image") {
                setMediaType("image");
              }
            }}
            title="لطفا یک تصویر یا ویدئو انتخاب کنید"
            maxFiles={1}
            register={register("media")}
            name="media"
            folder="story"
            accept="image/*,video/*"
            uploadOnSelect
            onUploadStateChange={onUploadStateChange}
          />
        </label>

        {errors?.media && (
          <span className="text-red-500 text-sm">{errors?.media.message}</span>
        )}
      </div>

      <div className="flex justify-start mt-12">
        <NavigationButton direction="next" onClick={nextStep} />
      </div>
    </>
  );
};

export default ThumbnailStep;
