"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import { motion } from "framer-motion";
import language from "@/app/language";
import { useLocale, useTranslations } from "next-intl";
function Left() {
  const h = useTranslations("HomePage");
  const t = useTranslations("discount");
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  var prev = null;
  var next = null;
  const lang = useLocale();
  const class_lang = new language(lang);

  const dir = class_lang.getInfo().dir;
  const move_side = dir == "ltr" ? -200 : 200;
  if (dir == "ltr") {
    prev = "custom-next";
    next = "custom-prev";
  } else {
    prev = "custom-prev";
    next = "custom-next";
  }
  return (
    <div className="flex flex-col pt-7">
   <section>
  <div className="bg-gradient-to-br from-sky-400 via-sky-400 to-violet-400 p-6 sm:p-10 rounded-2xl w-full text-white flex items-center justify-between max-w-2xl mx-auto">
    <div className="flex flex-col gap-6">
      <div>
        <span className="text-gray-200">{t("OpenShopTitle")}</span>
        <br />
        <span className="text-gray-200 text-4xl font-semibold">
          {t("OpenShopSubtitle")}
        </span>
      </div>
      <a
        href="/products"
        className="text-black bg-white hover:bg-gray-50 px-4 py-2 rounded-lg w-fit ease duration-300 flex gap-1 items-center group"
      >
        <span>{t("OpenShopCta")}</span>
      </a>
    </div>
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-20 h-20 text-gray-100"
        viewBox="0 0 15 15"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M4.5 0A2.5 2.5 0 0 0 2 2.5v.286c0 .448.133.865.362 1.214H1.5A1.5 1.5 0 0 0 0 5.5v1A1.5 1.5 0 0 0 1.5 8H7V4h1v4h5.5A1.5 1.5 0 0 0 15 6.5v-1A1.5 1.5 0 0 0 13.5 4h-.862c.229-.349.362-.766.362-1.214V2.5A2.5 2.5 0 0 0 10.5 0c-1.273 0-2.388.68-3 1.696A3.498 3.498 0 0 0 4.5 0ZM8 4h2.786C11.456 4 12 3.456 12 2.786V2.5A1.5 1.5 0 0 0 10.5 1A2.5 2.5 0 0 0 8 3.5V4ZM7 4H4.214C3.544 4 3 3.456 3 2.786V2.5A1.5 1.5 0 0 1 4.5 1A2.5 2.5 0 0 1 7 3.5V4Z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M7 9H1v3.5A2.5 2.5 0 0 0 3.5 15H7V9Zm1 6h3.5a2.5 2.5 0 0 0 2.5-2.5V9H8v6Z"
        />
      </svg>
    </div>
  </div>
</section>

      <section className="col-span-1 h-full px-2 w-full flex flex-col relative  ">
        <div className="absolute w-full top-1/2  flex justify-between z-20">
          <div
            className={
              prev +
              " " +
              "hover:scale-110  transition-all  ltr:-right-1 rtl:-right-5 absolute flex justify-center items-center p-4 border-4 rounded-full cursor-pointer text-gray-700 w-6 h-6 bg-white dark:bg-gray-700 border-white dark:border-gray-900 -lg text-lg"
            }
          >
            <span>
              <IoIosArrowForward size={25} className="dark:text-gray-100" />
            </span>
          </div>
          <div
            className={
              next +
              " " +
              " hover:scale-110 transition-all ltr:-left-5 rtl:-left-1 absolute flex justify-center items-center p-4 border-4 rounded-full cursor-pointer dark:border-gray-900 text-gray-700 w-6 h-6 bg-gray-100 border-white  text-lg dark:bg-gray-700"
            }
          >
            <span>
              <IoIosArrowBack size={25} className="dark:text-gray-100" />
            </span>
          </div>
        </div>
        <div
          className="w-full relative h-full rounded-xl mt-6 flex flex-col 
        overflow-hidden bg-gradient-to-br from-yellow-400 via-yellow-400 to-yellow-400 "
        
        >
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 9000,
              disableOnInteraction: false
            }}
            pagination={{
              clickable: true
            }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev"
            }}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex select-none flex-col gap-y-4 justify-center items-center p-4 text-right md:text-center">
                <motion.h2
                  className="md:text-5xl select-none text-white font-nozha text-6xl w-full text-right"
                  initial={{ x: move_side, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {h("HeroLeft1Title")}
                </motion.h2>
                <p className="text-white select-none text-lg">
                  {h("HeroLeft1SubTitle")}
                </p>
              </div>
              <div className="absolute select-none -bottom-8 -left-8 rtl:-right-2 md:flex">
                {/* <motion.div
                  animate={{ y: ["0px", "20px", "0px"] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 3
                  }}
                >
                  <Image
                    src="/assets/home/banner/cake1.webp"
                    height={872}
                    width={500}
                    alt={"banner1"}
                    className="w-72 ml-4  select-noneblock md:mr-auto"
                  />
                </motion.div> */}
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col gap-y-4 p-4">
                <motion.h2
                  className="text-5xl select-none text-white font-nozha w-full text-right"
                  initial={{ x: move_side, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {h("HeroLeft2Title")}
                </motion.h2>
                <p className="text-white select-none text-lg">
                  {h("HeroLeft2SubTitle")}
                </p>
                <div
                  className={
                    dir == "ltr"
                      ? "absolute flex -bottom-8  md:flex -left-44"
                      : "absolute flex -bottom-8  md:flex -right-40"
                  }
                >
                  {/* <motion.div
                    animate={{ y: ["0px", "20px", "0px"] }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 3
                    }}
                  >
                    <Image
                      src="/assets/home/banner/cake2.webp"
                      height={524}
                      width={483}
                      alt={"banner2"}
                      className="w-88 select-none ml-4 block md:mr-auto"
                    />
                  </motion.div> */}
                </div>
              </div>
              <div
                className={
                  dir == "ltr"
                    ? "absolute flex -bottom-8   -right-28"
                    : "absolute flex -bottom-16  -left-36"
                }
              >
                {/* <motion.div
                  animate={{ y: ["0px", "20px", "0px"] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 3
                  }}
                >
                  <Image
                    src="/assets/home/banner/cake3.webp"
                    height={500}
                    width={835}
                    alt={"banner3"}
                    className="w-56 select-none ml-4 block md:mr-auto"
                  />
                </motion.div> */}
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col p-4 gap-y-4">
                <motion.h2
                  className="text-5xl select-none text-white font-nozha w-full text-right"
                  initial={{ x: move_side, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {h("HeroLeft3Title")}
                </motion.h2>
                <p className="text-white select-none text-lg">
                  {h("HeroLeft3SubTitle")}
                </p>
              </div>
              <div
                className={
                  dir == "ltr"
                    ? "absolute flex -bottom-8   -right-32"
                    : "absolute flex -bottom-8  -left-32 "
                }
              >
                {/* <motion.div
                  animate={{ y: ["0px", "20px", "0px"] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 3
                  }}
                >
                  <Image
                    src="/assets/home/banner/cake4.webp"
                    height={872}
                    width={500}
                    alt={"banner4"}
                    className="w-84 select-none ml-4 block md:mr-auto"
                  />
                </motion.div> */}
              </div>
            </SwiperSlide>
            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </div>
      </section>
    </div>
  );
}

export default Left;
