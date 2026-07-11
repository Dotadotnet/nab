import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import NavigationButton from "@/components/shared/button/NavigationButton";
import { useForm } from "react-hook-form";
import SendButton from "@/components/shared/button/SendButton";
import { useAddProductMutation } from "@/services/product/productApi";
import ThumbnailStep from "./Thumbnail";
import StepIndicator from "./StepIndicator";
import Title from "./Title";
import Gallery from "./Gallery";
import Campaign from "./Campaign";
import ProductStatus from "./ProductStatus";
import ProductFilters from "./ProductFilters";
import Ingredients from "./Ingredients";
import ProductAttributes from "./ProductAttributes";
import { appendMediaFields } from "@/utils/directUpload";

const requiredTranslationLanguages = ["en", "tr", "ar"];

const isFilled = (value) =>
  typeof value === "string" && value.trim().length > 0;

const StepAddProduct = () => {
  const [thumbnail, setThumbnail] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [mediaUploading, setMediaUploading] = useState({
    thumbnail: false,
    gallery: false
  });
  const [addProduct, { isLoading, data, error }] = useAddProductMutation();
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState({});
  const [invalidSteps, setInvalidSteps] = useState({});
  const [ingredients, setIngredients] = useState([""]);
  const [ingredientTranslations, setIngredientTranslations] = useState({});
  const [attributes, setAttributes] = useState([
    { attribute: "", key: "", label: "", value: "", isComparable: true }
  ]);
  const [attributeTranslations, setAttributeTranslations] = useState({});
  const [selectedTags, setSelectedTags] = useState([]);
  const {
    register,
    setValue,
    reset,
    control,
    formState: { errors },
    trigger,
    handleSubmit,
    watch
  } = useForm({
    mode: "onChange"
  });
  const totalSteps = 8;

  const hasRequiredProductTranslations = () => {
    const translations = watch("productTranslations") || {};
    const requiredFields = ["title", "summary", "description"];

    return requiredTranslationLanguages.every((language) =>
      requiredFields.every((field) => isFilled(translations?.[language]?.[field]))
    );
  };

  const hasRequiredIngredientTranslations = () => {
    const cleanIngredients = ingredients
      .map((ingredient) => ingredient.trim())
      .filter(Boolean);

    if (!cleanIngredients.length) return false;

    return requiredTranslationLanguages.every((language) => {
      const values = ingredientTranslations?.[language] || [];
      return cleanIngredients.every((_, index) => isFilled(values[index]));
    });
  };

  const hasRequiredAttributeTranslations = () => {
    const cleanAttributes = attributes.filter(
      (attribute) => attribute.attribute && isFilled(String(attribute.value || ""))
    );

    if (!cleanAttributes.length) return false;

    return requiredTranslationLanguages.every((language) => {
      const values = attributeTranslations?.[language] || [];
      return cleanAttributes.every((_, index) => isFilled(values[index]?.value));
    });
  };

  const onSubmit = async (data) => {
    if (
      !hasRequiredProductTranslations() ||
      !hasRequiredIngredientTranslations() ||
      !hasRequiredAttributeTranslations()
    ) {
      toast.error("لطفاً همه ترجمه‌های محصول را کامل کنید");
      return;
    }

    const selectedTags2 = selectedTags.map((tag) => tag.id);

    const formData = new FormData();
    appendMediaFields(formData, { thumbnail, gallery });
    formData.append("title", data.title);
    formData.append("titleEn", data.titleEn || "");
    formData.append("summary", data.summary);
    formData.append("description", data.description);
    formData.append(
      "productTranslations",
      JSON.stringify(data.productTranslations || {})
    );
    formData.append("category", data.category);
    formData.append("filterValues", JSON.stringify(data.filterValues || {}));
    const cleanIngredients = ingredients
      .map((ingredient) => ingredient.trim())
      .filter(Boolean);
    const cleanAttributes = attributes
      .map((attribute, index) => ({
        attribute: attribute.attribute,
        key: attribute.key,
        label: attribute.label,
        value: attribute.value,
        isComparable: attribute.isComparable !== false,
        sortOrder: index
      }))
      .filter((attribute) => attribute.attribute && attribute.label && attribute.value);
    const legacyFeatures = cleanAttributes.map((attribute) => ({
      icon: "",
      title: attribute.label,
      content: [String(attribute.value)]
    }));
    formData.append("ingredients", JSON.stringify(cleanIngredients));
    formData.append("attributes", JSON.stringify(cleanAttributes));
    formData.append("ingredientTranslations", JSON.stringify(ingredientTranslations || {}));
    formData.append("attributeTranslations", JSON.stringify(attributeTranslations || {}));
    formData.append("features", JSON.stringify(legacyFeatures));
    formData.append("discountAmount", data.discountAmount ||0);
    formData.append("isFeatured", data.isFeatured);
    formData.append(
      "campaign",
      JSON.stringify({
        title: data.campaignTitle,
        state: data.campaignState
      })
    );
    formData.append("tags", JSON.stringify(selectedTags2));

    formData.append(
      "variations",
      JSON.stringify(
        data.variations.map((variation) => ({
          unit: variation.unit.id,
          price: variation.price,
          lowStockThreshold: variation.lowStockThreshold,
          stock: variation.stock
        }))
      )
    );

    addProduct(formData);
  };

  useEffect(() => {
    if (isLoading) {
      toast.loading("در حال افزودن محصول...", { id: "addProduct" });
    }

    if (data) {
      toast.success(data?.description, { id: "addProduct" });
    }

    if (error?.data) {
      toast.error(error?.data?.description, { id: "addProduct" });
    }
  }, [isLoading, data, error]);

  const nextStep = async () => {
    if (mediaUploading.thumbnail || mediaUploading.gallery) {
      toast.error("لطفا تا پایان آپلود تصویر صبر کنید");
      return;
    }

    let valid = false;
    switch (currentStep) {
      case 1:
        valid = await trigger("thumbnail");
        if (!valid) {
          toast.error("لطفاً تصویر بند انگشتی را وارد کنید");
          setInvalidSteps((prev) => ({ ...prev, [currentStep]: true }));
          return;
        }
        valid = true;
        break;
      case 2:
        valid = gallery.length > 0;
        if (!valid) {
          toast.error("لطفاً گالری محصول  را وارد کنید");
          setInvalidSteps((prev) => ({ ...prev, [currentStep]: true }));
          return;
        }
        valid = true;
        break;
      case 3:
        valid = await trigger("title");
        if (!valid) {
          toast.error("لطفاً عنوان محصول را وارد کنید");
          setInvalidSteps((prev) => ({ ...prev, [currentStep]: true }));
          return;
        }
        valid = await trigger("titleEn");
        if (!valid) {
          toast.error("لطفاً عنوان انگلیسی محصول را بررسی کنید");
          setInvalidSteps((prev) => ({ ...prev, [currentStep]: true }));
          return;
        }
        valid = await trigger("summary");
        if (!valid) {
          toast.error("لطفاً خلاصه ای کوتاه از محصول را وارد کنید");
          setInvalidSteps((prev) => ({ ...prev, [currentStep]: true }));
          return;
        }
        valid = await trigger("description");
        if (!valid) {
          toast.error("لطفاً توضیحات محصول را وارد کنید");
          setInvalidSteps((prev) => ({ ...prev, [currentStep]: true }));
          return;
        }
        valid = await trigger("category");
        if (!valid) {
          toast.error("لطفاً دسته بندی محصول را وارد کنید");
          setInvalidSteps((prev) => ({ ...prev, [currentStep]: true }));
          return;
        }
        valid = hasRequiredProductTranslations();
        if (!valid) {
          toast.error("لطفاً ترجمه عنوان، خلاصه و توضیحات را برای همه زبان‌ها کامل کنید");
          setInvalidSteps((prev) => ({ ...prev, [currentStep]: true }));
          return;
        }
        break;

      case 4:
        valid = true;
        break;
      case 5:
        valid = ingredients.some((ingredient) => ingredient.trim());
        if (!valid) {
          toast.error("لطفاً حداقل یک ماده سازنده وارد کنید");
          setInvalidSteps((prev) => ({ ...prev, [currentStep]: true }));
          return;
        }
        valid = hasRequiredIngredientTranslations();
        if (!valid) {
          toast.error("لطفاً ترجمه همه مواد سازنده را برای همه زبان‌ها کامل کنید");
          setInvalidSteps((prev) => ({ ...prev, [currentStep]: true }));
          return;
        }
        break;
      case 6:
        valid = attributes.some((attribute) => attribute.attribute && attribute.value);
        if (!valid) {
          toast.error("لطفاً حداقل یک ویژگی قابل مقایسه وارد کنید");
          setInvalidSteps((prev) => ({ ...prev, [currentStep]: true }));
          return;
        }
        valid = hasRequiredAttributeTranslations();
        if (!valid) {
          toast.error("لطفاً ترجمه مقدار همه ویژگی‌ها را برای همه زبان‌ها کامل کنید");
          setInvalidSteps((prev) => ({ ...prev, [currentStep]: true }));
          return;
        }
        break;
      case 7:
        valid = await trigger("campaignTitle");
        if (!valid) {
          toast.error("لطفاً عنوان کمپین فروش را تعیین کنید");
          setInvalidSteps((prev) => ({ ...prev, [currentStep]: true }));
          return;
        }
        valid = await trigger("campaignState");
        if (!valid) {
          toast.error("لطفاً نوع کمپین فروش را تعیین کنید");
          setInvalidSteps((prev) => ({ ...prev, [currentStep]: true }));
          return;
        }
        break;
      default:
        break;
    }

    if (valid) {
      setCompletedSteps((prev) => ({ ...prev, [currentStep]: true }));
      setInvalidSteps((prev) => ({ ...prev, [currentStep]: false }));
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };
  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };
  const renderStepContent = (step) => {
    switch (step) {
      case 1:
        return (
          <ThumbnailStep
            thumbnail={thumbnail}
            setThumbnail={setThumbnail}
            nextStep={nextStep}
            register={register}
            errors={errors.thumbnail}
            onUploadStateChange={(value) =>
              setMediaUploading((prev) => ({ ...prev, thumbnail: value }))
            }
          />
        );
      case 2:
        return (
          <Gallery
            setGallery={setGallery}
            setValue={setValue}
            nextStep={nextStep}
            prevStep={prevStep}
            register={register}
            errors={errors.gallery}
            onUploadStateChange={(value) =>
              setMediaUploading((prev) => ({ ...prev, gallery: value }))
            }
          />
        );
      case 3:
        return (
          <Title
            register={register}
            errors={errors}
            prevStep={prevStep}
            nextStep={nextStep}
            setValue={setValue}
            watch={watch}
          />
        );

      case 4:
        return (
          <ProductFilters
            errors={errors}
            nextStep={nextStep}
            prevStep={prevStep}
            register={register}
            setValue={setValue}
            watch={watch}
          />
        );
      case 5:
        return (
          <Ingredients
            ingredients={ingredients}
            setIngredients={setIngredients}
            translations={ingredientTranslations}
            setTranslations={setIngredientTranslations}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 6:
        return (
          <ProductAttributes
            attributes={attributes}
            setAttributes={setAttributes}
            translations={attributeTranslations}
            setTranslations={setAttributeTranslations}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 7:
        return (
          <Campaign
            register={register}
            errors={errors}
            prevStep={prevStep}
            nextStep={nextStep}
            watch={watch}
            control={control}
          />
        );
      case 8:
        return (
          <ProductStatus
          register={register}
          errors={errors}
          setSelectedOptions={setSelectedTags}
          selectedOptions={selectedTags}
        />
        );
      default:
        return null;
    }
  };
  const handleStepClick = async (step) => {
    if (step < currentStep) {
      setCurrentStep(step);
    } else if (step > currentStep) {
      let canProceed = true;
      for (let i = 1; i < step; i++) {
        if (!completedSteps[i]) {
          canProceed = false;
          toast.error(`لطفاً ابتدا مرحله ${i} را تکمیل کنید.`);
          setCurrentStep(i);
          break;
        }
      }
      if (canProceed) {
        setCurrentStep(step);
      }
    }
  };

  return (
    <>
      <form
        action=""
        className="w-full flex flex-col p-2 gap-y-4  "
        onSubmit={handleSubmit(onSubmit)}
      >
        <StepIndicator
          currentStep={currentStep}
          totalSteps={totalSteps}
          onStepClick={handleStepClick}
          completedSteps={completedSteps}
          invalidSteps={invalidSteps}
        />

        {renderStepContent(currentStep)}

        {currentStep === totalSteps && (
          <div className="flex justify-between mt-12">
            <SendButton isLoading={isLoading || mediaUploading.thumbnail || mediaUploading.gallery} />
            <NavigationButton direction="prev" onClick={prevStep} />
          </div>
        )}
      </form>

    </>
  );
};

export default StepAddProduct;
