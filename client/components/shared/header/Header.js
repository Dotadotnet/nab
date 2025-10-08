"use client";

import React, { useState } from "react";
import MobileNav from "./mobileMenu/MobileNav";
import Container from "../Container";
import MobileMenu from "./mobileMenu/MobileMenu";
import Image from "next/image";
import Brand from "@/components/icons/Brand";
import Store from "@/components/icons/Store";
import Auth from "./Auth";
import SearchFilter from "./SearchFilter";
import MyCart from "./MyCart";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Home from "@/components/icons/Home";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "../languageSwitch/page";
import { useLocale, useTranslations } from "use-intl";
import { PiPhone, PiEnvelopeSimple } from "react-icons/pi";
import { Link } from "@/i18n/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const t = useTranslations("Navbar")
  const a = useTranslations("Tools")
  const pathname = usePathname();
  const niches = [
    {
      title: t("MainPage"),
      icon: <Home />,
      href: "/"
    },
    {
      title: t("Products"),
      icon: <Brand />,
      href: "/products"
    },
    {
      title: t("CallUs"),
      icon: <PiPhone className="text-2xl rtl:-scale-100 rtl:rotate-[80deg]" />,
      href: "/contact-us"
    },
    {
      title: t("AboutUs"),
      icon: <Store />,
      href: "./about"
    }
  ];
