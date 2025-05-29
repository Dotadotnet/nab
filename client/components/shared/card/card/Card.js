import React from "react";
import Image from "next/image";
import Link from "next/link";
import Discount from "@/components/icons/Discount";
import SoldOut from "@/components/icons/SoldOut";
import Arrival from "@/components/icons/Arrival";
import Favorite from "./Favorite";
import { useLocale, useTranslations } from "next-intl";
import CardButton from "./CardButton";

const Card = ({ index, product, ...rest }) => {
  const locale = useLocale();
  const t = useTranslations("product");

  const { title, summary, slug } =
    product?.translations?.find((tr) => tr.translation?.language === locale)
      ?.translation?.fields || {};

  return (
    <div className="relative group mb-8 bg-white dark:bg-darkCard rounded-2xl shadow-lg cursor-pointer">
      <div className="p-6">
        <Favorite product={product} />
        <Link
          href={`/${locale}/product/${product?.productId}/${slug}`}
          aria-label={t("viewDetails")}
        >
          <div className="absolute top-4 left-5 z-10 flex gap-2 items-center">
            {product?.campaign?.state === "discount" && (
              <Discount className="w-8 h-8 text-red-500" />
            )}
            {product?.campaign?.state === "sold-out" && (
              <SoldOut className="w-5 h-5 text-gray-500" />
            )}
            {product?.campaign?.state === "new-arrival" && (
              <Arrival className="w-5 h-5 text-green-500" />
            )}
          </div>

          <div className="mt-4 flex justify-center">
            <div className="rounded-full relative shadow-custom flex items-center  justify-center">
              <Image
                src={product?.thumbnail?.url}
                alt={title}
                width={300}
                height={300}
                loading="lazy"
                className="w-full h-full  object-contain"
              />
            </div>
          </div>

          <div className="mt-6 text-right">
            <h3 className="text-3xl font-nozha truncate w-full">{title}</h3>
            <p className="text-base text-gray-500 truncate w-full">{summary}</p>
          </div>

          <div className="bottom-4 right-4 flex w-full items-center justify-between">
            <CardButton />

            <div className="text-left">
              {product?.variations?.[0]?.price &&
              product?.discountAmount > 0 ? (
                <>
                  <p className="text-sm text-red-500 line-through">
                    {new Intl.NumberFormat(locale).format(
                      product?.variations?.[0]?.price
                    )}{" "}
                    {t("rials")}
                  </p>
                  <p className="text-lg text-green-500">
                    {new Intl.NumberFormat(locale).format(
                      product?.variations?.[0]?.price *
                        (1 - product?.discountAmount / 100)
                    )}{" "}
                    {t("rials")}
                  </p>
                </>
              ) : (
                <p className="text-lg text-blue-500">
                  {product?.variations?.[0]?.price
                    ? new Intl.NumberFormat(locale).format(
                        product?.variations?.[0]?.price
                      ) +
                      " " +
                      t("rials")
                    : t("notAvailable")}
                </p>
              )}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
