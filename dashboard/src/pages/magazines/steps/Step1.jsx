import React from "react";
import NavigationButton from "@/components/shared/button/NavigationButton";
import TranslationTabs from "@/components/shared/translation/TranslationTabs";

const magazineIntroFields = [
  {
    name: "title",
    label: "عنوان مجله",
    required: true,
    minLength: 3,
    maxLength: 100,
  },
  {
    name: "summary",
    label: "خلاصه",
    type: "textarea",
    rows: 4,
    required: true,
    minLength: 20,
    maxLength: 300,
  },
];

const Step1 = ({
  publishDate,
  register,
  errors,
  nextStep,
  setValue,
  watch,
}) => {
  return (
    <>
      <TranslationTabs
        errors={errors}
        fields={magazineIntroFields}
        namespace="magazineTranslations"
        register={register}
        setValue={setValue}
        watch={watch}
      />

      <label htmlFor="publishDate" className="flex flex-col gap-y-2 w-full">
        تاریخ انتشار
        <input
          type="date"
          name="publishDate"
          id="publishDate"
          className="rounded p-2 border w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          {...register("publishDate", {
            required: "تاریخ انتشار الزامی است",
          })}
          defaultValue={publishDate}
        />
        {errors.publishDate && (
          <span className="text-red-500 text-sm">
            {errors.publishDate.message}
          </span>
        )}
      </label>

      <div className="flex justify-between mt-12 right-0 absolute bottom-2 w-full px-8">
        <NavigationButton direction="next" onClick={nextStep} />
      </div>
    </>
  );
};

export default Step1;
