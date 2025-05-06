
"use client"
import React from "react";
import Container from "../shared/Container";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const Banner2 = ({ className }) => {
  const router = useRouter();
  const h = useTranslations("HomePage");
  const t = useTranslations("Tools");
  return (
    <Container className={className ? className : ""}>
      <div
        className="bg-yellow-100 dark:bg-red-600 h-full w-full dark:text-gray-100 rounded-primary relative flex flex-col gap-y-0  px-8 pt-8 "
        style={{ backgroundImage: "url(/assets/home/banner/dots.svg)" }}
      >
        <Image
          src="/assets/home/banner/kid.webp"
          alt="model"
          height={904}
          width={1024}
          className="lg:absolute w-full md:w-1/2  bottom-0 left-0 order-2"
        />
        <article className="flex flex-col justify-start items-end order-1">
          <div className="flex flex-col  md:gap-y-8 gap-y-4 max-w-lg z-48 lg:ml-auto lg:mr-0 mr-auto">
            <h2 className="md:text-6xl dark:text-gray-100 font-nozha text-gray-900 text-4xl">
              {t("NameWebsite")}
              </h2>
            <h3 className="md:text-6xl dark:text-gray-100 font-nozha text-gray-900 text-4xl">
            {h("Banner2SubTitle")}
             </h3>
            <p className="flex flex-row dark:text-gray-100 gap-x-0.5 items-center text-lg text-slate-500">
            {h("Banner2Caption")}
              
            </p>
            <button className="px-8 py-4 border border-black rounded-secondary bg-black hover:bg-black/90 text-white transition-colors drop-shadow w-fit mt-4"
              onClick={() => router.push("/products")}>
               {h("Banner2Button")}
            </button>
            <br />
          </div>
        </article>
      </div>
    </Container>
  );
};

export default Banner2;
