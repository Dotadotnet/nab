import Minus from "@/components/icons/Minus";
import Pencil from "@/components/icons/Pencil";
import Plus from "@/components/icons/Plus";
import Trash from "@/components/icons/Trash";
import ChevronRight from "@/components/icons/ChevronRight";
import NavigationButton from "@/components/shared/button/NavigationButton";
import SendButton from "@/components/shared/button/SendButton";
import ThumbnailUpload from "@/components/shared/gallery/ThumbnailUpload";
import PreviewableMedia from "@/components/shared/gallery/PreviewableMedia";
import SkeletonImage from "@/components/shared/skeleton/SkeletonImage";
import ThemeToggle from "@/components/ThemeToggle";
import { useAddTagMutation } from "@/services/tag/tagApi";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import StepIndicator from "../categories/steps/StepIndicator";
import TranslationTabs, {
  TRANSLATION_LANGUAGES,
} from "@/components/shared/translation/TranslationTabs";
import {
  appendMediaFields,
  deleteUploadedFileFromArvan,
  getUploadErrorMessage,
  isUploadedArvanFile,
} from "@/utils/directUpload";
import { useTranslateTextMutation } from "@/services/translation/translationApi";

const totalSteps = 3;
const requiredTranslationLanguages = ["en", "tr", "ar"];
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

const splitKeynotes = (value) =>
  String(value || "")
    .split(/[\n,،]+/)
    .map((item) => item.trim())
    .filter(Boolean);

const normalizeKeynotes = (value) =>
  (Array.isArray(value) ? value : String(value || "").split(/[\n,،]+/))
    .flatMap((item) => String(item || "").split(/[\n,،]+/))
    .map((item) => item.trim())
    .filter(Boolean);

const isFilled = (value) => typeof value === "string" && value.trim().length > 0;

const areMainTranslationsComplete = (translations = {}) =>
  requiredTranslationLanguages.every((language) =>
    ["title", "description"].every((field) => isFilled(translations?.[language]?.[field]))
  );

const areKeynoteTranslationsComplete = (keynotes, translations = {}) =>
  requiredTranslationLanguages.every((language) => {
    const values = normalizeKeynotes(translations?.[language]?.keynotes);
    return values.length >= keynotes.length && keynotes.every((_, index) => isFilled(values[index]));
  });

const withKeynoteTranslations = (translations = {}) =>
  Object.fromEntries(
    Object.entries(translations).map(([language, fields]) => [
      language,
      {
        ...fields,
        keynotes: normalizeKeynotes(fields?.keynotes),
      },
    ])
  );