const items = [
  { text: "📈 افزایش تقاضای جهانی برای شیرینی‌های سنتی ایرانی", icon: "🔥" },
  { text: "⚡ رشد صادرات صنعت شیرینی و شکلات ایران در سه‌ماهه اخیر", icon: "⚡" },
  { text: "ℹ️ تاکید وزارت بهداشت بر برچسب‌گذاری قند در محصولات شیرینی", icon: "ℹ️" },
  { text: "🎆 افتتاح نمایشگاه بین‌المللی شیرینی و نان در تهران", icon: "🎆" },
  { text: "💰 افزایش سرمایه‌گذاری خارجی در صنعت غذا و نوشیدنی ایران", icon: "💰" },
  { text: "🥇 جایزه بهترین برند شیرینی ایرانی به شرکت نقل ناب اهدا شد", icon: "🏆" },
  { text: "📦 تکنولوژی‌های جدید بسته‌بندی برای افزایش عمر محصولات", icon: "📦" },
  { text: "🌱 تولید محصولات ارگانیک و طبیعی در صنعت شیرینی‌پزی", icon: "🌱" },
  { text: "🚀 کنفرانس بین‌المللی نوآوری در صنعت قنادی و شکلات", icon: "🚀" },
  { text: "🏪 بازگشایی مراکز عرضه تخصصی شیرینی و نقل در شهرهای بزرگ", icon: "🏪" },
  { text: "🔬 راه‌اندازی سامانه نظارت بر کیفیت مواد غذایی", icon: "🔬" },
  { text: "📊 رکوردشکنی صادرات نقل و خشکبار ایرانی به اروپا", icon: "📊" },
  { text: "🏠 طرح حمایت از تولیدکنندگان محلی شیرینی و نقل", icon: "🏠" },
  { text: "📉 کاهش تولید نیشکر در کشورهای عمده تولیدکننده", icon: "📉" },
  { text: "🎓 آموزش مهارت‌های نوین برای قنادان جوان", icon: "🎓" },
  { text: "💻 رشد فروش آنلاین محصولات قنادی تا ۲۵٪", icon: "💻" },
  { text: "📢 رقابت بر سر کیفیت در بازار شیرینی و شکلات ایران", icon: "📢" },
  { text: "🌏 توسعه صادرات به بازارهای جدید آسیایی", icon: "🌏" },
  { text: "🏆 مسابقه بین‌المللی بهترین طعم‌های سنتی ایرانی", icon: "🥇" },
  { text: "🤝 همکاری برندهای ایرانی با شرکت‌های بین‌المللی", icon: "🤝" },
];

  const duplicated = [...items, ...items];

  return (
    <>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
      <header >
        <Container>
          {/* Top Contact Bar */}
          <div className="fixed top-0 left-0 right-0 z-[60]">
            <div className="bg-gradient-to-r from-yellow-600 to-primary text-white">
              <div className="flex items-center justify-between px-4 py-1 text-xs md:text-sm">
                {/* Right side: Phones (swapped) */}
                <div className="flex items-center gap-6">
                  <a href="tel:04432769494" className="flex items-center gap-1 hover:opacity-90">
                    <PiPhone className="text-base" />
                    <span>04432769494</span>
                  </a>
                  <a href="tel:09144455602" className="flex items-center gap-1 hover:opacity-90">
                    <PiPhone className="text-base" />
                    <span>09144455602</span>
                  </a>
                </div>

                {/* Left side: Email (swapped) */}
                <a href="mailto:info@noghlenab.com" className="flex items-center gap-1 hover:opacity-90">
                  <PiEnvelopeSimple className="text-base" />
                  <span>info@noghlenab.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* News Ticker Bar */}
          <div className="fixed top-7 left-0 right-0 z-[59]">
            <div className="bg-gray-100 text-gray-800">
              <div className="relative flex items-center  py-2 text-sm overflow-hidden">
                {/* Left: Live badge */}
                <div className="flex items-center gap-2 flex-shrink-0 bg-gray-100 px-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                  <span className="text-gray-800 font-medium">مهم</span>
                </div>

                {/* Full width marquee headlines */}
 <div className="w-full overflow-hidden">
         <div className="marquee-content flex items-center animate-marquee-reverse">
        {duplicated.map((item, i) => (
          <span
            key={i}
            className="inline-block mx-8 whitespace-nowrap text-sm text-gray-800"
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>
              </div>
            </div>
            <style jsx>{`
              .marquee-container {
                width: 100%;
                overflow: hidden;
                position: relative;
              }
              .marquee-content {
                display: flex;
                animation: marquee 25s linear infinite;
                will-change: transform;
              }
              @keyframes marquee {
                0% {
                  transform: translateX(-100%);
                }
                100% {
                  transform: translateX(100%);
                }
              }
              .marquee-content:hover {
                animation-play-state: paused;
              }
            `}</style>
          </div>

          <nav className="fixed top-20 left-0 right-0 z-50">
            <div className="mx-4 flex flex-row justify-between shadow-lg lg:grid lg:grid-cols-12 items-center px-4 py-1 bg-white dark:bg-slate-800 rounded-xl dark:text-gray-100">
              <div className=" col-span-2 flex-row-reverse gap-x-2 relative h-fit">
              <div className="md:hidden block col-span-0">
                <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
              </div>
              <div className="md:flex gap-2 hidden">
                <Auth />
                <SearchFilter />
                <MyCart />
                <ThemeToggle />
                <LanguageSwitcher />
              </div>
              </div>
              <div className="col-span-8 rounded-primary hidden md:flex justify-center">
              <div className="flex flex-row justify-center gap-x-2 overflow-x-auto">
                <div className="flex flex-row justify-center gap-x-2 border border-gray-300 p-1 rounded-secondary bg-white dark:bg-slate-800 overflow-x-auto scrollbar-hide">
                  {niches.map((niche, index) => {
                    let uri = null;
                    let url_exploded = pathname.split("/");
                    if (useLocale() !== "fa") {
                      url_exploded[1] = '';
                    }
                    const isActive = url_exploded.join("/").replace('//', '/') === niche.href;
                    return (
                      <Link
                        key={index}
                        href={niche.href}
                        className={`text-sm text-black dark:text-gray-100 w-44 text-center h-10 flex flex-row items-center gap-x-1 px-8 py-2 justify-center rounded-secondary border border-transparent transition ${isActive ? "bg-primary text-white" : ""
                          }`}
                      >
                        {niche.icon}
                        {niche.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
              </div>
              <div className="flex col-span-2 justify-between flex-row gap-x-1  items-center relative">
              <div></div>
              <div className="flex justify-center items-center">
                <h2 className="text-2xl md:inline-block mx-2 hidden font-nozha">{a("NameWebsite")}</h2>
                <Image
                  src={"/logo.png"}
                  alt="logo"
                  width={200}
                  height={200}
                  className="h-16 w-16 object-contain md:block cursor-pointer"
                  onClick={() => window.open("/", "_self")}
                />
              </div>
              </div>
            </div>
          </nav>
        </Container>
      </header>
    </>
  );
};

export default Navbar;
