"use client";
import { useState } from "react";
import { useLocale } from "next-intl";
import language from "@/app/language";
import { usePathname } from "next/navigation";
import OutsideClick from "../outsideClick/OutsideClick";
import Image from "next/image";

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useLocale();
  const class_lang = new language(t);
  const lang_now = class_lang.getInfo();
  const langs = class_lang.info;
  const langs_result = [];

  const pathname = usePathname().split("/");

  langs.forEach((lang) => {
    let newPath = [...pathname];
    if (t === "fa") {
      newPath.unshift(lang.lang);
      newPath.unshift("");
    } else {
      newPath[1] = lang.lang;
    }
    langs_result.push({
      lang: lang.lang,
      img: lang.img,
      name: lang.name,
      link: newPath.join("/").replace("//", "/"),
      loc: lang.loc,
      dir: lang.dir
    });
  });

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" rounded-secondary flex px-4 py-1 md:p-0 items-center justify-center gap-x-2 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors md:w-10 md:h-10"
      >
        <span className="md:hidden flex">{lang_now.name}</span>
        <Image
          src={lang_now.img}
          alt={lang_now.name}
          width={20}
          height={20}
          className="rounded-full w-7 h-7 "
        />
      </button>

      {isOpen && (
        <OutsideClick
          onOutsideClick={() => setIsOpen(false)}
          className={`absolute top- ${
            t === "en" || t === "tr" ? "left-2" : "right-2"
          }  w-40 mt-2 bg-white dark:bg-slate-900 border border-primary dark:border-blue-500 rounded shadow-md p-2 z-50`}
        >
          {langs_result.map((lang) => (
            <a
              href={lang.link}
              key={lang.lang}
              className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded w-full text-right"
              aria-current={lang.lang === t ? "true" : undefined}
            >
              <Image
                src={lang.img}
                alt={lang.name}
                width={20}
                height={20}
                className="rounded-full w-5 h-5"
              />

              <span className="text-sm font-vazir">{lang.name}</span>
            </a>
          ))}
        </OutsideClick>
      )}
    </div>
  );
};

export default LanguageSwitcher;
