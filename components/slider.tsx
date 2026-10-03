"use client";
import { useRef } from "react";
import { Sticky } from "@/components";
import { directionItems } from "@/constants";
import {
  ToyDevice,
  ToyBrain,
  ToyBridge,
  ToyNode,
} from "@/components/toys";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useI18n } from "@/i18n/context";

const toys = [ToyDevice, ToyBrain, ToyBridge, ToyNode];
const accents = ["#F96A1B", "#2B4EE6", "#F0533F", "#5FD3A5"];

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
              const Toy = toys[i % toys.length];
              const accent = accents[i % accents.length];
              return (
                <SwiperSlide key={item.id}>
                  <div className="swiper-slide h-[70vh] md:h-[720px] cursor-pointer relative p-3 md:p-4">
                    <div className="w-full h-full bg-paper rounded-[24px] md:rounded-[32px] border border-line shadow-card relative overflow-hidden flex flex-col">
                      {/* toy illustration */}
                      <div className="flex-1 flex items-center justify-center px-8 pt-10">
                        <div className="w-[70%] max-w-[340px] toy-float-slow">
                          <Toy />
                        </div>
                      </div>
                      <div className="w-full p-6 md:p-8 flex flex-col gap-4">
                        <div className="flex items-start justify-between gap-2">
                          <span className="mono-label text-ink/40">{text.num}</span>
                          <span
                            className="mono-label px-3 py-1 rounded-full border-[1.5px]"
                            style={{ color: accent, borderColor: accent }}>
                            {text.btn}
                          </span>
                        </div>
                        <h2 className="text-[7vw] md:text-[38px] font-extrabold uppercase tracking-[-0.02em] leading-[1] text-ink">
                          {text.t1}
                          <br />
                          {text.t2}
                        </h2>
                        <h2 className="text-[15px] font-semibold uppercase leading-[1.1] text-ink/70">
                          {text.h1}
                        </h2>
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
