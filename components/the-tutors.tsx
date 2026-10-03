"use client";
import { useRef } from "react";
import { stageItems, CONTACTS } from "@/constants";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { AnimatedText, Button, Sticky } from "@/components";
import { motion, MotionValue, useTransform } from "framer-motion";
import { useI18n } from "@/i18n/context";

export default function TheTutors({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const { t } = useI18n();
  const swiperRef = useRef<SwiperType | null>(null);
  const rotate = useTransform(scrollYProgress, [0, 0.8], [8, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [0.8, 1]);
  return (
    <motion.div
      style={{ scale, rotate }}
      className="w-full min-h-screen bg-[#010101] sticky top-0 left-0">
      <div className="w-full flex items-center justify-between gap-2 pt-36 md:pt-60 px-5 md:px-10">
        <AnimatedText
          text={t.approach.heading}
          className="text-[13vw] md:text-[110px] uppercase leading-none font-humaneMedium text-white"
        />
        <h1 className="hidden md:block text-[22px] font-helveticaNeue leading-[0.9] text-white uppercase text-right">
          {t.approach.captionPre}{" "}
          <span className="text-[32px] font-bodoniseventytwo leading-[0.9] lowercase">
            {t.approach.captionAccent}
          </span>
          {t.approach.captionPost}
        </h1>
      </div>
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
              {stageItems.map((item, i) => {
                const stage = t.approach.stages[i];
                return (
                  <SwiperSlide key={item.id}>
                    <div
                      className="swiper-slide h-[70vh] md:h-[1000px] cursor-pointer relative overflow-hidden"
                      style={{
                        background: item.color,
                      }}>
                      <div className="absolute w-full h-full p-5 md:p-8">
                        <div className="w-full h-full flex flex-col justify-between">
                          <div className="flex items-start justify-start">
                            <p
                              className="text-[16px] leading-tight font-helveticaNeue tracking-tight py-2 px-4 rounded-full uppercase border-[1.5px]"
                              style={{
                                color: item.text,
                                borderColor: item.text,
                              }}>
                              {stage.tag}
                            </p>
                          </div>
                          <div className="flex w-full items-center justify-between gap-5 flex-col">
                            <h2
                              className="text-[9vw] md:text-[52px] uppercase tracking-wide leading-[1] font-humaneMedium whitespace-nowrap"
                              style={{ color: item.text }}>
                              {stage.title}
                            </h2>
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
      <div className="w-full flex flex-wrap items-center justify-center px-6 md:px-10 py-20 md:py-40 gap-10 md:gap-20">
        {t.approach.stats.map((stat, i) => (
          <div
            key={i}
            className="flex items-end justify-end">
            <div>
              <h2
                className="text-[12vw] md:text-[72px] uppercase tracking-wide leading-[1] font-humaneMedium"
                style={{
                  color: ["#FF6B00", "#FFB03B", "#FFC700", "#FFFFFF"][i],
                }}>
                {stat.big}
              </h2>
            </div>
            <div>
              <p className="text-[16px] leading-tight font-helveticaNeue tracking-tight py-2 px-4 rounded-full uppercase text-white/50">
                {stat.small}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center py-10">
        <a
          href={CONTACTS.whatsapp}
          target="_blank"
          rel="noreferrer">
          <Button title={t.approach.cta} />
        </a>
      </div>
    </motion.div>
  );
}
