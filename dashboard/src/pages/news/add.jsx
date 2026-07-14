import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import ThumbnailUpload from "@/components/shared/gallery/ThumbnailUpload";
import PreviewableMedia from "@/components/shared/gallery/PreviewableMedia";
import TranslationTabs from "@/components/shared/translation/TranslationTabs";
import { appendMediaFields } from "@/utils/directUpload";
import { useGetCategoriesQuery } from "@/services/category/categoryApi";
import { useGetTagsQuery } from "@/services/tag/tagApi";
import {
  useAddNewsMutation,
  useGetNewsCountriesQuery,
  useGetNewsTypesQuery,
} from "@/services/news/newsApi";

const introFields = [
  { name: "title", label: "عنوان خبر", required: true, minLength: 3, maxLength: 100 },
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

const contentFields = [
  { name: "content", label: "محتوا", type: "textarea", rows: 8, maxLength: 12000 },
];

const requiredLanguages = ["en", "tr", "ar"];
const isFilled = (value) => typeof value === "string" && value.trim().length > 0;

const getLabel = (item, fallback = "بدون عنوان") =>
  item?.translations?.[0]?.translation?.fields?.title ||
  item?.translations?.[0]?.translation?.fields?.name ||
  item?.title ||
  item?.name ||
  fallback;

const AddNews = () => {
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [isUploadingMedia, setIsUploadingMedia] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [addNews, { isLoading, data, error }] = useAddNewsMutation();
  const { data: categoriesData } = useGetCategoriesQuery();
  const { data: tagsData } = useGetTagsQuery({ page: 1, limit: 200 });
  const { data: typesData } = useGetNewsTypesQuery();
  const { data: countriesData } = useGetNewsCountriesQuery();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({ mode: "onChange" });

  const categories = useMemo(() => categoriesData?.data || [], [categoriesData]);
  const tags = useMemo(() => tagsData?.data || [], [tagsData]);
  const types = useMemo(() => typesData?.data || [], [typesData]);
  const countries = useMemo(() => countriesData?.data || [], [countriesData]);

  useEffect(() => {
    if (isLoading) toast.loading("در حال افزودن خبر...", { id: "addNews" });
    if (data) toast.success(data?.description || "خبر ایجاد شد", { id: "addNews" });
    if (error?.data) toast.error(error.data.description || error.data.message, { id: "addNews" });
  }, [data, error, isLoading]);

  const hasRequiredTranslations = (values) => {
    const translations = values.newsTranslations || {};
    return requiredLanguages.every((language) =>
      ["title", "summary", "content"].every((field) =>
        isFilled(translations?.[language]?.[field])
      )
    );
  };

  const onSubmit = (values) => {
    if (isUploadingMedia) {
      toast.error("لطفا تا پایان آپلود تصویر صبر کنید");
      return;
    }
    if (!thumbnail) {
      toast.error("تصویر خبر الزامی است");
      return;
    }
    if (!selectedCategories.length || !selectedTags.length) {
      toast.error("حداقل یک دسته‌بندی و یک تگ انتخاب کنید");
      return;
    }
    if (!hasRequiredTranslations(values)) {
      toast.error("ترجمه عنوان، خلاصه و محتوا را برای همه زبان‌ها کامل کنید");
      return;
    }

    const formData = new FormData();
    appendMediaFields(formData, { thumbnail });
    formData.append("title", values.title);
    formData.append("summary", values.summary);
    formData.append("content", values.content);
    formData.append("newsTranslations", JSON.stringify(values.newsTranslations || {}));
    formData.append("type", values.type);
    if (values.country) formData.append("country", values.country);
    formData.append("category", JSON.stringify(selectedCategories));
    formData.append("tags", JSON.stringify(selectedTags));
    formData.append("publishDate", values.publishDate || new Date().toISOString());
    formData.append("visibility", values.visibility ? "true" : "");
    formData.append("readTime", values.readTime || "5");
    formData.append("source", JSON.stringify({
      name: values.sourceName || "",
      link: values.sourceLink || "",
    }));
    formData.append("socialLinks", JSON.stringify([]));

    addNews(formData);
  };

  return (
    <section className="min-h-screen bg-slate-100 p-4 dark:bg-slate-900">
      <form
        className="mx-auto flex w-full max-w-3xl flex-col gap-4 rounded bg-white p-5 shadow dark:bg-gray-900"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-lg font-bold text-slate-900 dark:text-white">افزودن خبر</h1>

        <div className="flex flex-col items-center gap-3 rounded border p-4">
          {thumbnailPreview ? (
            <PreviewableMedia
              alt="news"
              className="h-32 w-32 rounded object-cover"
              src={thumbnailPreview}
            />
          ) : null}
          <ThumbnailUpload
            setThumbnail={setThumbnail}
            setThumbnailPreview={setThumbnailPreview}
            folder="news"
            uploadOnSelect
            onUploadStateChange={setIsUploadingMedia}
            register={register("thumbnail")}
            title="انتخاب تصویر خبر"
          />
        </div>

        <TranslationTabs
          errors={errors}
          fields={introFields}
          namespace="newsTranslations"
          register={register}
          setValue={setValue}
          watch={watch}
        />

        <label className="flex flex-col gap-1">
          <span className="text-sm">محتوای فارسی*</span>
          <textarea
            className="min-h-48 rounded border p-2"
            {...register("content", { required: "محتوا الزامی است" })}
          />
          {errors.content && <span className="text-sm text-red-500">{errors.content.message}</span>}
        </label>

        <TranslationTabs
          errors={errors}
          fields={contentFields}
          includeSource={false}
          namespace="newsTranslations"
          register={register}
          setValue={setValue}
          watch={watch}
        />

        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-1">
            نوع خبر*
            <select className="rounded border p-2" {...register("type", { required: true })}>
              <option value="">انتخاب کنید</option>
              {types.map((item) => (
                <option key={item._id} value={item._id}>{getLabel(item)}</option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-1">
            کشور
            <select className="rounded border p-2" {...register("country")}>
              <option value="">انتخاب کنید</option>
              {countries.map((item) => (
                <option key={item._id} value={item._id}>{getLabel(item)}</option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-1">
            تاریخ انتشار
            <input className="rounded border p-2" type="date" {...register("publishDate")} />
          </label>

          <label className="flex flex-col gap-1">
            زمان مطالعه
            <input className="rounded border p-2" type="number" min="1" {...register("readTime")} />
          </label>
        </div>

        <label className="flex flex-col gap-1">
          دسته‌بندی‌ها*
          <select
            className="min-h-28 rounded border p-2"
            multiple
            value={selectedCategories}
            onChange={(event) =>
              setSelectedCategories(
                Array.from(event.target.selectedOptions).map((option) => option.value)
              )
            }
          >
            {categories.map((item) => (
              <option key={item._id} value={item._id}>{getLabel(item)}</option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1">
          تگ‌ها*
          <select
            className="min-h-28 rounded border p-2"
            multiple
            value={selectedTags}
            onChange={(event) =>
              setSelectedTags(
                Array.from(event.target.selectedOptions).map((option) => option.value)
              )
            }
          >
            {tags.map((item) => (
              <option key={item._id} value={item._id}>{getLabel(item)}</option>
            ))}
          </select>
        </label>

        <div className="grid gap-4 md:grid-cols-2">
          <input className="rounded border p-2" placeholder="نام منبع" {...register("sourceName")} />
          <input className="rounded border p-2" placeholder="لینک منبع" {...register("sourceLink")} />
        </div>

        <label className="flex items-center gap-2">
          <input type="checkbox" defaultChecked {...register("visibility")} />
          عمومی باشد
        </label>

        <button
          className="rounded bg-black px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-60"
          disabled={isLoading || isUploadingMedia}
          type="submit"
        >
          {isLoading || isUploadingMedia ? "در حال پردازش..." : "ثبت خبر"}
        </button>
      </form>
    </section>
  );
};

export default AddNews;
