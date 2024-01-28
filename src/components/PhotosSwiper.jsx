"use client";
import Image from "next/image";
import React from "react";
import { EffectCreative, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const PhotosSwiper = ({ photos }) => {
  return (
    <Swiper
      grabCursor={true}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      modules={[EffectCreative, Pagination]}
      pagination={{
        clickable: true,
      }}
    >
      {photos?.map((photo, index) => (
        <SwiperSlide
          key={index}
          className="flex justify-center items-center shadow-2xl shadow-slate-300 rounded-full"
        >
          <div className="w-[400px] h-[320px] bg-cover">
            <Image
              fill
            //   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="h-full w-full object-cover rounded-2xl"
              src={photo.url}
              alt="img"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PhotosSwiper;
