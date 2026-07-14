"use client";

import Inform from "@/components/icons/Inform";
import Trash from "@/components/icons/Trash";
import Modal from "@/components/shared/Modal";
import Dashboard from "@/components/shared/layouts/Dashboard";
import {
  useDeleteUserMutation,
  useUpdateUserMutation
} from "@/services/user/userApi";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

const initialProfile = {
  name: "",
  email: "",
  phone: ""
};

const Page = () => {
  const userInfo = useSelector((state) => state.auth.user);
  const [profile, setProfile] = useState(initialProfile);
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [isAvatarOpen, setIsAvatarOpen] = useState(false);
  const [updateUserInformation, { isLoading, data, error }] =
    useUpdateUserMutation();

  const avatarSrc =
    avatarPreview || userInfo?.avatar?.url || "https://placehold.co/300x300.png";

  const stats = useMemo(
    () => [
      { label: "سبد خرید", value: userInfo?.cart?.length || 0 },
      { label: "علاقه مندی ها", value: userInfo?.favorites?.length || 0 },
      { label: "خریدها", value: userInfo?.purchases?.length || 0 },
      { label: "نظرات", value: userInfo?.reviews?.length || 0 }
    ],
    [userInfo]
  );

  useEffect(() => {
    setProfile({
      name: userInfo?.name || "",
      email: userInfo?.email || "",
      phone: userInfo?.phone || ""
    });
  }, [userInfo]);

  useEffect(() => {
    if (isLoading) {
      toast.loading("در حال به روزرسانی پروفایل...", {
        id: "updateUserInformation"
      });
    }

    if (data) {
      toast.success(data?.description || "پروفایل با موفقیت به روز شد", {
        id: "updateUserInformation"
      });
      setAvatar(null);
      setAvatarPreview(null);
    }

    if (error?.data) {
      toast.error(error?.data?.description || "به روزرسانی پروفایل ناموفق بود", {
        id: "updateUserInformation"
      });
    }
  }, [isLoading, data, error]);

  const handleAvatarPreview = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setAvatar(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatarPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile((current) => ({ ...current, [name]: value }));
  };

  function handleEditProfile(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", profile.name.trim());
    formData.append("email", profile.email.trim());
    formData.append("phone", profile.phone.trim());

    if (avatar) {
      formData.append("avatar", avatar);
    }

    updateUserInformation(formData);
  }

  return (
    <Dashboard>
      <section className="w-full min-h-full bg-slate-50 dark:bg-slate-900 p-3 md:p-5">
        <div className="grid grid-cols-12 gap-4">
          <aside className="col-span-12 lg:col-span-4 flex flex-col gap-4">
            <section className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
              <div className="flex flex-col items-center gap-4">
                <button
                  type="button"
                  className="relative h-32 w-32 overflow-hidden rounded-full border border-slate-200 bg-slate-100 dark:border-slate-700"
                  onClick={() => setIsAvatarOpen(true)}
                  aria-label="Preview profile image"
                >
                  <Image
                    src={avatarSrc}
                    alt={userInfo?.avatar?.public_id || "تصویر پروفایل"}
                    fill
                    sizes="128px"
                    className="cursor-zoom-in object-cover"
                  />
                </button>

                <div className="flex flex-col items-center gap-1 text-center">
                  <h1 className="text-lg font-bold text-slate-900 dark:text-white">
                    {profile.name || "کاربر ناب"}
                  </h1>
                  <p className="text-xs text-slate-500 dark:text-slate-300">
                    {profile.phone || profile.email || "اطلاعات تماس ثبت نشده"}
                  </p>
                </div>

                <label
                  htmlFor="avatar"
                  className="relative flex h-10 w-full cursor-pointer items-center justify-center rounded border border-primary bg-primary/10 text-sm text-primary transition hover:bg-primary/15"
                >
                  تغییر تصویر پروفایل
                  <input
                    type="file"
                    name="avatar"
                    id="avatar"
                    className="absolute inset-0 cursor-pointer opacity-0"
                    accept="image/jpg, image/jpeg, image/png"
                    onChange={handleAvatarPreview}
                  />
                </label>
              </div>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                  وضعیت حساب
                </h2>
                <span className="rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs text-green-700">
                  {userInfo?.userLevel === "completed"
                    ? "تکمیل شده"
                    : userInfo?.userLevel === "verified"
                      ? "تایید شده"
                      : "پایه"}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded border border-slate-100 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-900"
                  >
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {item.label}
                    </p>
                    <p className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </aside>

          <div className="col-span-12 lg:col-span-8 flex flex-col gap-4">
            <form
              className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800"
              onSubmit={handleEditProfile}
            >
              <div className="mb-5">
                <h2 className="text-base font-bold text-slate-900 dark:text-white">
                  اطلاعات شخصی
                </h2>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  اطلاعات اصلی حساب کاربری خود را از این قسمت مدیریت کنید.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <label htmlFor="name" className="flex flex-col gap-1">
                  <span className="text-sm text-slate-700 dark:text-slate-200">
                    نام و نام خانوادگی
                  </span>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={profile.name}
                    onChange={handleChange}
                    placeholder="مثلا: مرجان قره گوزلو"
                    className="h-11 rounded border-slate-200 text-sm dark:border-slate-700"
                  />
                </label>

                <label htmlFor="phone" className="flex flex-col gap-1">
                  <span className="text-sm text-slate-700 dark:text-slate-200">
                    شماره موبایل
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={profile.phone}
                    onChange={handleChange}
                    placeholder="09123456789"
                    className="h-11 rounded border-slate-200 text-sm dark:border-slate-700"
                  />
                </label>

                <label htmlFor="email" className="flex flex-col gap-1 md:col-span-2">
                  <span className="text-sm text-slate-700 dark:text-slate-200">
                    ایمیل
                  </span>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={profile.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="h-11 rounded border-slate-200 text-sm dark:border-slate-700"
                  />
                </label>
              </div>

              <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                <DeleteUser />

                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex h-11 min-w-40 items-center justify-center rounded bg-black px-5 text-sm text-white transition hover:bg-black/90 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-primary dark:hover:bg-primary/90"
                >
                  {isLoading ? "در حال ذخیره..." : "ذخیره تغییرات"}
                </button>
              </div>
            </form>

            <section className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                نکته امنیتی
              </h2>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                برای حفظ امنیت حساب، شماره موبایل و ایمیل خود را دقیق وارد کنید.
                این اطلاعات برای پیگیری سفارش ها و بازیابی دسترسی استفاده می شود.
              </p>
            </section>
          </div>
        </div>
      </section>

      {isAvatarOpen && (
        <section
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsAvatarOpen(false)}
        >
          <button
            type="button"
            aria-label="Close preview"
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-slate-900 shadow"
            onClick={() => setIsAvatarOpen(false)}
          >
            x
          </button>
          <img
            src={avatarSrc}
            alt={userInfo?.avatar?.public_id || "avatar"}
            className="max-h-[92vh] max-w-[96vw] rounded object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </section>
      )}
    </Dashboard>
  );
};