const AddTag = () => {
  const navigate = useNavigate();
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [isUploadingMedia, setIsUploadingMedia] = useState(false);
  const [keynotes, setKeynotes] = useState([""]);
  const [activeKeynoteLanguage, setActiveKeynoteLanguage] = useState("fa");
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState({});
  const [invalidSteps, setInvalidSteps] = useState({});
  const [addTag, { isLoading: isAdding, data: addData, error: addError }] =
    useAddTagMutation();
  const [translateText] = useTranslateTextMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
    trigger,
    setValue,
    watch,
    getValues
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
    const cleanKeynotes = keynotes.map((keynote) => keynote.trim()).filter(Boolean);

    setCompletedSteps((prev) => ({
      ...prev,
      1:
        Boolean(watchedFields.title && watchedFields.description) &&
        areMainTranslationsComplete(watchedFields.translations),
      2: Boolean(thumbnail),
      3:
        hasValidKeynotes &&
        areKeynoteTranslationsComplete(cleanKeynotes, watchedFields.translations)
    }));
  }, [
    hasValidKeynotes,
    keynotes,
    thumbnail,
    watchedFields.description,
    watchedFields.title,
    watchedFields.translations
  ]);

  useEffect(() => {
    const cleanKeynotes = keynotes.map((keynote) => keynote.trim()).filter(Boolean);
    if (!cleanKeynotes.length) return undefined;

    const timeoutId = setTimeout(async () => {
      const source = cleanKeynotes.join(", ");

      for (const language of requiredTranslationLanguages) {
        const fieldName = `translations.${language}.keynotes`;
        const current = getValues(fieldName);
        if (normalizeKeynotes(current).length >= cleanKeynotes.length) continue;

        try {
          const response = await translateText({ text: source, to: language }).unwrap();
          const translated = response?.data?.text || "";
          if (translated) {
            setValue(fieldName, normalizeKeynotes(translated), {
              shouldDirty: true,
              shouldValidate: true,
            });
          }
        } catch (error) {
          toast.error(error?.data?.description || "خطا در ترجمه خودکار کلمات کلیدی");
        }
      }
    }, 700);

    return () => clearTimeout(timeoutId);
  }, [getValues, keynotes, setValue, translateText]);

  const nextStep = async () => {
    if (isUploadingMedia) {
      toast.error("لطفا تا پایان آپلود تصویر صبر کنید");
      return;
    }

    if (currentStep === 1) {
      const valid = await trigger(["title", "description"]);
      const values = getValues();
      if (!valid || !areMainTranslationsComplete(values.translations)) {
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

  const handleEditThumbnail = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const input = document.getElementById("tag-thumbnail");
    if (!input) return;

    input.value = "";
    input.click();
  };

  const handleRemoveThumbnail = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (isUploadedArvanFile(thumbnail)) {
      try {
        await deleteUploadedFileFromArvan(thumbnail);
      } catch (error) {
        toast.error(getUploadErrorMessage(error));
      }
    }

    setThumbnail(null);
    setThumbnailPreview(null);
    resetField("thumbnail");

    const input = document.getElementById("tag-thumbnail");
    if (input) input.value = "";
  };

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
  const handleRemoveKeynote = (index) => {
    requiredTranslationLanguages.forEach((language) => {
      const fieldName = `translations.${language}.keynotes`;
      const values = normalizeKeynotes(getValues(fieldName));
      values.splice(index, 1);
      setValue(fieldName, values, { shouldDirty: true, shouldValidate: true });
    });
    setKeynotes((prev) => prev.filter((_, itemIndex) => itemIndex !== index));
  };
  const handleKeynoteChange = (index, value) =>
    setKeynotes((prev) => {
      const pastedKeynotes = normalizeKeynotes(value);
      const updated = [...prev];
      if (pastedKeynotes.length > 1) {
        updated.splice(index, 1, ...pastedKeynotes);
        return updated;
      }
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

    if (
      !areMainTranslationsComplete(data.translations) ||
      !areKeynoteTranslationsComplete(cleanKeynotes, data.translations)
    ) {
      toast.error("لطفاً ترجمه‌های عنوان، توضیحات و کلمات کلیدی را کامل کنید");
      setInvalidSteps((prev) => ({
        ...prev,
        1: !areMainTranslationsComplete(data.translations),
        3: true,
      }));
      return;
    }

    const body = new FormData();
    body.append("title", data.title);
    body.append("description", data.description);
    body.append("translations", JSON.stringify(withKeynoteTranslations(data.translations || {})));
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
            <div className="profile-container shine-effect group rounded-full flex justify-center">
              {thumbnailPreview ? (
                <>
                  <PreviewableMedia
                    alt="tag"
                    className="h-[100px] w-[100px] profile-pic rounded-full object-cover"
                    src={thumbnailPreview}
                  />
                  <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-between rounded-full bg-black/45 px-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <button
                      type="button"
                      aria-label="Edit thumbnail"
                      className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-800 shadow transition hover:bg-green-100 hover:text-green-700"
                      onClick={handleEditThumbnail}
                    >
                      <Pencil />
                    </button>
                    <button
                      type="button"
                      aria-label="Remove thumbnail"
                      className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-white text-red-600 shadow transition hover:bg-red-100"
                      onClick={handleRemoveThumbnail}
                    >
                      <Trash className="h-4 w-4" />
                    </button>
                  </div>
                </>
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
                inputId="tag-thumbnail"
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
        <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-3 dark:border-gray-700">
          {TRANSLATION_LANGUAGES.map((language) => (
            <button
              key={language.code}
              type="button"
              onClick={() => setActiveKeynoteLanguage(language.code)}
              className={`rounded border px-3 py-1.5 text-sm transition-colors ${
                activeKeynoteLanguage === language.code
                  ? "border-blue-600 bg-blue-50 text-blue-700 dark:border-blue-400 dark:bg-blue-900/30 dark:text-blue-200"
                  : "border-gray-200 text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
              }`}
            >
              {language.label}
            </button>
          ))}
        </div>
        <label className={`w-full flex-col gap-y-4 ${activeKeynoteLanguage === "fa" ? "flex" : "hidden"}`}>
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
        <div className={`flex-col gap-y-3 rounded border p-3 ${activeKeynoteLanguage === "fa" ? "hidden" : "flex"}`}>
          <p className="text-sm">ترجمه کلمات کلیدی*</p>
          {keynotes.map((keynote, index) => (
            <label className="flex flex-col gap-y-1" key={`${activeKeynoteLanguage}-${index}`}>
              <span className="text-xs">{keynote || `کلمه ${index + 1}`}</span>
              <input
                className={`rounded border p-2 ${activeKeynoteLanguage === "ar" ? "" : "text-left"}`}
                dir={activeKeynoteLanguage === "ar" ? "rtl" : "ltr"}
                type="text"
                {...register(`translations.${activeKeynoteLanguage}.keynotes.${index}`, {
                  validate: (value) =>
                    isFilled(value) || "ترجمه کلمات کلیدی کامل نیست"
                })}
              />
            </label>
          ))}
        </div>
        {false && (
        <div className="flex flex-col gap-y-3 rounded border p-3">
          <p className="text-sm">ترجمه کلمات کلیدی*</p>
          {requiredTranslationLanguages.map((language) => (
            <label className="flex flex-col gap-y-1" key={language}>
              <span className="text-xs uppercase">{language}</span>
              <textarea
                className="rounded border p-2 text-left"
                dir={language === "ar" ? "rtl" : "ltr"}
                rows="3"
                placeholder="keyword one, keyword two"
                {...register(`translations.${language}.keynotes`, {
                  validate: (value) => {
                    const cleanKeynotes = keynotes.map((item) => item.trim()).filter(Boolean);
                    return (
                      splitKeynotes(value).length >= cleanKeynotes.length ||
                      "ترجمه کلمات کلیدی کامل نیست"
                    );
                  }
                })}
              />
            </label>
          ))}
        </div>
        )}
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
