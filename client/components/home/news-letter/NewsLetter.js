"use client";

import Button from "@/components/shared/button/Button";
import Container from "@/components/shared/container/Container";
import LoadImage from "@/components/shared/LoadImage";
import React, { useState } from "react";
import { BiCake } from "react-icons/bi";
import { useTranslations } from "next-intl";

const NewsLetter = () => {
  const [showAdditionalContent, setShowAdditionalContent] = useState(false);
  const [visible, setVisible] = useState(false);
  const t = useTranslations("newsletter");

  const toggleAdditionalContent = () => {
    setShowAdditionalContent(!showAdditionalContent);
  };

  return (
    <section className="h-full py-12">
      <Container>
        <section className="w-full h-full lg:gap-x-4 gap-y-12 grid grid-cols-12">
          <div className="lg:col-span-5 col-span-12 rounded relative">
            <LoadImage
              src="/assets/NewsLetter.webp"
              alt="newsletter"
              height={302}
              width={440}
              className="rounded h-[302px] w-full object-cover border border-primary"
            />
            <div>
              <span
                className="cursor-pointer absolute top-1/3 left-1/3 h-4 w-4 bg-secondary border-2 border-primary rounded-secondary"
                onClick={toggleAdditionalContent}
              />
              {showAdditionalContent && (
                <div className="bg-white flex dark:bg-gray-800 flex-col gap-y-3 border p-4 rounded absolute top-1/3 left-1/4 mt-5">
                  <article className="flex flex-row gap-x-2">
                    <LoadImage
              src="/assets/NewsLetter.webp"
                      alt="thumbnail"
                      height={35}
                      width={35}
                      className="rounded-[5px] object-cover h-[35px] w-[35px] border border-primary"
                    />
                    <div className="flex flex-col gap-y-1">
                      <h2 className="text-base line-clamp-1">{t("productTitle")}</h2>
                      <p className="flex flex-row gap-x-0.5 items-center text-xs line-clamp-1">
                        <BiCake className="w-4 h-4 text-primary" /> {t("productType")}
                      </p>
                    </div>
                  </article>
                  <p className="text-xs flex flex-row justify-between items-center whitespace-nowrap">
                    <span className="flex flex-row gap-x-0.5 items-baseline">
                      {t("pricePrefix")} <span className="text-sm text-primary">120</span>
                    </span>
                    <span className="min-w-[1rem]" />
                    <span className="border px-3 py-0.5 rounded-secondary">
                      {t("productDuration")}
                    </span>
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="lg:col-span-7 col-span-12 bg-red-200 dark:bg-red-500 rounded relative p-8">
          
            <article className="flex flex-col gap-y-4 h-full">
              <h2 className="lg:text-4xl md:text-2xl text-xl z-40">
                {t("title")}
              </h2>
              <p className="text-sm">{t("description")}</p>
              <label
                htmlFor="newsletter"
                className="mt-auto flex flex-row gap-x-2 z-40"
              >
                {visible ? (
                  <span className="text-primary drop-shadow">{t("successMessage")}</span>
                ) : (
                  <>
                    <input
                      type="email"
                      name="newsletter"
                      id="newsletter"
                      disabled={visible}
                      placeholder={t("placeholder")}
                      className="w-full rounded border-1 border-primary !text-white 
                      dark:text-white dark:!border-red-500
                      !bg-red-600
                      text-sm z-50 placeholder-white"
                    />
                    <Button
                      className="px-4 py-1 text-xs"
                      onClick={() => setVisible(true)}
                    >
                      {t("button")}
                    </Button>
                  </>
                )}
              </label>
            </article>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default NewsLetter;
