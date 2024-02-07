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
    <div className="group relative bg-zinc-100 aspect-square overflow-hidden rounded-xl">
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
        className="h-full w-full"
      >
        {photos?.map((photo, index) => (
          <SwiperSlide key={index} className="relative h-full w-full">
            <Image
              fill
              className="h-full w-full object-cover object-center rounded-2xl"
              src={photo.url}
              alt="img"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PhotosSwiper;