function DeleteUser() {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const [deleteUser, { isLoading, data, error }] = useDeleteUserMutation();

  useEffect(() => {
    if (isLoading) {
      toast.loading("در حال حذف حساب کاربری...", { id: "deleteUser" });
    }

    if (data) {
      toast.success(data?.description || "حساب کاربری حذف شد", {
        id: "deleteUser"
      });
      localStorage.removeItem("accessToken");
      window.open("/", "_self");
    }

    if (error?.data) {
      toast.error(error?.data?.description || "حذف حساب کاربری ناموفق بود", {
        id: "deleteUser"
      });
    }
  }, [isLoading, data, error]);

  return (
    <>
      <button
        type="button"
        className="flex h-11 items-center justify-center gap-2 rounded border border-red-200 bg-red-50 px-4 text-sm text-red-700 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60"
        onClick={() => setIsOpen(true)}
        disabled={isLoading}
      >
        <Trash /> حذف حساب کاربری
      </button>

      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          className="w-[calc(100%-2rem)] max-w-md p-4"
        >
          <article className="flex flex-col gap-4">
            <p className="rounded bg-yellow-50 px-3 py-2 text-center text-xs text-yellow-800">
              حساب کاربری شما برای همیشه حذف خواهد شد.
            </p>

            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-bold text-slate-900">
                از حذف حساب مطمئن هستید؟
              </h2>
              <p className="text-sm leading-7 text-slate-600">
                با حذف حساب، دسترسی به موارد زیر را از دست خواهید داد:
              </p>
              <div className="flex flex-col gap-2 rounded border border-slate-100 bg-slate-50 p-3">
                <span className="flex items-center gap-2 text-xs text-slate-700">
                  <Inform /> {user?.cart?.length || 0} محصول در سبد خرید
                </span>
                <span className="flex items-center gap-2 text-xs text-slate-700">
                  <Inform /> {user?.favorites?.length || 0} محصول در علاقه مندی ها
                </span>
                <span className="flex items-center gap-2 text-xs text-slate-700">
                  <Inform /> {user?.purchases?.length || 0} سابقه خرید
                </span>
                <span className="flex items-center gap-2 text-xs text-slate-700">
                  <Inform /> {user?.reviews?.length || 0} نظر ثبت شده
                </span>
              </div>
            </div>

            <div className="flex flex-col-reverse gap-2 sm:flex-row">
              <button
                type="button"
                className="h-10 flex-1 rounded border border-slate-200 bg-white px-3 text-sm text-slate-700"
                onClick={() => setIsOpen(false)}
              >
                انصراف
              </button>
              <button
                type="button"
                className="flex h-10 flex-1 items-center justify-center gap-2 rounded bg-red-600 px-3 text-sm text-white disabled:cursor-not-allowed disabled:opacity-60"
                onClick={() => deleteUser(user?._id)}
                disabled={isLoading || !user?._id}
              >
                <Trash /> بله، حذف شود
              </button>
            </div>
          </article>
        </Modal>
      )}
    </>
  );
}

export default Page;
