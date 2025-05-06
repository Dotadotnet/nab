"use client";
import { useState } from "react";
import OutsideClick from "../outsideClick/OutsideClick";
import language from "@/app/language";
import { usePathname } from 'next/navigation'
import { useLocale } from "next-intl";
const LanguageSwitcher = () => {
  const t = useLocale();
  const pathname = usePathname().split('/');
  const [isOpen, setIsOpen] = useState(false);
  const class_lang = new language(t);
  const lang_now = class_lang.getInfo();
  const langs = class_lang.info;
  const langs_result = [];
  langs.forEach(lang => {
    pathname[1] = lang.lang;
    langs_result.push({ lang: lang.lang, img: lang.img, name: lang.name, link: pathname.join('/'), loc: lang.loc, dir: lang.dir })
  });
  return (
    <div className="relative">
      <button
        onClick={() => {          
          if (!isOpen)
            setIsOpen(true)
        }}
        className="p-2 rounded-secondary flex flex-row-reverse items-center justify-center px-4 sm:px-6 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
      >
        {lang_now.name}
        <img src={lang_now.img} alt={lang_now.name} className="w-5 ltr:mr-1 rtl:ml-1 h-5 rounded-full" />
      </button>

      {isOpen && (
        <OutsideClick
          onOutsideClick={() => setIsOpen(false)}
          className="absolute top-full right-2 w-40 mt-2 bg-white dark:bg-slate-900 border border-primary dark:border-blue-500 rounded shadow-md p-2 z-50"
        >
          {langs_result.map((lang) => (
            <a
              href={lang.link}
              key={lang.lang}
              className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded w-full text-right"
            >
              <img src={lang.img} alt={lang.name} className="w-5 h-5 rounded-full" />
              <span className="text-sm">{lang.name}</span>
            </a>
          ))}
        </OutsideClick>
      )}
    </div>
  );
};

export default LanguageSwitcher;
