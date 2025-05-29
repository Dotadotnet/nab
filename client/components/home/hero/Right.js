"use client";
import React from "react";
import { AiTwotoneFire } from "react-icons/ai";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import language from "@/app/language";
import Link from "next/link";

function Right() {
  const t = useTranslations("Tools");
  const h = useTranslations("HomePage");
  const router = useRouter();
  const lang = useLocale();
  const language_class = new language(lang);
  const dir = language_class.getInfo().dir;
  const move_side = dir == "ltr" ? -200 : 200;

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
        <div className="flex md:flex-row lg:flex-row justify-start flex-col-reverse md:m-0">
          <div className="md:flex">
            <div className="lg:ml-0 h-full w-full">
              <div className="h-full w-full lg:mr-0 md:ml-auto">
                <Image
                  priority
                  src="/assets/home/banner/model1.webp"
                  alt="model"
                  height={872}
                  width={500}
                  className="ltr:-scale-x-100 h-full mt-[10px] object-cover w-full lg:ml-0 md:ml-auto"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 p-4 md:pt-16">
            <h1 className="text-white font-nozha text-5xl w-full text-right">
              {h("NoghlAndHalvaOf")} <span className="md:text-6xl text-black">{t("NameShop")}</span>
            </h1>

            <h2 className="md:text-3xl font-nozha text-4xl text-white w-full text-right">
              {h("HeroRightSubTitle")}
            </h2>

             <motion.p
              className="flex flex-row gap-x-0.5 items-center text-right justify-start md:text-md text-black"
              initial={{ x: move_side, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {h("HeroRightCaption")}
              <AiTwotoneFire className="text-[#ffa384] w-6 h-6 drop-shadow" />
            </motion.p>

            <Link href="/products">
              <motion.button
                className="px-8 py-4 cursor-pointer border border-black justify-start rounded-secondary bg-black hover:bg-black/90 text-white transition-colors drop-shadow w-fit mt-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
              >
                {h("HeroRightStart")}
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Right;
