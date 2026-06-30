import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import ControlPanel from "../ControlPanel";
import StepIndicator from "../auth/signup/steps/StepIndicator";
import { useUpdateAdminMutation } from "@/services/admin/adminApi";
import ProfileImageSelector from "@/components/shared/gallery/ProfileImageSelector";
import SkeletonImage from "@/components/shared/skeleton/SkeletonImage";
import NavigationButton from "@/components/shared/button/NavigationButton";
import SendButton from "@/components/shared/button/SendButton";

const initialProfile = {
  name: "",
  email: "",
  phone: "",
  province: "",
  city: "",
  address: "",
  plateNumber: "",
  postalCode: "",
  nationalCode: "",
  identityNumber: "",
  bio: ""
};

const roleLabels = {
  superAdmin: "مدیر کل",
  admin: "مدیر",
  operator: "اپراتور",
  buyer: "کاربر"
};

const stepTitles = {
  1: "سطح اول: اطلاعات اولیه",
  2: "سطح دوم: آدرس و هویت",
  3: "سطح سوم: بیوگرافی"
};

function Profile() {
  const admin = useSelector((state) => state.auth.admin);
  const [profile, setProfile] = useState(initialProfile);
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState({});
  const [invalidSteps, setInvalidSteps] = useState({});
  const [updateAdmin, { isLoading, data, error }] = useUpdateAdminMutation();

  const totalSteps = 3;
  const shownAvatar =
    avatarPreview || admin?.avatar?.url || "https://placehold.co/300x300.png";

  useEffect(() => {
    setProfile({
      name: admin?.name || "",
      email: admin?.email || "",
      phone: admin?.phone || "",
      province: admin?.province || "",
      city: admin?.city || "",
      address: admin?.address === "N/A" ? "" : admin?.address || "",
      plateNumber: admin?.plateNumber ? String(admin.plateNumber) : "",
      postalCode: admin?.postalCode ? String(admin.postalCode) : "",
      nationalCode: admin?.nationalCode || "",
      identityNumber: admin?.identityNumber || "",
      bio: admin?.bio || ""
    });
    setAvatarPreview("");
  }, [admin]);

  useEffect(() => {
    if (isLoading) {
      toast.loading("در حال ذخیره تغییرات پروفایل...", { id: "update-profile" });
    }

    if (data) {
      toast.success(data?.description || "پروفایل با موفقیت به روز شد", {
        id: "update-profile"
      });
      setAvatar(null);
      setAvatarPreview("");
      setCompletedSteps({ 1: true, 2: true, 3: true });
    }

    if (error?.data) {
      toast.error(error?.data?.description || "ذخیره پروفایل ناموفق بود", {
        id: "update-profile"
      });
    }
  }, [isLoading, data, error]);

  const profileLevel = useMemo(() => {
    if (profile.bio?.trim()) return "سطح سوم";
    if (
      profile.province?.trim() &&
      profile.city?.trim() &&
      profile.address?.trim() &&
      profile.plateNumber?.trim() &&
      profile.postalCode?.trim() &&
      profile.nationalCode?.trim()
    ) return "سطح دوم";
    if (profile.name?.trim() || profile.email?.trim() || profile.phone?.trim()) {
      return "سطح اول";
    }
    return "شروع نشده";
  }, [profile]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile((current) => ({ ...current, [name]: value }));
  };

  const handleImageSelect = (imageOrUrl) => {
    if (imageOrUrl instanceof File) {
      setAvatar(imageOrUrl);
      setAvatarPreview(URL.createObjectURL(imageOrUrl));
      return;
    }

    setAvatar(null);
    setAvatarPreview(imageOrUrl);
  };

  const getStepErrors = (step = currentStep) => {
    const errors = {};

    if (step === 1) {
      if (!profile.name.trim()) errors.name = "نام الزامی است";
      if (!profile.email.trim()) {
        errors.email = "ایمیل الزامی است";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email)) {
        errors.email = "فرمت ایمیل صحیح نیست";
      }
      if (!/^09\d{9}$/.test(profile.phone)) {
        errors.phone = "شماره موبایل باید 11 رقم و با 09 شروع شود";
      }
    }

    if (step === 2) {
      if (!profile.province.trim()) errors.province = "استان الزامی است";
      if (!profile.city.trim()) errors.city = "شهر الزامی است";
      if (!profile.address.trim()) errors.address = "آدرس الزامی است";
      if (!profile.plateNumber.trim()) {
        errors.plateNumber = "پلاک الزامی است";
      } else if (!/^\d+$/.test(profile.plateNumber)) {
        errors.plateNumber = "پلاک باید عددی باشد";
      }
      if (!/^\d{10}$/.test(profile.postalCode)) {
        errors.postalCode = "کد پستی باید 10 رقم باشد";
      }
      if (!/^\d{10}$/.test(profile.nationalCode)) {
        errors.nationalCode = "کد ملی باید 10 رقم باشد";
      }
    }

    if (step === 3 && profile.bio.trim().length > 500) {
      errors.bio = "بیوگرافی نباید بیشتر از 500 کاراکتر باشد";
    }

    return errors;
  };

  const stepErrors = getStepErrors(currentStep);

  const markStep = (step, isValid) => {
    setCompletedSteps((current) => ({ ...current, [step]: isValid }));
    setInvalidSteps((current) => ({ ...current, [step]: !isValid }));
  };

  const nextStep = () => {
    const errors = getStepErrors(currentStep);
    const isValid = Object.keys(errors).length === 0;
    markStep(currentStep, isValid);

    if (!isValid) {
      toast.error("لطفا اطلاعات این مرحله را کامل کنید");
      return;
    }

    setCurrentStep((step) => Math.min(step + 1, totalSteps));
  };

  const prevStep = () => {
    setCurrentStep((step) => Math.max(step - 1, 1));
  };

  const handleStepClick = (step) => {
    if (step <= currentStep) {
      setCurrentStep(step);
      return;
    }

    for (let index = 1; index < step; index += 1) {
      const errors = getStepErrors(index);
      if (Object.keys(errors).length > 0) {
        markStep(index, false);
        toast.error(`لطفا ابتدا ${stepTitles[index]} را تکمیل کنید`);
        setCurrentStep(index);
        return;
      }
      markStep(index, true);
    }

    setCurrentStep(step);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const finalInvalidStep = [1, 2, 3].find(
      (step) => Object.keys(getStepErrors(step)).length > 0
    );

    if (finalInvalidStep) {
      markStep(finalInvalidStep, false);
      setCurrentStep(finalInvalidStep);
      toast.error(`لطفا ${stepTitles[finalInvalidStep]} را کامل کنید`);
      return;
    }

    const formData = new FormData();
    formData.append("name", profile.name.trim());
    formData.append("email", profile.email.trim());
    formData.append("phone", profile.phone.trim());
    formData.append("province", profile.province.trim());
    formData.append("city", profile.city.trim());
    formData.append("address", profile.address.trim());
    formData.append("plateNumber", profile.plateNumber.trim());
    formData.append("postalCode", profile.postalCode.trim());
    formData.append("nationalCode", profile.nationalCode.trim());
    formData.append("identityNumber", profile.identityNumber.trim());
    formData.append("bio", profile.bio.trim());

    if (avatar) {
      formData.append("avatar", avatar);
    } else if (avatarPreview && avatarPreview !== admin?.avatar?.url) {
      formData.append("avatarUrl", avatarPreview);
    }

    updateAdmin(formData);
  };

  return (
    <ControlPanel>
      <section className="min-h-[calc(100vh-9rem)] p-4">
        <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">
          <aside className="h-fit rounded-primary bg-white p-6 shadow-lg dark:bg-gray-900">
            <div className="flex flex-col items-center text-center">
              <div className="profile-container shine-effect rounded-full flex justify-center mb-4">
                {shownAvatar ? (
                  <img
                    src={shownAvatar}
                    alt="avatar"
                    className="h-[112px] w-[112px] profile-pic rounded-full"
                  />
                ) : (
                  <SkeletonImage />
                )}
              </div>
              <h2 className="mt-5 text-lg font-bold text-gray-900 dark:text-gray-100">
                {profile.name || "کاربر"}
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {roleLabels[admin?.role] || "کاربر"}
              </p>
            </div>

            <div className="mt-6 space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <div className="rounded border p-3 dark:border-gray-700">
                <span className="block text-xs text-gray-400">سطح فعلی</span>
                <span>{profileLevel}</span>
              </div>
              <div className="rounded border p-3 dark:border-gray-700">
                <span className="block text-xs text-gray-400">موبایل</span>
                <span dir="ltr">{profile.phone || "-"}</span>
              </div>
              <div className="rounded border p-3 dark:border-gray-700">
                <span className="block text-xs text-gray-400">ایمیل</span>
                <span className="break-all" dir="ltr">{profile.email || "-"}</span>
              </div>
              <div className="rounded border p-3 dark:border-gray-700">
                <span className="block text-xs text-gray-400">آدرس</span>
                <span>{[profile.province, profile.city, profile.address].filter(Boolean).join("، ") || "-"}</span>
              </div>
            </div>
          </aside>

          <div className="flex w-full flex-col gap-y-4 rounded-primary bg-white p-6 shadow-lg dark:bg-gray-900 md:p-8">
            <div className="flex flex-row items-center gap-x-2">
              <hr className="w-full dark:border-gray-600" />
              <img
                src="/logo.png"
                alt="logo"
                width={141}
                height={40}
                className="max-w-full"
              />
              <hr className="w-full dark:border-gray-600" />
            </div>

            <div className="flex flex-col gap-1 text-center">
              <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                تکمیل پروفایل من
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                اطلاعات مرحله‌ای را کامل کنید
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <StepIndicator
                currentStep={currentStep}
                totalSteps={totalSteps}
                onStepClick={handleStepClick}
                completedSteps={completedSteps}
                invalidSteps={invalidSteps}
              />

              <div className="mb-5 grid grid-cols-3 gap-2 text-center text-xs text-gray-500 dark:text-gray-400">
                {Object.entries(stepTitles).map(([step, title]) => (
                  <button
                    key={step}
                    type="button"
                    onClick={() => handleStepClick(Number(step))}
                    className={`rounded px-2 py-1 transition ${
                      currentStep === Number(step)
                        ? "bg-green-500 text-white dark:bg-blue-500"
                        : "bg-gray-100 dark:bg-gray-800"
                    }`}
                  >
                    {title}
                  </button>
                ))}
              </div>

              {currentStep === 1 && (
                <InitialStep
                  profile={profile}
                  avatarPreview={shownAvatar}
                  handleImageSelect={handleImageSelect}
                  handleChange={handleChange}
                  errors={stepErrors}
                  nextStep={nextStep}
                />
              )}

              {currentStep === 2 && (
                <IdentityStep
                  profile={profile}
                  handleChange={handleChange}
                  errors={stepErrors}
                  nextStep={nextStep}
                  prevStep={prevStep}
                />
              )}

              {currentStep === 3 && (
                <BioStep
                  profile={profile}
                  handleChange={handleChange}
                  errors={stepErrors}
                  prevStep={prevStep}
                  isLoading={isLoading}
                />
              )}
            </form>
          </div>
        </div>
      </section>
    </ControlPanel>
  );
}

