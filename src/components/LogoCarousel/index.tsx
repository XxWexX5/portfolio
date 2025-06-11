"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

type Image = {
  name: string;
  url: string;
  width: number;
  height: number;
};

interface LogoCarouselProps {
  clientLogos: Image[];
}

export function LogoCarousel({ clientLogos }: LogoCarouselProps) {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={5}
      spaceBetween={30}
      loop
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        320: { slidesPerView: 2 },
        640: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1600: { slidesPerView: 7 },
      }}
      className="w-full flex items-center justify-center px-6"
    >
      {clientLogos.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            src={image.url}
            alt={image.name}
            width={image.width}
            height={image.height}
            className="object-contain mx-auto"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
