"use client";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import Hero from "@/components/Hero";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../globals.css";

import { Navigation, Pagination } from "swiper/modules";
import { products } from "../MockData";

export default function Home() {

  return (
    <div className="min-h-screen">
      <Hero />
      <div className="p-4">
        <Swiper
          style={{ width: "100%", height: "100%" }}
          slidesPerView={1}
          spaceBetween={20}
          modules={[Pagination, Navigation]}
          navigation={{enabled:true}}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              key={product.id}
              className=""
            >
              <ProductCard
                imgs={product.imgs}
                title={product.title}
                price={product.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
