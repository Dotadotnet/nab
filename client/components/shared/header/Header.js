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
import { PiPhone } from "react-icons/pi";
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

  return (
    <>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
      <header >
        <Container>
          <nav className="fixed top-0 m-4  left-0 flex flex-row justify-between right-0 shadow-lg lg:grid lg:grid-cols-12 items-center z-50 px-4 py-1  bg-white dark:bg-slate-800 rounded-xl dark:text-gray-100">
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
                  width={400}
                  height={400}
                  className="h-16 w-16 object-contain md:block cursor-pointer"
                  onClick={() => window.open("/", "_self")}
                />
              </div>
            </div>
          </nav>
        </Container>
      </header>
    </>
  );
};

export default Navbar;
