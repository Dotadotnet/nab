import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import Minus from "@/components/icons/Minus";
import Plus from "@/components/icons/Plus";
import NavigationButton from "@/components/shared/button/NavigationButton";
import {
  TRANSLATION_LANGUAGES,
} from "@/components/shared/translation/TranslationTabs";
import { useTranslateProductTextMutation } from "@/services/product/productApi";
import { useGetProductAttributesQuery } from "@/services/productAttribute/productAttributeApi";

const emptyAttribute = () => ({
  attribute: "",
  key: "",
  label: "",
  value: "",
  isComparable: true,
});

const ProductAttributes = ({
  attributes,
  setAttributes,
  translations,
  setTranslations,
  nextStep,
  prevStep,
}) => {
  const [activeLanguage, setActiveLanguage] = useState("fa");
  const [translateText] = useTranslateProductTextMutation();
  const { data: attributeDefinitionsData, isLoading: isLoadingDefinitions } =
    useGetProductAttributesQuery({ page: 1, limit: 100 });
  const manualFields = useRef({});
  const attributeDefinitions = attributeDefinitionsData?.data || [];

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      for (const language of TRANSLATION_LANGUAGES) {
        if (language.code === "fa") continue;

        for (const [index, attribute] of attributes.entries()) {
          const source = String(attribute.value || "").trim();
          const manualKey = `${language.code}.${index}.value`;
          if (source.length < 2 || manualFields.current[manualKey]) continue;

          try {
            const response = await translateText({
              text: source,
              to: language.code,
            }).unwrap();
            const translated = response?.data?.text || "";
            if (!translated) continue;

            setTranslations((prev) => {
              const nextLanguage = [...(prev[language.code] || [])];
              nextLanguage[index] = {
                ...(nextLanguage[index] || {}),
                value: translated,
              };
              return { ...prev, [language.code]: nextLanguage };
            });
          } catch (error) {
            toast.error(error?.data?.description || "خطا در ترجمه خودکار");
          }
        }
      }
    }, 700);

    return () => clearTimeout(timeoutId);
  }, [attributes, setTranslations, translateText]);

  const activeConfig =
    TRANSLATION_LANGUAGES.find((language) => language.code === activeLanguage) ||
    TRANSLATION_LANGUAGES[0];

  const updateAttribute = (index, field, value) => {
    if (activeLanguage !== "fa" && field === "value") {
      manualFields.current[`${activeLanguage}.${index}.value`] = true;
      setTranslations((prev) => {
        const nextLanguage = [...(prev[activeLanguage] || [])];
        nextLanguage[index] = {
          ...(nextLanguage[index] || {}),
          value,
        };
        return { ...prev, [activeLanguage]: nextLanguage };
      });
      return;
    }

    setAttributes((prev) => {
      const next = [...prev];
      const updated = { ...next[index], [field]: value };
      if (field === "attribute") {
        const definition = attributeDefinitions.find((item) => item._id === value);
        updated.key = definition?.key || "";
        updated.label = definition?.label || "";
      }
      next[index] = updated;
      return next;
    });
  };

  const addAttribute = () => {
    setAttributes((prev) => [...prev, emptyAttribute()]);
    setTranslations((prev) =>
      Object.fromEntries(
        Object.entries(prev).map(([language, values]) => [
          language,
          [...values, {}],
        ])
      )
    );
  };

  const removeAttribute = (index) => {
    setAttributes((prev) => prev.filter((_, itemIndex) => itemIndex !== index));
    setTranslations((prev) =>
      Object.fromEntries(
        Object.entries(prev).map(([language, values]) => [
          language,
          values.filter((_, itemIndex) => itemIndex !== index),
        ])
      )
    );
  };

  const getTranslatedValue = (index) => {
    if (activeLanguage === "fa") return attributes[index]?.value || "";
    return translations[activeLanguage]?.[index]?.value || "";
  };

  return (
    <>
      <div className="flex max-h-96 w-full flex-col gap-y-4 overflow-y-auto rounded border p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">ویژگی‌های قابل مقایسه</span>
          <button
            type="button"
            onClick={addAttribute}
            className="flex h-7 w-7 items-center justify-center rounded border bg-green-500 text-white"
          >
            <Plus />
          </button>
        </div>

        <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-3 dark:border-gray-700">
          {TRANSLATION_LANGUAGES.map((language) => (
            <button
              key={language.code}
              type="button"
              onClick={() => setActiveLanguage(language.code)}
              className={`rounded border px-3 py-1.5 text-sm transition-colors ${
                activeLanguage === language.code
                  ? "border-blue-600 bg-blue-50 text-blue-700"
                  : "border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              {language.label}
            </button>
          ))}
        </div>

        {attributes.map((attribute, index) => (
          <div key={`${activeLanguage}-${index}`} className="rounded border p-3">
            <div className="grid gap-2 md:grid-cols-12">
              <select
                value={attribute.attribute || ""}
                disabled={activeLanguage !== "fa" || isLoadingDefinitions}
                onChange={(event) =>
                  updateAttribute(index, "attribute", event.target.value)
                }
                className="rounded border p-2 disabled:bg-gray-100 md:col-span-5"
              >
                <option value="">
                  {isLoadingDefinitions ? "در حال دریافت ویژگی‌ها..." : "انتخاب ویژگی"}
                </option>
                {attributeDefinitions.map((definition) => (
                  <option key={definition._id} value={definition._id}>
                    {definition.label}
                  </option>
                ))}
              </select>
              <input
                type="text"
                dir="ltr"
                value={attribute.key}
                disabled
                className="rounded border p-2 text-left disabled:bg-gray-100 md:col-span-2"
                placeholder="shelf_life"
                maxLength={60}
              />
              <input
                type="text"
                dir={activeConfig.dir}
                value={getTranslatedValue(index)}
                onChange={(event) =>
                  updateAttribute(index, "value", event.target.value)
                }
                className={`rounded border p-2 md:col-span-4 ${
                  activeConfig.dir === "ltr" ? "text-left" : ""
                }`}
                placeholder="مقدار"
                maxLength={120}
              />
              <button
                type="button"
                onClick={() => removeAttribute(index)}
                className="flex h-10 items-center justify-center rounded border bg-red-500 text-white md:col-span-1"
              >
                <Minus />
              </button>
            </div>
            <label className="mt-2 flex items-center gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={attribute.isComparable}
                disabled={activeLanguage !== "fa"}
                onChange={(event) =>
                  updateAttribute(index, "isComparable", event.target.checked)
                }
              />
              قابل مقایسه با محصولات دیگر
            </label>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-between">
        <NavigationButton direction="next" onClick={nextStep} />
        <NavigationButton direction="prev" onClick={prevStep} />
      </div>
    </>
  );
};

export default ProductAttributes;
