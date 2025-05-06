"use client"
import React from 'react'
import { AiTwotoneFire } from "react-icons/ai";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from 'next-intl';
import language from '@/app/language';
function Right() {
  const t = useTranslations("Tools")
  const h = useTranslations("HomePage")

  const router = useRouter();
  const lang = useLocale();
  const language_class = new language(lang);
  const dir = language_class.getInfo().dir;
  const move_side = dir == "ltr" ? -200 : 200;
  return (
    <div className="col-span-2 h-full flex flex-col mt-1 ">
      {" "}
      <div
        className="w-full bg-primary  md:mt-5 h-full rounded-xl relative flex flex-col gap-y-8 lg:px-8 lg:py-16 "
        style={{
          backgroundImage:
            "url(/assets/home/banner/dots.svg)",

          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden"
        }}
      >
        <motion.div
          className="lg:absolute bottom-0 rtl:right-0 ltr:left-0 order-2 lg:w-[500px] lg:ml-0 md:ml-auto"
          initial={{ x: move_side, opacity: 0 }}
          animate={{
            opacity: 1,
            x: 0,
            y: ["0px", "20px", "0px"]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: 0,
            delay: 0.3
          }}
        >
          <motion.div
            className="lg:absolute bottom-0 rtl:right-0 ltr:left-0 order-2 lg:w-[500px] lg:mr-0 md:ml-auto"
            animate={{
              y: ["0px", "20px", "0px"]
            }}
            transition={{

              repeat: Infinity,
              repeatType: "loop",
              duration: 3
            }}
          >
            <Image
              src="/assets/home/banner/model1.webp"
              alt="model"
              height={872}
              width={500}
              className=" ltr:-scale-x-100 lg:ml-0 md:ml-auto"
            />

          </motion.div>
        </motion.div>
        <div className="md:grid md:grid-cols-5 gap-4  mt-24 md:m-0">
          <div className="md:col-span-3 hidden md:flex p-4 "></div>
          <div className="md:col-span-2 flex flex-col gap-4 p-4">
            {/* Animated Title */}
            <motion.h1
              className="md:text-6xl text-white font-nozha text-6xl w-full text-right"
              initial={{ x: move_side, opacity: 0 }} // Initial state: Slide from left
              animate={{ x: 0, opacity: 1 }} // End state: Position in place
              transition={{ duration: 0.3 }} // Duration of slide-in effect
            >
              {h("NoghlAndHalvaOf")} {" "}
              <span className="md:text-6xl text-black">{t("NameShop")}</span>
              <br />
            </motion.h1>

            <motion.h1
              className="md:text-3xl font-nozha text-4xl text-white w-full text-right"
              initial={{ x: move_side, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {h("HeroRightSubTitle")}
            </motion.h1>

            <motion.p
              className="flex flex-row gap-x-0.5 items-center text-right justify-start md:text-md text-black"
              initial={{ x: move_side, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {h("HeroRightCaption")}   
              <AiTwotoneFire className="text-[#ffa384] w-6 h-6 drop-shadow" />
            </motion.p>

            {/* Animated Button */}
            <motion.button
              className="px-8 py-4 border border-black justify-start rounded-secondary bg-black hover:bg-black/90 text-white transition-colors drop-shadow w-fit mt-4"
              onClick={() => router.push("/")}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              {h("HeroRightStart")}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Right
