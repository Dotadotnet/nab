"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const colors = [
  "orange",
  "green",
  "pink",
  "yellow",
  "blue",
  "teal",
  "purple",
  "indigo",
  "cyan",
  "red"
];
const pickColor = () => colors[Math.floor(Math.random() * colors.length)];

export default function ProductsSlider({ products, locale }) {
    console.log("products",products)
  return (
    <Swiper
      slidesPerView={1.05}
      spaceBetween={10}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 12 },
        1024: { slidesPerView: 3, spaceBetween: 16 }
      }}
      className="w-full"
    >
      {products.map((product, index) => {
        const color = pickColor();
        const faFields =
          product?.translations?.find(
            (tr) => tr?.translation?.language === "fa"
          )?.translation?.fields ||
          product?.translations?.[0]?.translation?.fields || {};
        const title = faFields?.title || product?.title || "";
        const summary = faFields?.summary || "";
        const slug = faFields?.slug || product?.slug || "";
        const href = `${locale}/product/${product?.productId}/${slug}`;

        return (
          <SwiperSlide key={product?.productId || index}>
            <div className={`bg-gradient-to-br from-${color}-50 to-${color}-100 p-4 rounded-xl`}>
              <Link href={href} aria-label={title}>
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={product?.thumbnail?.url}
                      alt={product?.thumbnail?.public_id || title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 text-right">
                    <h4 className={`text-base font-bold text-${color}-800 mb-1`}>
                      {title}
                    </h4>
                    <p className="text-xs text-gray-700 line-clamp-2">{summary}</p>
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}


