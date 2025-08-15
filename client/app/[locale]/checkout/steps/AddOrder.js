import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import NavigationButton from "@/components/shared/button/NavigationButton";
import SendButton from "@/components/shared/button/SendButton";
import { useCreatePaymentMutation } from "@/services/payment/paymentApi";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

import StepIndicator from "./StepIndicator";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import { useTranslations, useLocale } from "next-intl";

function AddOrder() {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState({});
  const [invalidSteps, setInvalidSteps] = useState({});
  const [selectedProvince, setSelectedProvince] = useState("westAzerbaijan");
  const [selectedCity, setSelectedCity] = useState(null);
  const [phone, setPhone] = useState("");
  const t = useTranslations("payment");
  const { session, user, loading } = useSelector((state) => state.auth);
  const cartId = session?.cart || user?.cart || [];

  const totalSteps = 4;
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

  const [createPayment, { isLoading, data, error }] =
    useCreatePaymentMutation();
  const onSubmit = async (data) => {
    const body = {
      cartId,
      province: selectedProvince,
      city: selectedCity,
      phone,
      fullName: data.fullName,
      gateway: "mellat"
    };


    await createPayment(body);
  };

  useEffect(() => {
    if (isLoading)
      toast.loading("در حال انتقال به درگاه پرداخت...", {
        id: "createPayment"
      });
    if (data) {
      toast.success(data?.description, { id: "createPayment" });
      window.open(data?.url, "_blank");
    }
    if (error?.data)
      toast.error(error?.data?.description, { id: "createPayment" });
  }, [isLoading, data, error]);

  const nextStep = async () => {
    let valid = false;
    switch (currentStep) {
      case 1:
        if (!cartId || cartId.length === 0) {
          toast.error("سبد خرید شما خالی است");
          setInvalidSteps((prev) => ({ ...prev, [currentStep]: true }));
          return;
        }
        valid = true;
        break;
      case 2:
        if (!selectedProvince) {
          toast.error("لطفاً استان را انتخاب کنید");
          setInvalidSteps((prev) => ({ ...prev, [currentStep]: true }));
          return;
        }
        valid = true;
        break;
      case 3:
        if (!selectedCity) {
          toast.error("لطفاً شهر را انتخاب کنید");
          setInvalidSteps((prev) => ({ ...prev, [currentStep]: true }));
          return;
        }

      case 4:
        valid = await trigger("phone");
        if (!valid) {
          toast.error("لطفاً شماره تلفن را وارد کنید");
          setInvalidSteps((prev) => ({ ...prev, [currentStep]: true }));
          return;
        }
        valid = await trigger("fullName");
        if (!valid) {
          toast.error("لطفاً نام و نام خانوادگی را وارد کنید");
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
  const handleProvinceSelect = (province) => {
    setSelectedProvince(province);
    setSelectedCity(null);
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city.faName);
  };
  const renderStepContent = (step) => {
    switch (step) {
      case 1:
        return <Step1 loading={loading} nextStep={nextStep} cartId={cartId} />;
      case 2:
        return (
          <Step2
            nextStep={nextStep}
            prevStep={prevStep}
            handleProvinceSelect={handleProvinceSelect}
          />
        );
      case 3:
        return (
          <Step3
            nextStep={nextStep}
            prevStep={prevStep}
            selectedProvince={selectedProvince}
            handleCitySelect={handleCitySelect}
          />
        );

      case 4:
        return <Step4 register={register} phone={phone} setPhone={setPhone} />;
      case 5:
        return <></>;
      case 6:
        return <></>;
      default:
        return null;
    }
  };

  return (
    <>
      <form
        action=""
        className="w-full max-w-xl justify-between  flex flex-col !py-2 min-h-96 relative !gap-y-4  "
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
          <div className="flex justify-between !px-4 !mt-2">
            <SendButton title={t("connetGetway")} isLoading={isLoading} />
            <NavigationButton direction="prev" onClick={prevStep} />
          </div>
        )}
      </form>
    </>
  );
}

export default AddOrder;
