"use client";
import React, { useState, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import "./Right.css";
import Spinner from "@/components/shared/Spinner";
import Link from "next/link";

export default function Right({ options }) {
  const h = useTranslations("HomePage");
  const locale = useLocale();

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
    <div className="col-span-2  md:h-full  flex flex-col mt-1">
      <div
        className="w-full bg-primary md:mt-5 h-full rounded-xl relative flex flex-col justify-start gap-y-8"
        style={{
          backgroundImage: "url(/assets/home/banner/dots.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden"
        }}
      >
        <div className="banner p-4">
          <div className="content">
            <h1 className="text-6xl absolute top-2 ltr:left-2 right-2 transform-fill md:text-4xl   font-bold text-white">
              {h("title")}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 16 16"
                  className="rotate-45"
                >
                  <path
                    fill="currentColor"
                    d="M8 2.748v11.047c3.452-2.368 5.365-4.542 6.286-6.357c.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"
                  />
                </svg>
              </span>
            </h1>
          </div>

          <div
            ref={imgBoxRef}
            className={`imgBox z-50 h-96 w-96 ${isActive ? "active" : ""}`}
          >
            <div className="food w-90 h-90">
              <Image
                src={selected.thumbnail.url}
                alt={title}
                width={600}
                height={600}
                priority
                className="object-cover rounded-xl"
              />
            </div>
            <div className="description  h-90 w-90 p-2 text-white">
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-sm">{description}</p>
              <span className="price text-lg text-white">
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
        </div>
      </div>
    </div>
  );
}
