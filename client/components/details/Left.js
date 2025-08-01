"use client";
import React, { useState } from "react";
import LoadImage from "../shared/LoadImage";
import Discount from "../icons/Discount";
import SoldOut from "../icons/SoldOut";
import Arrival from "../icons/Arrival";
import DetailCard from "./DetailCard";
import { useTranslations, useLocale } from "next-intl";

const Left = ({ product }) => {
  const [mainImage, setMainImage] = useState(product.gallery[0]?.url);
  const hashTags = [...(product?.category?.tags || [])].filter(
    (tag) => tag !== undefined
  );
  const locale = useLocale();
  function getColumnSpanClass(index, totalThumbnails) {
    if (totalThumbnails === 1) {
      return "col-span-12";
    } else if (totalThumbnails === 2) {
      return "col-span-6";
    } else if (totalThumbnails === 3) {
      return "col-span-4";
    } else if (totalThumbnails === 4) {
      return "col-span-3";
    } else if (totalThumbnails === 5) {
      return "col-span-2";
    } else if (totalThumbnails === 6) {
      return "col-span-2";
    } else {
      return "";
    }
  }
  const h = useTranslations("product");
  return (
    <section className="lg:col-span-6  md:col-span-6 col-span-12 flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-4 relative">
        <LoadImage
          src={mainImage}
          alt="Main product"
          width={480}
          height={200}
          className="rounded w-full h-full object-cover border border-orange-300"
        />
        <div className="grid grid-cols-12 gap-4 justify-center items-center">
          {product?.gallery?.map((thumbnail, index) => (
            <LoadImage
              src={thumbnail?.url}
              key={index}
              alt={thumbnail?.public_id}
              className={
                "rounded object-cover max-w-full cursor-pointer w-full h-full" +
                " " +
                getColumnSpanClass(index, product.gallery.length)
              }
              width={480}
              height={200}
              onClick={() => setMainImage(thumbnail?.url)}
            />
          ))}
        </div>
        <Badge className="absolute top-2 left-2 text-purple-800 bg-purple-100">
          {product?.variations?.length
            ? `${h("in")} ${product.variations.length.toLocaleString(
                locale
              )} ${h("weight")}`
            : h("noVariations")}
        </Badge>
        <div className="absolute top-2 right-2  flex flex-row gap-x-2.5">
          {product?.campaign?.state === "discount" && (
            <Badge className="text-cyan-800 bg-cyan-100 flex flex-row items-center gap-x-1">
              <Discount />{" "}
              {
                product?.campaign?.translations?.find(
                  (tr) => tr.translation?.language === locale
                )?.translation?.fields.title
              }
            </Badge>
          )}
          {product?.campaign?.state === "sold-out" && (
            <Badge className="text-cyan-800 bg-cyan-100 flex flex-row items-center gap-x-1">
              <SoldOut />{" "}
              {
                product?.campaign?.translations?.find(
                  (tr) => tr.translation?.language === locale
                )?.translation?.fields.title
              }
            </Badge>
          )}
          {product?.campaign?.state === "arrival" && (
            <Badge className="text-cyan-800 bg-cyan-100 flex flex-row items-center gap-x-1">
              <Arrival />{" "}
              {
                product?.campaign?.translations?.find(
                  (tr) => tr.translation?.language === locale
                )?.translation?.fields.title
              }
            </Badge>
          )}
          {product?.campaign?.state === "on-sale" && (
            <Badge className="text-blue-800 bg-blue-100 flex flex-row items-center gap-x-1">
              <Arrival />{" "}
              {
                product?.campaign?.translations?.find(
                  (tr) => tr.translation?.language === locale
                )?.translation?.fields.title
              }
            </Badge>
          )}
        </div>
      </div>
      <article className="flex flex-col ">
        <div className="flex flex-col gap-y-2.5 mt-4">
          <DetailCard
            icon={"🛍️"}
            title={` ${h("category")}  ${
              product?.category?.translations?.find(
                (tr) => tr.translation?.language === locale
              )?.translation?.fields.title
            }`}
            content={
              product?.category?.translations?.find(
                (tr) => tr.translation?.language === locale
              )?.translation?.fields.keynotes
            }
          />
          <div className="flex flex-row flex-wrap gap-1 ">
            {hashTags.map((hashTag, index) => (
              <span
                key={index}
                className="!text-xs border border-gray-200 px-2 py-0.5 rounded-sm"
              >{`#${hashTag}`}</span>
            ))}
          </div>
        </div>
       
      </article>
    </section>
  );
};

function Badge({ props, children, className }) {
  return (
    <span
      className={
        "px-3 py-1 rounded text-xs w-fit" + (className ? " " + className : "")
      }
      {...props}
    >
      {children}
    </span>
  );
}

export default Left;
