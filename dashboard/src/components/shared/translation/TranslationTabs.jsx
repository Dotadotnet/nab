import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { useTranslateTextMutation } from "@/services/translation/translationApi";

export const TRANSLATION_LANGUAGES = [
  { code: "fa", label: "فارسی", dir: "rtl" },
  { code: "en", label: "English", dir: "ltr" },
  { code: "tr", label: "Turkce", dir: "ltr" },
  { code: "ar", label: "العربية", dir: "rtl" },
];

const getFieldName = (namespace, language, field) =>
  language === "fa" ? field : `${namespace}.${language}.${field}`;

function FieldControl({ config, dir, error, registerProps, language, namespace }) {
  const fieldId = getFieldName(namespace, language, config.name);
  const className = `rounded border p-2 ${
    dir === "ltr" ? "text-left" : ""
  }`;

  return (
    <label className="flex flex-col gap-y-1" htmlFor={fieldId}>
      <span className="text-sm">
        {config.label}
        {language === "fa" && config.required ? "*" : ""}
      </span>
      {config.type === "textarea" ? (
        <textarea
          key={fieldId}
          id={fieldId}
          dir={dir}
          rows={config.rows || 4}
          maxLength={config.maxLength}
          className={className}
          {...registerProps}
        />
      ) : (
        <input
          key={fieldId}
          id={fieldId}
          dir={dir}
          type={config.type || "text"}
          maxLength={config.maxLength}
          placeholder={config.placeholder || config.label}
          className={className}
          {...registerProps}
        />
      )}
      {language === "fa" && error ? (
        <span className="text-sm text-red-500">{error.message}</span>
      ) : null}
    </label>
  );
}

const TranslationTabs = ({
  errors = {},
  fields,
  includeSource = true,
  namespace = "translations",
  register,
  setValue,
  watch,
}) => {
  const availableLanguages = includeSource
    ? TRANSLATION_LANGUAGES
    : TRANSLATION_LANGUAGES.filter((language) => language.code !== "fa");
  const [activeLanguage, setActiveLanguage] = useState(
    availableLanguages[0]?.code || "fa"
  );
  const [translateText] = useTranslateTextMutation();
  const manualFields = useRef({});
  const lastAutoValues = useRef({});

  const sourceValues = fields.reduce((values, field) => {
    values[field.name] = watch(field.name);
    return values;
  }, {});

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      const targets = TRANSLATION_LANGUAGES.filter(
        (language) => language.code !== "fa"
      );

      for (const language of targets) {
        for (const field of fields) {
          const source =
            typeof sourceValues[field.name] === "string"
              ? sourceValues[field.name].trim()
              : "";
          const targetName = getFieldName(namespace, language.code, field.name);

          if (source.length < 3 || manualFields.current[targetName]) continue;

          try {
            const response = await translateText({
              text: source,
              to: language.code,
            }).unwrap();
            const translated = response?.data?.text || "";

            if (translated && !manualFields.current[targetName]) {
              lastAutoValues.current[targetName] = translated;
              setValue(targetName, translated, {
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
  }, [fields, namespace, setValue, translateText, ...Object.values(sourceValues)]);

  const activeConfig =
    availableLanguages.find((language) => language.code === activeLanguage) ||
    availableLanguages[0] ||
    TRANSLATION_LANGUAGES[0];

  return (
    <div className="flex flex-col gap-4 rounded border p-4">
      <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-3 dark:border-gray-700">
        {availableLanguages.map((language) => (
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
        {fields.map((field) => {
          const name = getFieldName(namespace, activeLanguage, field.name);
          const rules =
            activeLanguage === "fa"
              ? {
                  required: field.required
                    ? `${field.label} الزامی است`
                    : false,
                  minLength: field.minLength
                    ? {
                        value: field.minLength,
                        message: `${field.label} کوتاه است`,
                      }
                    : undefined,
                  maxLength: field.maxLength
                    ? {
                        value: field.maxLength,
                        message: `${field.label} بیش از حد مجاز است`,
                      }
                    : undefined,
                }
              : {
                  maxLength: field.maxLength
                    ? {
                        value: field.maxLength,
                        message: `${field.label} بیش از حد مجاز است`,
                      }
                    : undefined,
                };

          const registerProps = register(name, {
            ...rules,
            onChange: (event) => {
              if (activeLanguage === "fa") return;
              const value = event.target.value;
              manualFields.current[name] =
                value.trim().length > 0 &&
                value !== lastAutoValues.current[name];
            },
          });

          return (
            <FieldControl
              key={name}
              config={field}
              dir={activeConfig.dir}
              error={errors[field.name]}
              language={activeLanguage}
              namespace={namespace}
              registerProps={registerProps}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TranslationTabs;
