import React, { useState,useEffect  } from "react";

import NavigationButton from "@/components/shared/button/NavigationButton";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import SendButton from "@/components/shared/button/SendButton";
import { toast } from "react-hot-toast";
import { useAddMagazineMutation } from "@/services/magazine/magazineApi";
const AddMagazine = ({
  totalSteps,
  currentStep,
  publishDate,
  setCurrentStep,
  setThumbnailPreview,
  setGalleryPreview,
  galleryPreview,
  setGallery,
  editorData,
  setEditorData,
  errors,
  handleSubmit,
  register,
  trigger,
  setSelectedTags,
  selectedTags,
  control,
  getValues,
  gallery,
}) => {
  const [completedSteps, setCompletedSteps] = useState({});
  const [invalidSteps, setInvalidSteps] = useState({});
  const [thumbnail, setThumbnail] = useState({});
  const [whatYouWillLearn, setWhatYouWillLearn] = useState([""]);
  const [addMagazine, { isLoading, data, error }] = useAddMagazineMutation();

  const onSubmit = async (data) => {
    const selectedTags2 = selectedTags.map((tag) => tag.id);

    const formData = new FormData();
    console.log(data)
    formData.append("thumbnail", thumbnail);
    for (let i = 0; i < gallery.length; i++) {
      formData.append("gallery", gallery[i]);
    }
    formData.append("title", data.title);
    formData.append("summary", data.summary);
    formData.append("content", data.content);
    formData.append("publishDate", data.publishDate);
    formData.append("category", data.category);
    formData.append("isFeatured", data.isFeatured);
    formData.append("visibility", data.visibility);
    formData.append("readTime", data.readTime);
    formData.append(
      "socialLinks",
      JSON.stringify(
        data.socialLinks.map((socialLink) => ({
          name: socialLink.name, 
          url: socialLink.url,
        }))
      )
    );
    // Add "What You Will Learn" data
    formData.append("whatYouWillLearn", JSON.stringify(whatYouWillLearn.filter(item => item.trim() !== "")));
    
    formData.append("tags", JSON.stringify(selectedTags2));
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }
    addMagazine(formData);
  };

   useEffect(() => {
      if (isLoading) {
        toast.loading("در حال افزودن مجله...", { id: "addMagazine" });
      }
  
      if (data) {
        toast.success(data?.description, { id: "addMagazine" });
      }
  
      if (error?.data) {
        toast.error(error?.data?.description, { id: "addMagazine" });
      }
    }, [isLoading, data, error]);
  const renderStepContent = (step) => {
    switch (step) {
      case 1:
        return (
          <Step1
            publishDate={publishDate}
            register={register}
            errors={errors}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <Step2
            setThumbnailPreview={setThumbnailPreview}
            setThumbnail={setThumbnail}
            register={register}
            errors={errors}
            nextStep={nextStep}
            prevStep={prevStep}
            control={control}
            editorData={editorData}
            setEditorData={setEditorData}
          />
        );
      case 3:
        return (
          <Step3
            setGalleryPreview={setGalleryPreview}
            setGallery={setGallery}
            galleryPreview={galleryPreview}
            gallery={gallery}
            register={register}
            errors={errors}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 4:
        return (
          <Step4
            whatYouWillLearn={whatYouWillLearn}
            setWhatYouWillLearn={setWhatYouWillLearn}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 5:
        return (
          <Step5
            setSelectedTags={setSelectedTags}
            selectedTags={selectedTags}
            register={register}
            errors={errors}
            nextStep={nextStep}
            prevStep={prevStep}
            control={control}
          />
        );
      case 6:
        return (
          <Step6
            register={register}
            errors={errors}
            control={control}
            getValues={getValues}
          />
        );

      default:
        return null;
    }
  };


  const nextStep = async () => {
    let valid = false;
    switch (currentStep) {
      case 1:
        valid = await trigger("title");
        if (!valid) {
          toast.error("لطفاً   عنوان  مجله را وارد کنید");
          setInvalidSteps((prev) => ({ ...prev, [currentStep]: true }));
          return;
        }
        valid = true;
        break;
      case 2:
        // Validation for thumbnail and content
       
      
        valid = true;
        break;
      case 3:
          valid = await trigger("content");
        if (!valid) {
          toast.error("لطفاً محتوای مجله را وارد کنید");
          setInvalidSteps((prev) => ({ ...prev, [currentStep]: true }));
          return;
        }
        break;
      case 4:
        // Validation for "What You Will Learn"
        const hasValidLearnItem = whatYouWillLearn.some(item => item.trim() !== "");
        if (!hasValidLearnItem) {
          toast.error("لطفاً حداقل یک مورد در 'آنچه در این فصل خواهید خواند' وارد کنید");
          setInvalidSteps((prev) => ({ ...prev, [currentStep]: true }));
          return;
        }
        valid = true;
        break;
      case 5:
        valid = await trigger("tags");
        if (!valid) {
          toast.error("لطفاً تگ‌های مجله را انتخاب کنید");
          setInvalidSteps((prev) => ({ ...prev, [currentStep]: true }));
          return;
        }
        valid = true;
        break;
      case 6:
        valid = await trigger("campaignTitle");
        if (!valid) {
          toast.error("لطفاً عنوان کمپین فروش را تعیین کنید");
          setInvalidSteps((prev) => ({ ...prev, [currentStep]: true }));
          return;
        }
        valid = await trigger("campaignState");
        if (!valid) {
          toast.error("لطفاً نوع کمپین فروش را تعیین کنید");
          setInvalidSteps((prev) => ({ ...prev, [currentStep]: true }));
          return;
        }
        break;
      default:
        break;
    }

    if (valid) {
      setCompletedSteps((prev) => ({ ...prev, [currentStep]: true }));
      setInvalidSteps((prev) => ({ ...prev, [currentStep]: false }));
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };
  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <form
      action=""
      className="w-full max-w-xl col-span-1  flex flex-col p-2 gap-y-4  "
      onSubmit={handleSubmit(onSubmit)}
    >
      {renderStepContent(currentStep)}

      {currentStep === totalSteps && (
        <div className="flex justify-between mt-12 right-0 absolute bottom-2 w-full px-8">
          <SendButton />
          <NavigationButton direction="prev" onClick={prevStep} />
        </div>
      )}
    </form>
  );
};

export default AddMagazine;