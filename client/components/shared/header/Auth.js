"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import User from "@/components/icons/User";
import { useSelector } from "react-redux";
import Dashboard from "@/components/icons/Dashboard";
import OutsideClick from "../outsideClick/OutsideClick";
import Logout from "@/components/icons/Logout";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Auth = () => {
  const { user } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Tools")
  if (!user) return null;

  return (
    <>
      {user && Object.keys(user).length > 0 ? (
        <button
          className="p-2 rounded-secondary bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Dashboard className="h-6 w-6" />
        </button>
      ) : (
        <div className="flex items-center">
          <Link
            aria-label={t("Login")}
            className="p-2 rounded-secondary flex items-center hover:bg-slate-200 bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-700 transition-colors"
            href="/auth/signup"
          >
            <User className="h-6 w-6" />
          </Link>
        </div>
      )}

      {isOpen && (
        <OutsideClick
          onOutsideClick={() => setIsOpen(false)}
          className="absolute md:top-full bottom-full left-0  md:right-0 w-80 h-fit bg-white dark:bg-slate-900 border border-primary rounded p-2 flex flex-col mb-12 md:mb-0 gap-y-2.5 dark:text-gray-100"
        >
          <div className="flex flex-col gap-y-2">
            <div className="flex flex-row gap-x-2 p-4">
              <Image
                src={user?.avatar?.url || "/default-avatar.png"}
                alt={user?.avatar?.public_id || "User Avatar"}
                height={50}
                width={50}
                className="rounded object-cover h-[50px] w-[50px]"
              />
              <article className="flex flex-col">
                <h2 className="line-clamp-1">
                  {user?.name || t("UsernameNotRegistered")}
                </h2>
                <p className="text-sm whitespace-nowrap overflow-hidden text-ellipsis dark:text-gray-100">
                  {user?.phone || user?.email || t("PhoneNumber")}
                </p>
                <p className="flex flex-row gap-x-2 mt-1.5">
                  {user?.status === "inactive" && (
                    <span className="bg-red-50 border border-red-900 px-2 rounded-secondary text-red-900 text-xs lowercase w-fit">
                      {t("AwaitingApproval")}
                    </span>
                  )}
                </p>
                <p className="mt-2 text-sm">
                  {t("UserLevel")} : {" "}
                  <span className="text-green-500">
                    {user?.userLevel === "basic"
                      ? t("Base")
                      : user?.userLevel === "verified"
                        ? t("Approved")
                        : user?.userLevel === "completed"
                          ? t("Completed")
                          : t("Unspecified")}
                  </span>
                </p>
              </article>
            </div>
            <hr className="border-primary " />
            <div className="flex justify-between">
              <div
                className="w-full flex flex-row items-start gap-x-2 p-2 border border-transparent hover:border-black rounded cursor-pointer"
                onClick={() => {
                  localStorage.removeItem("accessToken");
                  window.open("/", "_self");
                }}
              >
                <span className="bg-sky-500/5 p-1 rounded">
                  <Logout />
                </span>
                <article className="whitespace-nowrap">
                  <h2 className="text-sm">{t("LogOut")}</h2>
                  <p className="text-xs">{t("DeleteLoginInformation")}</p>
                </article>
              </div>
              <div
                className="w-full flex flex-row justify-end items-center gap-x-2 p-2 border border-transparent hover:border-black rounded cursor-pointer"
                onClick={() => window.open("/dashboard", "_self")}
              >
                <article className="whitespace-nowrap">
                  <h2 className="text-sm">{t("UserPanel")}</h2>
                </article>
                <span className="bg-sky-500/5 p-1 rounded rotate-180">
                  <Logout />
                </span>
              </div>
            </div>
          </div>
        </OutsideClick>
      )}
    </>
  );
};

export default Auth;
