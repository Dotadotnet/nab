import React from "react";
import Plus from "@/components/icons/Plus";
import X from "@/components/icons/X";

const emptyOption = { label: "", value: "" };
const hexColorPattern = /^#[0-9a-f]{6}$/i;

function DynamicOptionsInput({
  label = "گزینه‌ها",
  onChange,
  value = [],
  helperText,
  isColor = false,
}) {
  const options = value.length ? value : [emptyOption];

  const updateOption = (index, field, fieldValue) => {
    const nextOptions = options.map((option, optionIndex) =>
      optionIndex === index ? { ...option, [field]: fieldValue } : option
    );
    onChange(nextOptions);
  };

  const addOption = () => {
    onChange([...options, emptyOption]);
  };

  const removeOption = (index) => {
    const nextOptions = options.filter((_, optionIndex) => optionIndex !== index);
    onChange(nextOptions.length ? nextOptions : [emptyOption]);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm text-slate-700 dark:text-slate-200">{label}</span>
        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded border border-gray-200 text-slate-600 transition hover:border-green-400 hover:text-green-600 dark:border-white/10 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-300"
          onClick={addOption}
          type="button"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <div className="space-y-3">
        {options.map((option, index) => (
          <div className="grid gap-2 sm:grid-cols-[1fr_1fr_auto]" key={index}>
            <input
              className="w-full rounded border border-gray-200 bg-white px-3 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-green-400 dark:border-white/10 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-400"
              onChange={(event) => updateOption(index, "label", event.target.value)}
              placeholder={isColor ? "عنوان، مثلا مشکی" : "عنوان، مثلا ۱۲ ماه"}
              value={option.label}
            />
            <div className="flex gap-2">
              {isColor ? (
                <input
                  aria-label="انتخاب رنگ"
                  className="h-11 w-14 shrink-0 cursor-pointer rounded border border-gray-200 bg-white p-1 dark:border-white/10 dark:bg-slate-800"
                  onChange={(event) => updateOption(index, "value", event.target.value)}
                  type="color"
                  value={hexColorPattern.test(option.value) ? option.value : "#000000"}
                />
              ) : null}
              <input
                className="w-full rounded border border-gray-200 bg-white px-3 py-3 text-left text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-green-400 dark:border-white/10 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-400"
                dir="ltr"
                onChange={(event) => updateOption(index, "value", event.target.value)}
                placeholder={isColor ? "#000000" : "value, مثل 12_months"}
                value={option.value}
              />
            </div>
            <button
              aria-label="حذف گزینه"
              className="inline-flex h-11 w-full items-center justify-center rounded border border-red-200 text-red-500 transition hover:border-red-400 hover:text-red-600 dark:border-red-900/70 dark:text-red-300 dark:hover:border-red-400 dark:hover:text-red-200 sm:w-11"
              onClick={() => removeOption(index)}
              type="button"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>

      {helperText ? <span className="block text-xs text-slate-500 dark:text-slate-400">{helperText}</span> : null}
    </div>
  );
}

export default DynamicOptionsInput;

