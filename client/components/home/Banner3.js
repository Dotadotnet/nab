"use client"

import React from "react";
import Container from "../shared/Container";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const Banner3 = ({ className }) => {
  const router = useRouter();
const h = useTranslations("HomePage")
const t = useTranslations("Tools")
  return (
    <Container className={className ? className : ""}>
      <div
        className="bg-gray-50 dark:bg-blue-700 h-full w-full mb-4 rounded-primary relative flex flex-col gap-y-8 lg:p-24 p-8"
        style={{ backgroundImage: "url(/assets/home/banner/dots.svg)" }}
      >
        <Image
          src="/assets/home/banner/halva.png"
          alt="حلوا و نقل"
          height={400}
          width={600}
          className="lg:absolute top-12 right-2 rounded-md order-2"
        /> 
        <article className="flex flex-col justify-start items-end order-1">
          <div className="flex flex-col gap-y-4 max-w-lg z-48 lg:mr-auto lg:mr-0 mr-auto text-right">
            <h3 className="md:text-6xl text-4xl font-bold">{h("Banner3Title")}</h3>
            <p className="flex flex-row gap-x-0.5 items-center text-lg text-slate-500">
              {h("Banner3SubTitle")}
            </p>
            <button
              className="px-8 py-4 border border-black rounded-secondary bg-black hover:bg-black/90 text-white transition-colors drop-shadow w-fit mt-4"
              onClick={() => router.push("/order")}
            >
              {t('OrderNow')}
            </button>
          </div>
        </article>
      </div>
    </Container>
  );
};

export default Banner3;
