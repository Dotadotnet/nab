import React from "react";
import NavigationButton from "@/components/shared/button/NavigationButton";
import TranslationTabs from "@/components/shared/translation/TranslationTabs";

const TitleStep = ({
  categories = [],
  register,
  errors,
  prevStep,
  nextStep,
  setValue,
  watch,
  showNext = true,
}) => {
  return (
    <>
      <label htmlFor="parent" className="flex flex-col gap-y-1">
        <span className="text-sm">دسته والد</span>
        <select
          className="rounded border p-2"
          id="parent"
          name="parent"
          {...register("parent")}
        >
          <option value="">بدون والد</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.title}
            </option>
          ))}
        </select>
      </label>

      <TranslationTabs
        errors={errors}
        fields={[
          {
            name: "title",
            label: "عنوان",
            required: true,
            minLength: 3,
            maxLength: 100,
          },
          {
            name: "description",
            label: "توضیحات",
            type: "textarea",
            rows: 4,
            required: true,
            minLength: 50,
            maxLength: 800,
          },
        ]}
        namespace="categoryTranslations"
        register={register}
        setValue={setValue}
        watch={watch}
      />

      <div className="mt-12 flex justify-between">
        {showNext ? <NavigationButton direction="next" onClick={nextStep} /> : <span />}
        <NavigationButton direction="prev" onClick={prevStep} />
      </div>
    </>
  );
};

export default TitleStep;
