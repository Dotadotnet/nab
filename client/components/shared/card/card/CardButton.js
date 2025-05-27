"use client"
import { ArrowRight } from "@/components/icons/ArrowRight";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import Spinner from "../../Spinner";

function CardButton() {
  const t = useTranslations("product");
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="w-12 h-12 bg-white cursor-pointer dark:bg-black rounded-full shadow-lg flex items-center justify-center dark:text-gray-100"
        aria-label={t("viewDetails")}
      >
        {loading ? (
          <Spinner className="animate-spin w-5 h-5 text-blue-500" />
        ) : (
          <ArrowRight className="transition-transform duration-300 transform group-hover:translate-x-1 group-focus:translate-x-1" />
        )}
      </button>
    </div>
  );
}

export default CardButton;