function InitialStep({
  profile,
  avatarPreview,
  handleImageSelect,
  handleChange,
  errors,
  nextStep
}) {
  return (
    <>
      <div className="mb-5 flex flex-col items-center rounded border p-4 dark:border-gray-700">
        <div className="profile-container shine-effect rounded-full flex justify-center mb-4">
          {avatarPreview ? (
            <img
              src={avatarPreview}
              alt="avatar"
              className="h-[100px] w-[100px] profile-pic rounded-full"
            />
          ) : (
            <SkeletonImage />
          )}
        </div>
        <ProfileImageSelector onImageSelect={handleImageSelect} />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Field
          label="نام خود را وارد کنید"
          name="name"
          value={profile.name}
          onChange={handleChange}
          placeholder="نام"
          error={errors.name}
        />
        <Field
          label="شماره تلفن خود را وارد کنید"
          name="phone"
          type="tel"
          value={profile.phone}
          onChange={handleChange}
          placeholder="09123456789"
          error={errors.phone}
        />
        <Field
          className="md:col-span-2"
          label="ایمیل خود را وارد کنید"
          name="email"
          type="email"
          value={profile.email}
          onChange={handleChange}
          placeholder="john@example.com"
          error={errors.email}
        />
      </div>

      <div className="flex justify-start mt-12">
        <NavigationButton direction="next" onClick={nextStep} />
      </div>
    </>
  );
}

