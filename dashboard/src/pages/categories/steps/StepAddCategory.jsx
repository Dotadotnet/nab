import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import NavigationButton from "@/components/shared/button/NavigationButton";
import { useForm } from "react-hook-form";
import SendButton from "@/components/shared/button/SendButton";
import { useAddCategoryMutation } from "@/services/category/categoryApi";
import ThumbnailStep from "./ThumbnailStep";
import StepIndicator from "./StepIndicator";
import TitleStep from "./TitleStep";
import { useNavigate } from "react-router-dom";
import { useGetCategoriesQuery } from "@/services/category/categoryApi";
import { appendMediaFields } from "@/utils/directUpload";

const StepAddCategory = () => {
  const [thumbnail, setThumbnail] = useState(null);
  const [isUploadingMedia, setIsUploadingMedia] = useState(false);
  const [addCategory, { isLoading, data, error }] = useAddCategoryMutation();
  const { data: categoriesData } = useGetCategoriesQuery();
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState({});
  const [invalidSteps, setInvalidSteps] = useState({});
  const navigate = useNavigate();
  const totalSteps = 2;

  const {
    register,
    setValue,
    formState: { errors },
    trigger,
    handleSubmit,
    watch,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (formValues) => {
    const isTitleValid = await trigger(["title", "description"]);

    if (!thumbnail) {
      setCurrentStep(1);
      setInvalidSteps((prev) => ({ ...prev, 1: true }));
      toast.error("لطفا تصویر دسته بندی را وارد کنید");
      return;
    }

    if (!isTitleValid) {
      setCurrentStep(2);
      setInvalidSteps((prev) => ({ ...prev, 2: true }));
      return;
    }

    const formData = new FormData();
    appendMediaFields(formData, { thumbnail });
    formData.append("title", formValues.title);
    formData.append("description", formValues.description);
    formData.append(
      "categoryTranslations",
      JSON.stringify(formValues.categoryTranslations || {})
    );
    if (formValues.parent) formData.append("parent", formValues.parent);

    addCategory(formData);
  };

  useEffect(() => {
    if (isLoading) {
      toast.loading("در حال افزودن دسته بندی...", { id: "addCategory" });
    }

    if (data) {
      toast.success(data?.description, { id: "addCategory" });
      navigate("/categories");
    }

    if (error?.data) {
      toast.error(error?.data?.description, { id: "addCategory" });
    }
  }, [isLoading, data, error, navigate]);

  const nextStep = async () => {
    if (isUploadingMedia) {
      toast.error("لطفا تا پایان آپلود تصویر صبر کنید");
      return;
    }

    if (!thumbnail) {
      toast.error("لطفا تصویر دسته بندی را وارد کنید");
      setInvalidSteps((prev) => ({ ...prev, 1: true }));
      return;
    }

    setCompletedSteps((prev) => ({ ...prev, 1: true }));
    setInvalidSteps((prev) => ({ ...prev, 1: false }));
    setCurrentStep(2);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 1:
        return (
          <ThumbnailStep
            thumbnail={thumbnail}
            setThumbnail={setThumbnail}
            nextStep={nextStep}
            register={register}
            errors={errors.thumbnail}
            onUploadStateChange={setIsUploadingMedia}
          />
        );
      case 2:
        return (
          <TitleStep
            categories={categoriesData?.data || []}
            register={register}
            errors={errors}
            prevStep={prevStep}
            setValue={setValue}
            watch={watch}
            showNext={false}
          />
        );
      default:
        return null;
    }
  };

  const handleStepClick = async (step) => {
    if (step === 1) {
      setCurrentStep(1);
      return;
    }

    if (!thumbnail) {
      toast.error("لطفا ابتدا تصویر دسته بندی را وارد کنید");
      setInvalidSteps((prev) => ({ ...prev, 1: true }));
      setCurrentStep(1);
      return;
    }

    setCompletedSteps((prev) => ({ ...prev, 1: true }));
    setCurrentStep(step);
  };

  return (
    <form
      action=""
      className="w-full max-w-xl flex flex-col gap-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <StepIndicator
        currentStep={currentStep}
        totalSteps={totalSteps}
        onStepClick={handleStepClick}
        completedSteps={completedSteps}
        invalidSteps={invalidSteps}
      />

      {renderStepContent(currentStep)}

      {currentStep === totalSteps && (
        <div className="flex justify-between mt-12">
          <SendButton isLoading={isLoading || isUploadingMedia} />
          <NavigationButton direction="prev" onClick={prevStep} />
        </div>
      )}
    </form>
  );
};

export default StepAddCategory;
