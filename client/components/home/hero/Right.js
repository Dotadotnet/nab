"use client";
import React, { useState, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import "./Right.css";
import Spinner from "@/components/shared/Spinner";
import Link from "next/link";

export default function Right({ options = [] }) {
  const h = useTranslations("HomePage");
  const locale = useLocale();

  // بررسی وجود options
  if (!options || options.length === 0) {
    return (
      <div className="col-span-2 md:h-full flex flex-col mt-1">
        <div
          className="w-full bg-primary md:mt-5 h-full rounded-xl relative flex flex-col justify-start gap-y-8"
          style={{
            backgroundImage: "url(/assets/home/banner/dots.svg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            overflow: "hidden",
          }}
        >
          <div className="banner p-4">
            <div className="content">
   
            </div>
            {/* Skeleton Loading */}
            <div className="animate-pulse flex flex-col items-center justify-center">
              <div className="h-96 w-96 bg-gray-300 rounded-xl mb-4"></div>
              <div className="h-6 w-48 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 w-64 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 w-32 bg-gray-300 rounded mb-4"></div>
              <div className="h-10 w-32 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const [selected, setSelected] = useState(options[0]);
  const [isActive, setIsActive] = useState(false);

  const imgBoxRef = useRef(null);
  const btnRef = useRef(null);

  const toggleFlip = () => {
    imgBoxRef.current?.classList.toggle("active");
    btnRef.current?.classList.toggle("active");
  };

  const handleOptionClick = (item) => {
    setSelected(item);
    setIsActive(true);
    setTimeout(() => setIsActive(false), 1000);
  };

  const { title, description } =
    selected?.translations?.find((tr) => tr.translation?.language === locale)
      ?.translation?.fields || {};
  const { slug } =
    selected?.product.translations?.find(
      (tr) => tr.translation?.language === locale
    )?.translation?.fields || {};

  return (
    <div className="col-span-2 md:h-full flex flex-col mt-1">
      <div
        className="w-full bg-primary md:mt-5 h-full rounded-xl relative flex flex-col justify-start gap-y-8"
        style={{
          backgroundImage: "url(/assets/home/banner/dots.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
        }}
      >
        <div className="banner p-4">
        
        <div className="selections mt-6">
            <div className="circle flex justify-center items-center gap-2 flex-wrap">
              {options.map((item, i) => (
                <div
                  key={i}
                  style={{ "--i": i }}
                  className="options w-16 h-16 cursor-pointer"
                  onClick={() => handleOptionClick(item)}
                >
                  <Image
                    src={item.carouselThumbnail.url}
                    alt={
                      item.translations?.find(
                        (tr) => tr.language === locale && tr.translation
                      )?.translation?.fields?.title || "Product"
                    }
                    width={300}
                    height={300}
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="rounded"
                  />
                </div>
              ))}
            </div>
            <h2 className="text-center text-white mt-2 font-nozha">
              {h("circle")}
            </h2>
          </div>


          <div
            ref={imgBoxRef}
            className={`imgBox z-50 h-96 w-96 ${isActive ? "active" : ""}`}
          >
            <div className="food w-90 h-90">
              <Image
                src={selected?.thumbnail.url}
                alt={title || "Product"}
                width={600}
                height={600}
                priority
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
            <div className="description h-90 w-90 p-2 text-white">
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-sm">{description}</p>
              <span className="text-lg text-white">
                {selected.product.variations[0].price} {h("rial")}
              </span>
              <div className="flex flex-col">
                <div className="flex justify-center mt-4">
                  <Link
                    className="bg-white text-primary rounded px-6 py-2 flex items-center justify-center gap-2"
                    href={`/${locale}/product/${selected.product?.productId}/${slug}`}
                  >
                    {h("buy")}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <button
            className="btn bg-white text-black px-4 py-2 rounded mt-4"
            ref={btnRef}
            onClick={toggleFlip}
          >
            {h("seeMore")}
          </button>
          <div className="content">
          
          </div>
        </div>
      </div>
    </div>
  );
}