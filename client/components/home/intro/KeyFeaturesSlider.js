"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function KeyFeaturesSlider({ features }) {
  return (
    <Swiper
      slidesPerView={1.1}
      spaceBetween={10}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 12 },
        1024: { slidesPerView: 4, spaceBetween: 16 }
      }}
      className="w-full"
    >
      {features.map((feature, index) => (
        <SwiperSlide key={index}>
          <div className={`bg-gradient-to-br from-${feature.color}-50 to-${feature.color}-100 p-4 rounded-xl text-center`}>
            <div className="text-2xl mb-2">{feature.icon}</div>
            <h3 className={`font-semibold text-${feature.color}-800`}>{feature.title}</h3>
            <p className={`text-sm text-${feature.color}-600`}>{feature.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}


