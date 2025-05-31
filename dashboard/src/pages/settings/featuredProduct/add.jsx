import { useForm } from "react-hook-form";
import Button from "@/components/shared/button/Button";
import { useAddFeaturedProductMutation } from "@/services/featuredProduct/featuredProductApi";
import { toast } from "react-hot-toast";
import Modal from "@/components/shared/modal/Modal";
import { useState, useEffect, useMemo } from "react";
import AddButton from "@/components/shared/button/AddButton";
import { useGetCategoriesQuery } from "@/services/category/categoryApi";
import { useGetProductsQuery } from "@/services/product/productApi";
import Dropdown from "@/components/shared/dropDown/Dropdown";
import Plus from "@/components/icons/Plus";
import { Controller } from "react-hook-form";
import ThumbnailUpload from "@/components/shared/gallery/ThumbnailUpload";
import SkeletonImage from "@/components/shared/skeleton/SkeletonImage";

const AddFeaturedProduct = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);

  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [carouselThumbnail, setCarouselThumbnail] = useState(null);
  const [carouselPreview, setCarouselPreview] = useState(null);
  const [
    addFeaturedProduct,
    { isLoading: isAdding, data: addData, error: addError }
  ] = useAddFeaturedProductMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control
  } = useForm({ mode: "onChange" });
  const {
    isLoading: fetchingCategories,
    data: fetchCategoriesData,
    error: fetchCategoriesError
  } = useGetCategoriesQuery({
    page: 1,
    limit: Infinity,
    status: "all",
    search: ""
  });
  const {
    isLoading: fetchingProducts,
    data: fetchProductsData,
    error: fetchProductsError
  } = useGetProductsQuery();

  const categories = useMemo(
    () =>
      fetchCategoriesData?.data?.map((category) => ({
        id: category._id,
        value: category.translations[0].translation?.fields.title,
        label: category.title,
        icon: category.icon
      })) || [],
    [fetchCategoriesData]
  );

  const products = useMemo(
    () =>
      fetchProductsData?.data?.map((product) => ({
        id: product._id,
        value:
          product.translations?.[0]?.translation?.fields?.title ||
          product.title,
        label: product.title
      })) || [],
    [fetchProductsData]
  );

  useEffect(() => {
    if (isAdding) {
      toast.loading("در حال افزودن  برچسب...", { id: "addFeaturedProduct" });
    }

    if (addData) {
      toast.success(addData?.description, { id: "addFeaturedProduct" });
      setIsOpen(false);
      reset();
    }

    if (addError?.data) {
      toast.error(addError?.data?.description, { id: "addFeaturedProduct" });
    }
  }, [isAdding, addData, addError]);

  function onSubmit(formData) {
    const formattedData = new FormData();
    if (!thumbnail) {
      toast.error("آپلود تصویر الزامی است");
      return;
    }
       if (!carouselThumbnail) {
      toast.error("آپلود تصویر الزامی است");
      return;
    }
    formattedData.append("title", formData.title);
    formattedData.append("description", formData.description);
    formattedData.append("thumbnail", thumbnail);
    formattedData.append("carouselThumbnail", carouselThumbnail);
    formattedData.append("category", formData.category.id);
    formattedData.append("product", formData.product.id);
    formattedData.append("priority", formData.priority); // اضافه شده

    addFeaturedProduct(formattedData);
  }

  return (
    <>
      <AddButton onClick={() => setIsOpen(true)} />
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          className="lg:w-1/3 md:w-1/2 w-full z-50 h-fit max-h-96 overflow-y-auto  max-h-3/4"
        >
          <form
            className="text-sm w-full h-full flex flex-col gap-y-4 p-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex gap-4 flex-col">
              <div className="w-full flex flex-col justify-center items-center gap-y-4 p-4 border rounded">
                <div className="flex flex-col items-center">
                  <div className="flex justify-between">
                    <div className="profile-container shine-effect rounded-full flex justify-center mb-4">
                      {thumbnailPreview ? (
                        <img
                          src={thumbnailPreview}
                          alt="thumbnail"
                          height={100}
                          width={100}
                          className="h-[100px] w-[100px] profile-pic rounded-full"
                        />
                      ) : (
                        <SkeletonImage />
                      )}
                    </div>
                    <div className="profile-container shine-effect rounded-full flex justify-center mb-4">
                      {carouselPreview ? (
                        <img
                          src={carouselPreview}
                          alt="carousel-thumbnail"
                          height={100}
                          width={100}
                          className="h-[100px] w-[100px] profile-pic rounded-full"
                        />
                      ) : (
                        <SkeletonImage />
                      )}
                    </div>
                  </div>
                  <label
                    htmlFor="thumbnail"
                    className="flex flex-col text-center gap-y-2"
                  >
                    تصویر اصلی
                    <ThumbnailUpload
                      setThumbnailPreview={setThumbnailPreview}
                      setThumbnail={setThumbnail}
                      title={"لطفا یک تصویر بند انگشتی انتخاب کنید"}
                      register={register("thumbnail", {
                        required: "آپلود تصویر عنوان الزامی است"
                      })}
                      maxFiles={1}
                    />
                  </label>
                  {errors?.thumbnail && (
                    <span className="text-red-500 text-sm">
                      {errors?.thumbnail.message}
                    </span>
                  )}
                </div>
                <label
                  htmlFor="carouselThumbnail"
                  className="flex flex-col text-center gap-y-2"
                >
                  تصویر چرخ‌و‌فلک
                  <ThumbnailUpload
                    setThumbnailPreview={setCarouselPreview}
                    setThumbnail={setCarouselThumbnail}
                    title={"لطفا یک تصویر برای چرخ‌و‌فلک انتخاب کنید"}
                    register={register("carouselThumbnail", {
                      required: "آپلود تصویر چرخ‌و‌فلک الزامی است"
                    })}
                    maxFiles={1}
                  />
                </label>
                {errors?.carouselThumbnail && (
                  <span className="text-red-500 text-sm">
                    {errors?.carouselThumbnail.message}
                  </span>
                )}
                <label htmlFor="title" className="w-full flex flex-col gap-y-1">
                  <span className="text-sm">عنوان*</span>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    required
                    {...register("title", {
                      required: "وارد کردن عنوان الزامی است",
                      minLength: {
                        value: 3,
                        message: "عنوان باید حداقل ۳ کاراکتر باشد"
                      },
                      maxLength: {
                        value: 70,
                        message: "عنوان نمی‌تواند بیشتر از ۷۰ کاراکتر باشد"
                      }
                    })}
                  />
                  {/* نمایش خطا برای عنوان */}
                  {errors.title && (
                    <span className="text-xs text-red-500">
                      {errors.title.message}
                    </span>
                  )}
                </label>
                {/* description */}
                <label
                  htmlFor="description"
                  className="w-full flex flex-col gap-y-1"
                >
                  <span className="text-sm">توضیحات*</span>
                  <textarea
                    name="description"
                    id="description"
                    rows="4"
                    required
                    {...register("description", {
                      required: "وارد کردن توضیحات الزامی است",
                      minLength: {
                        value: 50,
                        message: "توضیحات باید حداقل ۵۰ کاراکتر باشد"
                      },
                      maxLength: {
                        value: 1600,
                        message: "توضیحات نمی‌تواند بیشتر از 1600 کاراکتر باشد"
                      }
                    })}
                  />
                  {errors.description && (
                    <span className="text-xs text-red-500">
                      {errors.description.message}
                    </span>
                  )}
                </label>
              </div>
              <label
                htmlFor="priority"
                className="w-full flex flex-col gap-y-1"
              >
                <span className="text-sm">اولویت (عدد)</span>
                <input
                  type="number"
                  name="priority"
                  id="priority"
                  {...register("priority", {
                    required: "وارد کردن اولویت الزامی است",
                    valueAsNumber: true,
                    min: {
                      value: 0,
                      message: "اولویت نمی‌تواند منفی باشد"
                    }
                  })}
                  className="w-full p-2 border rounded"
                />
                {errors.priority && (
                  <span className="text-xs text-red-500">
                    {errors.priority.message}
                  </span>
                )}
              </label>

              <div className="flex flex-col gap-y-2 w-full  ">
                <div className="flex-1 flex items-center justify-between gap-2 gap-y-2 w-full">
                  <div className="flex flex-col flex-1">
                    <label
                      htmlFor="category"
                      className="flex flex-col gap-y-2 "
                    >
                      دسته بندی
                      <Controller
                        control={control}
                        name="category"
                        rules={{ required: "انتخاب دسته بندی الزامی است" }}
                        render={({ field: { onChange, value } }) => (
                          <Dropdown
                            items={categories}
                            selectedItems={value || []}
                            handleSelect={onChange}
                            placeholder="یک مورد انتخاب کنید"
                            className={"w-full h-12"}
                            returnType="id"
                          />
                        )}
                      />
                    </label>
                  </div>
                  <div className="mt-7 flex justify-start">
                    <button
                      type="button"
                      className="p-2 bg-green-400 dark:bg-blue-600 text-white rounded hover:bg-green-600 dark:hover:bg-blue-400 transition-colors"
                      aria-label="افزودن دسته بندی جدید"
                    >
                      <Plus className="w-8 h-8" />
                    </button>
                  </div>
                </div>
                {errors.mainCategory && (
                  <span className="text-red-500 text-sm">
                    {errors.mainCategory.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-y-2 w-full">
                <div className="flex-1 flex items-center justify-between gap-2 gap-y-2 w-full">
                  <div className="flex flex-col flex-1">
                    <label htmlFor="product" className="flex flex-col gap-y-2 ">
                      محصول
                      <Controller
                        control={control}
                        name="product"
                        rules={{ required: "انتخاب محصول الزامی است" }}
                        render={({ field: { onChange, value } }) => (
                          <Dropdown
                            items={products}
                            selectedItems={value || []}
                            handleSelect={onChange}
                            placeholder="یک مورد انتخاب کنید"
                            className={"w-full h-12"}
                            returnType="id"
                          />
                        )}
                      />
                    </label>
                  </div>
                  <div className="mt-7 flex justify-start">
                    <button
                      type="button"
                      className="p-2 bg-green-400 dark:bg-blue-600 text-white rounded hover:bg-green-600 dark:hover:bg-blue-400 transition-colors"
                      aria-label="افزودن محصول جدید"
                    >
                      <Plus className="w-8 h-8" />
                    </button>
                  </div>
                </div>
                {errors.product && (
                  <span className="text-red-500 text-sm">
                    {errors.product.message}
                  </span>
                )}
              </div>

              <Button type="submit" className="py-2 mt-4 mb-4 bg-black">
                ایجاد کردن
              </Button>
            </div>
          </form>
        </Modal>
      )}
    </>
  );
};

export default AddFeaturedProduct;
