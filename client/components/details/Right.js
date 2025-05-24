"use client"
import React, { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import CartButton from "./CartButton";
import Description from "./Description";
import Policies from "./Policies";
import { useLocale } from "next-intl";

const Right = ({ product }) => {
  const [showCart, setShowCart] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const locale = useLocale();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowCart(false);
      } else {
        setShowCart(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  const {title, description } =
    product?.translations?.find((tr) => tr.translation?.language === locale)
      ?.translation?.fields || {};

  return (
    <section className="lg:col-span-6 md:col-span-6 col-span-12 flex flex-col gap-y-8">
      <article className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-4">
          <span className="text-xs flex items-center gap-x-1 px-2 h-full rounded">
            <AiFillStar className="w-4 h-4 text-yellow-500" />
          </span>
          <h1 className="lg:text-5xl font-nozha md:text-3xl text-4xl">
            {title || "عنوان محصول"}
          </h1>
          <p className="text-justify">{description}</p>
        </div>
        <div className="hidden md:block">
          <CartButton product={product} />
        </div>
      </article>

      <Description product={product} />
      <Policies />

      <div
        className={`fixed z-[99999] bottom-0 left-0 w-full  shadow-lg  transition-transform duration-300 md:hidden ${
          showCart ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <CartButton product={product} />
      </div>
    </section>
  );
};

export default Right;
