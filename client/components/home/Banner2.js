import React from "react";
import Container from "../shared/Container";
import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

const Banner2 = async ({ params }) => {
  const { locale } = await params;

  const t = await getTranslations("banner2");

  return (
    <section className="mt-20">
      <Container>
        <div
          className="bg-yellow-50   dark:bg-red-500  dark:text-gray-100 h-full w-full rounded-primary relative flex flex-col gap-y-8 lg:p-24 px-8 pt-8"
          style={{ backgroundImage: "url(/assets/home/banner/dots.svg)" }}
        >
          <Image
            src="/assets/home/banner/kid.webp"
            alt="model"
            height={872}
            width={600}
            sizes="(max-width: 768px) 100vw, 600px"
            className="lg:absolute bottom-0 left-0 order-2"
          />
          <article className="flex flex-col justify-start items-end order-1">
            <div className="flex flex-col gap-y-4 max-w-lg lg:ml-auto lg:mr-0 mr-auto">
              <h2 className="md:text-6xl text-4xl">{t("title")}</h2>
              <h3 className="md:text-6xl dark:text-gray-100 font-nozha text-gray-900 text-4xl">
                {t("subTitle")}
              </h3>
              <p className="flex flex-row dark:text-gray-100 gap-x-0.5 items-center text-lg text-slate-500">
                {t("description")}
              </p>
              <Link
                href={`/${locale}/products`}
                className="px-8 py-4 border border-black rounded-secondary bg-black hover:bg-black/90 text-white transition-colors drop-shadow w-fit mt-4"
              >
                {t("button")}
              </Link>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default Banner2;
