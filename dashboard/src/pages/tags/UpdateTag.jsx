import ChevronRight from "@/components/icons/ChevronRight";
import Minus from "@/components/icons/Minus";
import Plus from "@/components/icons/Plus";
import NavigationButton from "@/components/shared/button/NavigationButton";
import SendButton from "@/components/shared/button/SendButton";
import StatusSwitch from "@/components/shared/button/StatusSwitch";
import ThemeToggle from "@/components/ThemeToggle";
import ThumbnailUpload from "@/components/shared/gallery/ThumbnailUpload";
import SkeletonImage from "@/components/shared/skeleton/SkeletonImage";
import { useGetTagQuery, useUpdateTagMutation } from "@/services/tag/tagApi";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import StepIndicator from "../categories/steps/StepIndicator";
import { appendMediaFields } from "@/utils/directUpload";

const totalSteps = 3;

const UpdateTag = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [isUploadingMedia, setIsUploadingMedia] = useState(false);
  const [keynotes, setKeynotes] = useState([""]);
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState({});
  const [invalidSteps, setInvalidSteps] = useState({});

  const { data: fetchData, isLoading: fetching, error: fetchError } = useGetTagQuery(id);
  const [updateTag, { isLoading: isUpdating, data: updateData, error: updateError }] =
    useUpdateTagMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
    watch
  } = useForm({ mode: "onChange" });

  const tag = fetchData?.data;
  const watchedFields = watch();
  const hasValidKeynotes = useMemo(
    () => keynotes.some((keynote) => keynote.trim().length > 0),
    [keynotes]
  );

  useEffect(() => {
    if (!tag) return;
    reset({
      title: tag.title || "",
      description: tag.description || "",
      status: tag.status === "active"
    });
    setKeynotes(tag.keynotes?.length ? tag.keynotes : [""]);
    setThumbnailPreview(tag.thumbnail?.url || null);
  }, [reset, tag]);

  useEffect(() => {
    if (fetching) toast.loading("در حال دریافت تگ...", { id: "fetchTag" });
    if (fetchData) toast.dismiss("fetchTag");
    if (fetchError?.data) toast.error(fetchError.data.description || fetchError.data.message, { id: "fetchTag" });
    if (isUpdating) toast.loading("در حال ویرایش تگ...", { id: "updateTag" });
    if (updateData) {
      toast.success(updateData?.description || updateData?.message, { id: "updateTag" });
      navigate("/tags");
    }
    if (updateError?.data) {
      toast.error(updateError.data.description || updateError.data.message, { id: "updateTag" });
    }
  }, [fetchData, fetchError, fetching, isUpdating, navigate, updateData, updateError]);

  useEffect(() => {
    setCompletedSteps((prev) => ({
      ...prev,
      1: Boolean(watchedFields.title && watchedFields.description),
      2: Boolean(thumbnail || thumbnailPreview),
      3: hasValidKeynotes
    }));
  }, [hasValidKeynotes, thumbnail, thumbnailPreview, watchedFields.description, watchedFields.title]);

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
    setCompletedSteps((prev) => ({ ...prev, [currentStep]: true }));
    setInvalidSteps((prev) => ({ ...prev, [currentStep]: false }));
    setCurrentStep((step) => Math.min(step + 1, totalSteps));
  };

  const prevStep = () => setCurrentStep((step) => Math.max(step - 1, 1));
  const handleStepClick = (step) => step <= currentStep && setCurrentStep(step);
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

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("keynotes", JSON.stringify(cleanKeynotes));
    formData.append("status", data.status ? "active" : "inactive");
    appendMediaFields(formData, { thumbnail });
    updateTag({ id, body: formData });
  };

  const renderStep = () => {
    if (currentStep === 1) {
      return (
        <>
          <label className="w-full flex flex-col gap-y-1" htmlFor="title">
            <span className="text-sm">عنوان*</span>
            <input
              className="p-2 rounded border"
              id="title"
              type="text"
              {...register("title", {
                required: "عنوان الزامی است",
                minLength: { value: 3, message: "عنوان باید حداقل ۳ کاراکتر باشد" },
                maxLength: { value: 100, message: "عنوان نمی‌تواند بیش از ۱۰۰ کاراکتر باشد" }
              })}
            />
            {errors.title && <span className="text-red-500 text-xs">{errors.title.message}</span>}
          </label>
          <label className="w-full flex flex-col gap-y-1" htmlFor="description">
            <span className="text-sm">توضیحات*</span>
            <textarea
              className="p-2 rounded border"
              id="description"
              rows="4"
              {...register("description", {
                required: "توضیحات الزامی است",
                minLength: { value: 10, message: "توضیحات باید حداقل ۱۰ کاراکتر باشد" },
                maxLength: { value: 1600, message: "توضیحات نمی‌تواند بیش از ۱۶۰۰ کاراکتر باشد" }
              })}
            />
            {errors.description && (
              <span className="text-red-500 text-xs">{errors.description.message}</span>
            )}
          </label>
          <StatusSwitch defaultChecked={tag?.status === "active"} id="status" label="وضعیت" register={register} />
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
                <img alt="tag" className="h-[100px] w-[100px] profile-pic rounded-full object-cover" src={thumbnailPreview} />
              ) : (
                <SkeletonImage />
              )}
            </div>
            <label className="flex flex-col items-center gap-y-2 text-center">
              تصویر تگ
              <ThumbnailUpload
                register={register("thumbnail")}
                setThumbnail={setThumbnail}
                setThumbnailPreview={setThumbnailPreview}
                title="برای تغییر تصویر، فایل جدید انتخاب کنید"
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
            <button className="p-0.5 border rounded-secondary bg-green-500 text-white" onClick={handleAddKeynote} type="button">
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
                <button className="p-0.5 border rounded-secondary bg-red-500 text-white" onClick={() => handleRemoveKeynote(index)} type="button">
                  <Minus />
                </button>
              )}
            </p>
          ))}
        </label>
        <div className="flex justify-between mt-8">
          <SendButton isLoading={isUpdating || isUploadingMedia} />
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
      <NavLink className="fixed bottom-4 right-4 group items-center reject-button rounded-full !bg-red-800/20 shadow-lg !p-4 text-slate-300 transition-all hover:text-slate-100 z-50" to="/tags">
        <ChevronRight />
      </NavLink>
    </section>
  );
};

export default UpdateTag;
