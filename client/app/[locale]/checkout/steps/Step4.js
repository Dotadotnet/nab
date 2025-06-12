import Inform from "@/components/icons/Inform";
import Trash from "@/components/icons/Trash";
import Image from "next/image";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useTranslations, useLocale } from "next-intl";
import NavigationButton from "@/components/shared/button/NavigationButton";

function Step4({  phone, setPhone,register }) {
  const locale = useLocale();
  const t = useTranslations("payment");
    const [selectedGateway, setSelectedGateway] = useState("mellat");

  const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{4})(\d{3})(\d{4})$/);
    return match ? `${match[1]}-${match[2]}-${match[3]}` : cleaned;
  };

  const handleChange = (e) => {
    setPhone(formatPhoneNumber(e.target.value));
  };
  return (
    <div className=" !space-y-3 rounded-lg bg-white !px-2 !py-4 sm:!px-6">
      <div className="w-full h-full flex flex-col !gap-y-2">
        <label
          htmlFor="fullName"
          className="flex w-full flex-col gap-y-2 p-2 overflow-y-auto"
        >
          <span className="text-sm">* {t("fullName")}</span>

          <input
            type="text"
            id="fullName"
            name="fullName"
            {...register("fullName", { required: true })}
            required
            className="form-control block w-full h-12 !px-4  text-gray-700 bg-white dark:text-gray-100 dark:bg-slate-800 border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700  dark:focus:text-gray-100 focus:bg-white focus:border-green-600 focus:outline-none text-left "
            placeholder={t("fullName")}
            inputMode="tel"
          />
        </label>
        <label
          htmlFor="phone"
          className="flex w-full flex-col gap-y-2 p-2 overflow-y-auto"
        >
          <span className="text-sm">* {t("mobile")}</span>

          <input
            type="text"
            id="phone"
            name="phone"
            {...register("phone", { required: true })}
            required
            className="form-control block w-full h-12 !px-4  text-gray-700 bg-white dark:text-gray-100 dark:bg-slate-800 border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700  dark:focus:text-gray-100 focus:bg-white focus:border-green-600 focus:outline-none !text-left "
            placeholder={t("mobile")}
            inputMode="tel"
            dir="ltr"
            value={phone}
            onChange={handleChange}
          />
        </label>
        <label
          htmlFor="selectGateway"
          className="flex w-full flex-col items-center gap-y-2 p-2 overflow-y-auto"
        >
          <span className="text-sm w-full">* {t("selectGateway")}</span>
          <div
              className={`cursor-pointer  p-2 transition-all group inline-flex items-center border border-green-300 dark:border-blue-600 !px-4 !py-2 rounded-md text-green-500 dark:text-blue-500 bg-green-50 dark:bg-gray-900`}
            >
              <Image
                src="/image/behpardakht.jpeg"
                alt="درگاه بانک ملت "
                width={100}
                height={40}
              />
            </div>
        </label>
      </div>
      
    </div>
  );
}

export default Step4;