function IdentityStep({ profile, handleChange, errors, nextStep, prevStep }) {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Field
          label="استان"
          name="province"
          value={profile.province}
          onChange={handleChange}
          placeholder="مثلا تهران"
          error={errors.province}
        />
        <Field
          label="شهر"
          name="city"
          value={profile.city}
          onChange={handleChange}
          placeholder="مثلا تهران"
          error={errors.city}
        />
        <label htmlFor="address" className="flex flex-col gap-y-1 md:col-span-2">
          <span className="text-sm">آدرس خود را وارد کنید</span>
          <textarea
            id="address"
            name="address"
            rows="4"
            value={profile.address}
            onChange={handleChange}
            placeholder="آدرس کامل"
            className="rounded border p-2"
          />
          {errors.address && (
            <span className="text-red-500 text-sm">{errors.address}</span>
          )}
        </label>

        <Field
          label="پلاک"
          name="plateNumber"
          type="number"
          value={profile.plateNumber}
          onChange={handleChange}
          placeholder="12"
          error={errors.plateNumber}
        />
        <Field
          label="کد پستی"
          name="postalCode"
          inputMode="numeric"
          value={profile.postalCode}
          onChange={handleChange}
          placeholder="1234567890"
          maxLength={10}
          error={errors.postalCode}
        />
        <Field
          label="کد ملی"
          name="nationalCode"
          value={profile.nationalCode}
          onChange={handleChange}
          placeholder="0012345678"
          maxLength={10}
          error={errors.nationalCode}
        />
        <Field
          label="شماره شناسنامه"
          name="identityNumber"
          value={profile.identityNumber}
          onChange={handleChange}
          placeholder="اختیاری"
          error={errors.identityNumber}
        />
      </div>

      <div className="flex justify-between mt-12">
        <NavigationButton direction="next" onClick={nextStep} />
        <NavigationButton direction="prev" onClick={prevStep} />
      </div>
    </>
  );
}

function BioStep({ profile, handleChange, errors, prevStep, isLoading }) {
  return (
    <>
      <label htmlFor="bio" className="flex flex-col gap-y-1">
        <span className="text-sm">بیوگرافی خود را وارد کنید</span>
        <textarea
          id="bio"
          name="bio"
          rows="7"
          value={profile.bio}
          onChange={handleChange}
          placeholder="درباره خود، مسئولیت ها یا توضیحات تکمیلی بنویسید..."
          maxLength={500}
          className="rounded border p-2"
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>{errors.bio || "حداکثر 500 کاراکتر"}</span>
          <span>{profile.bio.length}/500</span>
        </div>
      </label>

      <div className="flex justify-between mt-12">
        <SendButton isLoading={isLoading} />
        <NavigationButton direction="prev" onClick={prevStep} />
      </div>
    </>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  error,
  className = "",
  maxLength,
  ...rest
}) {
  return (
    <label htmlFor={name} className={`flex flex-col gap-y-1 ${className}`}>
      <span className="text-sm">{label}</span>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        className="p-2 rounded border"
        {...rest}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </label>
  );
}

export default Profile;
