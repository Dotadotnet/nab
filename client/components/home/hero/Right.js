"use client";
import React, { useState, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import  "./Right.css"; 



export default function Right({options}) {
  const t = useTranslations("Tools");
  const h = useTranslations("HomePage");
  const lang = useLocale();

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

  return (
    <div className="col-span-2 h-full flex flex-col mt-1">
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
            <h1 className="text-6xl absolute top-2 right-2 transform-fill md:text-4xl font-nozha font-bold text-white">
              نقل و حلوای ناب{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="84"
                  height="84"
                  viewBox="0 0 16 16"
                  className="icon"
                >
                  <path
                    fill="currentColor"
                    d="M8 2.748v11.047c3.452-2.368 5.365-4.542 6.286-6.357c.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"
                  />
                </svg>
              </span>
            </h1>
            <h2></h2>
          </div>

          <div
            ref={imgBoxRef}
            className={`imgBox h-96 w-96 ${isActive ? "active" : ""}`}
          >
            <div className="food w-90 h-90 ">
              <Image
                src={selected.src}
                alt={selected.title}
                width={600}
                height={600}
                className="object-cover rounded-xl"
              />
            </div>
            <div className="description h-90 w-90 p-2 text-white">
              <h3 className="text-xl font-bold">{selected.title}</h3>
              <p className="text-sm">{selected.description}</p>
              <span className="price text-lg text-white ">{selected.price} تومان</span>
            </div>
          </div>

          <button
            className="btn bg-white text-black px-4 py-2 rounded mt-4"
            ref={btnRef}
            onClick={toggleFlip}
          >
            دیدن جزئیات
          </button>

          <div className="selections mt-4">
            <div className="circle flex justify-center items-center gap-2 flex-wrap">
              {options.map((item, i) => (
                <div
                  key={item.id}
                  style={{ "--i": i }}
                  className="options w-16 h-16 cursor-pointer"
                  onClick={() => handleOptionClick(item)}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={300}
                    height={300}
                    className="rounded"
                  />
                </div>
              ))}
            </div>
            <h2 className="text-center text-white mt-2 font-nozha">چرخ   مزه ها</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
