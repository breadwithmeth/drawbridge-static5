"use client";
import Image from "next/image";
import { useRef } from "react";
import { Sticky } from "@/components";
import { directionItems } from "@/constants";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useI18n } from "@/i18n/context";

export default function Slider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const { t } = useI18n();
  return (
    <div className="slider-container w-full flex flex-col gap-10">
      <div className="w-full">
        <div className="overflow-hidden">
          <Swiper
            modules={[]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              400: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
              },
              1490: {
                slidesPerView: 3,
              },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}>
            {directionItems.map((item, i) => {
              const text = t.directions.items[i];
              return (
                <SwiperSlide key={item.id}>
                  <div className="swiper-slide h-[70vh] md:h-[800px] cursor-pointer relative overflow-hidden">
                    <Image
                      src={item.src}
                      alt={text.h1}
                      fill
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 w-full h-full p-5 md:p-8">
                      <div className="w-full h-full flex flex-col justify-between">
                        <div className="flex w-full items-start justify-between gap-2">
                          <div className="flex flex-col gap-2">
                            <h2
                              className="text-[16px] uppercase leading-[1.1]"
                              style={{ color: item.color }}>
                              {text.h1}
                            </h2>
                            <h2
                              className="text-[16px] uppercase leading-[1.1]"
                              style={{ color: item.color }}>
                              {text.num}
                            </h2>
                          </div>
                          <div className="flex items-end justify-end">
                            <p
                              className="text-[16px] leading-tight font-helveticaNeue tracking-tight border-[1.5px] py-1 px-3 rounded-full uppercase"
                              style={{
                                color: item.color,
                                borderColor: item.color,
                              }}>
                              {text.btn}
                            </p>
                          </div>
                        </div>
                        <div className="flex w-full items-start justify-between gap-2">
                          <div className="flex flex-col gap-2">
                            <h2 className="text-[6vw] md:text-[44px] uppercase tracking-wide leading-[1.05] text-white font-humaneMedium">
                              {text.t1}
                              <br />
                              {text.t2}
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            <Sticky />
          </Swiper>
        </div>
      </div>
    </div>
  );
}
