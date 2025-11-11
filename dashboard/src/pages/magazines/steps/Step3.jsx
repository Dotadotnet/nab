import React from "react";
import GalleryUpload from "@/components/shared/gallery/GalleryUpload";
import DisplayImages from "@/components/shared/gallery/DisplayImages";
import NavigationButton from "@/components/shared/button/NavigationButton";

const Step3 = ({
  setGalleryPreview,
  setGallery,
  errors,
  register,
  galleryPreview,
  gallery,
  nextStep,
  prevStep
}) => {
  return (
    <>
      <div className="flex flex-col text-center gap-y-2">
        <GalleryUpload
          setGallery={setGallery}
          setGalleryPreview={setGalleryPreview}
          maxFiles={5}
          register={register("gallery", {
            required: "آپلود حداقل یک تصویر الزامی است",
          })}
          title="آپلود تصاویر گالری"
        />

        {/* نمایش پیش‌نمایش تصاویر */}
        <DisplayImages
          galleryPreview={galleryPreview.map((item) => item)}
          imageSize={150}
        />
      </div>
      <div className="flex justify-between mt-12 right-0 absolute bottom-2 w-full px-8">
        <NavigationButton direction="next" onClick={nextStep} />
        <NavigationButton direction="prev" onClick={prevStep} />
      </div>
    </>
  );
};

export default Step3;