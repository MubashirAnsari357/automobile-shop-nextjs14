"use client";
import React from "react";
import ProductCard from "./ProductCard";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/app/globals.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const ProductSwiper = ({ products }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      modules={[Pagination, Navigation]}
      navigation={{ enabled: true }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      }}
      className="w-full h-full"
    >
      {products.map((product) => (
        <SwiperSlide
          key={product.id}
          className="flex justify-center items-center"
        >
          <ProductCard
            key={product._id}
            photo={product.photos[0].url}
            name={product.name}
            description={product.description}
            subcategory={product.subcategory.name}
            manufactureDate={product.manufactureDate}
            category={product.category.name}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSwiper;
