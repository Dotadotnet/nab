import Minus from "@/components/icons/Minus";
import Plus from "@/components/icons/Plus";
import ChevronRight from "@/components/icons/ChevronRight";
import NavigationButton from "@/components/shared/button/NavigationButton";
import SendButton from "@/components/shared/button/SendButton";
import ThumbnailUpload from "@/components/shared/gallery/ThumbnailUpload";
import SkeletonImage from "@/components/shared/skeleton/SkeletonImage";
import ThemeToggle from "@/components/ThemeToggle";
import { useAddTagMutation } from "@/services/tag/tagApi";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import StepIndicator from "../categories/steps/StepIndicator";
import TranslationTabs from "@/components/shared/translation/TranslationTabs";
import { appendMediaFields } from "@/utils/directUpload";

const totalSteps = 3;
const tagTranslationFields = [
  {
    name: "title",
    label: "عنوان",
    required: true,
    minLength: 3,
    maxLength: 70,
  },
  {
    name: "description",
    label: "توضیحات",
    type: "textarea",
    rows: 4,
    required: true,
    minLength: 10,
    maxLength: 1600,
  },
];

const AddTag = () => {
  const navigate = useNavigate();
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [isUploadingMedia, setIsUploadingMedia] = useState(false);
  const [keynotes, setKeynotes] = useState([""]);
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState({});
  const [invalidSteps, setInvalidSteps] = useState({});
  const [addTag, { isLoading: isAdding, data: addData, error: addError }] =
    useAddTagMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    setValue,
    watch
  } = useForm({ mode: "onChange" });

  const watchedFields = watch();
  const hasValidKeynotes = useMemo(
    () => keynotes.some((keynote) => keynote.trim().length > 0),
    [keynotes]
  );

  useEffect(() => {
    if (isAdding) toast.loading("در حال افزودن تگ...", { id: "addTag" });
    if (addData) {
      toast.success(addData?.description, { id: "addTag" });
      navigate("/tags");
    }
    if (addError?.data) toast.error(addError?.data?.description, { id: "addTag" });
  }, [addData, addError, isAdding, navigate]);

  useEffect(() => {
    setCompletedSteps((prev) => ({
      ...prev,
      1: Boolean(watchedFields.title && watchedFields.description),
      2: Boolean(thumbnail),
      3: hasValidKeynotes
    }));
  }, [hasValidKeynotes, thumbnail, watchedFields.description, watchedFields.title]);

  const nextStep = async () => {
    if (isUploadingMedia) {
      toast.error("لطفا تا پایان آپلود تصویر صبر کنید");
      return;
    }

    if (currentStep === 1) {
      const valid = await trigger(["title", "description"]);
      if (!valid) {
        toast.error("لطفاً عنوان و توضیحات تگ را کامل کنید");
        setInvalidSteps((prev) => ({ ...prev, 1: true }));
        return;
      }
    }

    if (currentStep === 2 && !thumbnail) {
      toast.error("لطفاً تصویر تگ را انتخاب کنید");
      setInvalidSteps((prev) => ({ ...prev, 2: true }));
      return;
    }

    setCompletedSteps((prev) => ({ ...prev, [currentStep]: true }));
    setInvalidSteps((prev) => ({ ...prev, [currentStep]: false }));
    setCurrentStep((step) => Math.min(step + 1, totalSteps));
  };

  const prevStep = () => setCurrentStep((step) => Math.max(step - 1, 1));

  const handleStepClick = (step) => {
    if (step <= currentStep) {
      setCurrentStep(step);
      return;
    }
    for (let index = 1; index < step; index += 1) {
      if (!completedSteps[index]) {
        toast.error(`لطفاً ابتدا مرحله ${index} را تکمیل کنید.`);
        setCurrentStep(index);
        return;
      }
    }
    setCurrentStep(step);
  };

  const handleAddKeynote = () => setKeynotes((prev) => [...prev, ""]);
  const handleRemoveKeynote = (index) =>
    setKeynotes((prev) => prev.filter((_, itemIndex) => itemIndex !== index));
  const handleKeynoteChange = (index, value) =>
    setKeynotes((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });

  const onSubmit = (data) => {
    const cleanKeynotes = keynotes.map((keynote) => keynote.trim()).filter(Boolean);
    if (!cleanKeynotes.length) {
      toast.error("لطفاً حداقل یک کلمه کلیدی وارد کنید");
      setInvalidSteps((prev) => ({ ...prev, 3: true }));
      return;
    }

    const body = new FormData();
    body.append("title", data.title);
    body.append("description", data.description);
    body.append("translations", JSON.stringify(data.translations || {}));
    body.append("keynotes", JSON.stringify(cleanKeynotes));
    appendMediaFields(body, { thumbnail });
    addTag(body);
  };

  const renderStep = () => {
    if (currentStep === 1) {
      return (
        <>
          <TranslationTabs
            errors={errors}
            fields={tagTranslationFields}
            namespace="translations"
            register={register}
            setValue={setValue}
            watch={watch}
          />

          <div className="flex justify-end mt-8">
            <NavigationButton direction="next" onClick={nextStep} />
          </div>
        </>
      );
    }

    if (currentStep === 2) {
      return (
        <>
          <div className="flex flex-col items-center gap-y-4">
            <div className="profile-container shine-effect rounded-full flex justify-center">
              {thumbnailPreview ? (
                <img
                  alt="tag"
                  className="h-[100px] w-[100px] profile-pic rounded-full object-cover"
                  src={thumbnailPreview}
                />
              ) : (
                <SkeletonImage />
              )}
            </div>
            <label className="flex flex-col items-center gap-y-2 text-center">
              تصویر تگ*
              <ThumbnailUpload
                register={register("thumbnail")}
                setThumbnail={setThumbnail}
                setThumbnailPreview={setThumbnailPreview}
                title="لطفاً یک تصویر برای تگ انتخاب کنید"
                folder="tag"
                uploadOnSelect
                onUploadStateChange={setIsUploadingMedia}
              />
            </label>
          </div>
          <div className="flex justify-between mt-8">
            <NavigationButton direction="next" onClick={nextStep} />
            <NavigationButton direction="prev" onClick={prevStep} />
          </div>
        </>
      );
    }

    return (
      <>
        <label className="w-full flex flex-col gap-y-4">
          <p className="text-sm flex flex-row justify-between items-center">
            کلمات کلیدی*
            <button
              className="p-0.5 border rounded-secondary bg-green-500 text-white"
              onClick={handleAddKeynote}
              type="button"
            >
              <Plus />
            </button>
          </p>
          {keynotes.map((keynote, index) => (
            <p className="flex flex-row gap-x-2 items-center" key={index}>
              <input
                className="flex-1 p-2 rounded border"
                onChange={(event) => handleKeynoteChange(index, event.target.value)}
                placeholder="کلمه کلیدی را یادداشت کنید"
                type="text"
                value={keynote}
              />
              {index !== 0 && (
                <button
                  className="p-0.5 border rounded-secondary bg-red-500 text-white"
                  onClick={() => handleRemoveKeynote(index)}
                  type="button"
                >
                  <Minus />
                </button>
              )}
            </p>
          ))}
        </label>
        <div className="flex justify-between mt-8">
          <SendButton isLoading={isAdding || isUploadingMedia} />
          <NavigationButton direction="prev" onClick={prevStep} />
        </div>
      </>
    );
  };

  return (
    <section className="w-screen relative h-screen overflow-hidden flex justify-center items-center p-4">
      <div className="wave"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="max-w-md w-full bg-white justify-center dark:bg-gray-900 z-50 flex flex-col gap-y-4 p-8 rounded-primary shadow-lg">
        <form className="w-full flex flex-col gap-y-4" onSubmit={handleSubmit(onSubmit)}>
          <StepIndicator
            completedSteps={completedSteps}
            currentStep={currentStep}
            invalidSteps={invalidSteps}
            onStepClick={handleStepClick}
            totalSteps={totalSteps}
          />
          {renderStep()}
        </form>
        <ThemeToggle />
      </div>
      <NavLink
        className="fixed bottom-4 right-4 group items-center reject-button rounded-full !bg-red-800/20 shadow-lg !p-4 text-slate-300 transition-all hover:text-slate-100 z-50"
        to="/tags"
      >
        <ChevronRight />
      </NavLink>
    </section>
  );
};

export default AddTag;
