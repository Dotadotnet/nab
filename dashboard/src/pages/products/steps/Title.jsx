import React, { useEffect, useMemo, useRef, useState } from "react";
import NavigationButton from "@/components/shared/button/NavigationButton";
import { useGetCategoriesQuery } from "@/services/category/categoryApi";
import { useTranslateTextMutation } from "@/services/translation/translationApi";
import { toast } from "react-hot-toast";

const languages = [
  { code: "fa", label: "فارسی", dir: "rtl" },
  { code: "en", label: "English", dir: "ltr" },
  { code: "tr", label: "Turkce", dir: "ltr" },
  { code: "ar", label: "العربية", dir: "rtl" },
];

const translatedFields = ["title", "summary", "description"];

const getFieldName = (language, field) =>
  language === "fa" ? field : `productTranslations.${language}.${field}`;

const TitleStep = ({ register, errors, prevStep, nextStep, setValue, watch }) => {
  const [activeLanguage, setActiveLanguage] = useState("fa");
  const [translateProductText] = useTranslateTextMutation();
  const manualFields = useRef({});
  const lastAutoValues = useRef({});

  const {
    isLoading: fetchingCategories,
    data: fetchCategoriesData,
    error: fetchCategoriesError,
  } = useGetCategoriesQuery();

  const categories = useMemo(
    () => fetchCategoriesData?.data || [],
    [fetchCategoriesData]
  );

  const titleValue = watch("title");
  const summaryValue = watch("summary");
  const descriptionValue = watch("description");

  useEffect(() => {
    if (fetchingCategories) {
      toast.loading("در حال دریافت دسته‌بندی ...", { id: "fetchCategories" });
    }

    if (fetchCategoriesData) {
      toast.success(fetchCategoriesData?.description, {
        id: "fetchCategories",
      });
    }

    if (fetchCategoriesError) {
      toast.error(fetchCategoriesError?.data?.description, {
        id: "fetchCategories",
      });
    }
  }, [fetchingCategories, fetchCategoriesData, fetchCategoriesError]);

  useEffect(() => {
    const sourceValues = {
      title: typeof titleValue === "string" ? titleValue.trim() : "",
      summary: typeof summaryValue === "string" ? summaryValue.trim() : "",
      description:
        typeof descriptionValue === "string" ? descriptionValue.trim() : "",
    };

    const hasTranslatableText = Object.values(sourceValues).some(
      (value) => value.length >= 3
    );
    if (!hasTranslatableText) return undefined;

    const timeoutId = setTimeout(async () => {
      const targetLanguages = languages
        .map((language) => language.code)
        .filter((language) => language !== "fa");

      for (const language of targetLanguages) {
        for (const field of translatedFields) {
          const source = sourceValues[field];
          const fieldName = getFieldName(language, field);

          if (source.length < 3 || manualFields.current[fieldName]) continue;

          try {
            const response = await translateProductText({
              text: source,
              to: language,
            }).unwrap();
            const translatedText = response?.data?.text || "";

            if (translatedText && !manualFields.current[fieldName]) {
              lastAutoValues.current[fieldName] = translatedText;
              setValue(fieldName, translatedText, {
                shouldDirty: true,
                shouldValidate: true,
              });
            }
          } catch (error) {
            toast.error(error?.data?.description || "خطا در ترجمه خودکار");
          }
        }
      }
    }, 700);

    return () => clearTimeout(timeoutId);
  }, [descriptionValue, setValue, summaryValue, titleValue, translateProductText]);

  const registerTranslatedField = (language, field, rules = {}) => {
    const name = getFieldName(language, field);
    return register(name, {
      ...rules,
      onChange: (event) => {
        if (language === "fa") return;
        const value = event.target.value;
        manualFields.current[name] =
          value.trim().length > 0 && value !== lastAutoValues.current[name];
      },
    });
  };

  const activeLanguageConfig =
    languages.find((language) => language.code === activeLanguage) ||
    languages[0];

  return (
    <>
      <div className="flex flex-col gap-4 rounded border p-4">
        <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-3 dark:border-gray-700">
          {languages.map((language) => (
            <button
              key={language.code}
              type="button"
              onClick={() => setActiveLanguage(language.code)}
              className={`rounded border px-3 py-1.5 text-sm transition-colors ${
                activeLanguage === language.code
                  ? "border-blue-600 bg-blue-50 text-blue-700 dark:border-blue-400 dark:bg-blue-900/30 dark:text-blue-200"
                  : "border-gray-200 text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
              }`}
            >
              {language.label}
            </button>
          ))}
        </div>

        <div key={activeLanguage} className="flex flex-col gap-4">
        <label htmlFor={getFieldName(activeLanguage, "title")} className="flex flex-col gap-y-1">
          <span className="text-sm">
            عنوان {activeLanguage === "fa" ? "*" : ""}
          </span>
          <input
            key={getFieldName(activeLanguage, "title")}
            type="text"
            id={getFieldName(activeLanguage, "title")}
            dir={activeLanguageConfig.dir}
            {...registerTranslatedField(activeLanguage, "title", {
              required:
                activeLanguage === "fa"
                  ? "وارد کردن عنوان الزامی است"
                  : false,
              minLength:
                activeLanguage === "fa"
                  ? {
                      value: 3,
                      message: "عنوان باید حداقل ۳ حرف داشته باشد",
                    }
                  : undefined,
              maxLength: {
                value: activeLanguage === "fa" ? 30 : 80,
                message: "عنوان بیش از حد مجاز است",
              },
            })}
            placeholder={activeLanguage === "fa" ? "عنوان" : "Title"}
            maxLength={activeLanguage === "fa" ? 30 : 80}
            className={`rounded border p-2 ${
              activeLanguageConfig.dir === "ltr" ? "text-left" : ""
            }`}
          />
          {activeLanguage === "fa" && errors.title && (
            <span className="text-sm text-red-500">{errors.title.message}</span>
          )}
        </label>

        <label htmlFor={getFieldName(activeLanguage, "summary")} className="flex flex-col gap-y-1">
          <span className="text-sm">
            خلاصه {activeLanguage === "fa" ? "*" : ""}
          </span>
          <input
            key={getFieldName(activeLanguage, "summary")}
            type="text"
            id={getFieldName(activeLanguage, "summary")}
            dir={activeLanguageConfig.dir}
            {...registerTranslatedField(activeLanguage, "summary", {
              required:
                activeLanguage === "fa"
                  ? "وارد کردن خلاصه الزامی است"
                  : false,
              minLength:
                activeLanguage === "fa"
                  ? {
                      value: 15,
                      message: "خلاصه باید حداقل ۱۵ کاراکتر داشته باشد",
                    }
                  : undefined,
              maxLength: {
                value: 120,
                message: "خلاصه بیش از حد مجاز است",
              },
            })}
            placeholder={activeLanguage === "fa" ? "خلاصه" : "Summary"}
            maxLength="120"
            className={`rounded border p-2 ${
              activeLanguageConfig.dir === "ltr" ? "text-left" : ""
            }`}
          />
          {activeLanguage === "fa" && errors.summary && (
            <span className="text-sm text-red-500">
              {errors.summary.message}
            </span>
          )}
        </label>

        <label htmlFor={getFieldName(activeLanguage, "description")} className="flex w-full flex-col gap-y-1">
          <span className="text-sm">
            توضیحات {activeLanguage === "fa" ? "*" : ""}
          </span>
          <textarea
            key={getFieldName(activeLanguage, "description")}
            id={getFieldName(activeLanguage, "description")}
            rows="8"
            maxLength="1200"
            dir={activeLanguageConfig.dir}
            {...registerTranslatedField(activeLanguage, "description", {
              required:
                activeLanguage === "fa"
                  ? "وارد کردن توضیحات الزامی است"
                  : false,
              minLength:
                activeLanguage === "fa"
                  ? {
                      value: 50,
                      message: "توضیحات باید حداقل ۵۰ کاراکتر باشد",
                    }
                  : undefined,
              maxLength: {
                value: 1200,
                message: "توضیحات نباید بیشتر از ۱۲۰۰ کاراکتر باشد",
              },
            })}
            className={activeLanguageConfig.dir === "ltr" ? "text-left" : ""}
          />
          {activeLanguage === "fa" && errors.description && (
            <span className="text-sm text-red-500">
              {errors.description.message}
            </span>
          )}
        </label>
        </div>
      </div>

      <div className="flex w-full flex-col gap-y-4 rounded border p-4">
        <label htmlFor="category" className="flex w-full flex-col gap-y-1">
          <span className="text-sm">دسته‌بندی*</span>
          {fetchingCategories ? (
            <p className="text-sm">در حال دریافت ...</p>
          ) : (
            <select
              name="category"
              id="category"
              {...register("category", {
                required: "وارد کردن دسته‌بندی الزامی است",
              })}
              className="w-full"
              required
            >
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.title}
                </option>
              ))}
            </select>
          )}
          {errors.category && (
            <span className="text-sm text-red-500">
              {errors.category.message}
            </span>
          )}
        </label>
      </div>

      <div className="mt-12 flex justify-between">
        <NavigationButton direction="next" onClick={nextStep} />
        <NavigationButton direction="prev" onClick={prevStep} />
      </div>
    </>
  );
};

export default TitleStep;
