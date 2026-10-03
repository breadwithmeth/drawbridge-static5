"use client";
import { useRef } from "react";
import { stageItems, CONTACTS } from "@/constants";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { AnimatedText, Button, Sticky } from "@/components";
import { motion, MotionValue, useTransform } from "framer-motion";
import { useI18n } from "@/i18n/context";

const statColors = ["#F96A1B", "#2B4EE6", "#FFC529", "#141312"];

export default function TheTutors({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const { t } = useI18n();
  const swiperRef = useRef<SwiperType | null>(null);
  const rotate = useTransform(scrollYProgress, [0, 0.8], [2, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [0.94, 1]);
  return (
    <motion.div
      style={{ scale, rotate }}
      className="w-full min-h-screen bg-paper sticky top-0 left-0">
      <div className="w-full flex items-end justify-between gap-2 pt-32 md:pt-56 px-5 md:px-10">
        <AnimatedText
          text={t.approach.heading}
          className="text-[13vw] md:text-[96px] uppercase leading-none font-extrabold text-ink tracking-[-0.03em]"
        />
        <h1 className="hidden md:block text-[18px] font-medium leading-[1.1] text-ink/70 uppercase text-right max-w-[360px]">
          {t.approach.captionPre}{" "}
          <span className="text-[26px] font-bold text-ink lowercase">
            {t.approach.captionAccent}
          </span>
          {t.approach.captionPost}
        </h1>
      </div>
      <div className="slider-container w-full flex flex-col gap-10 pt-10">
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
                      className="swiper-slide h-[60vh] md:h-[560px] cursor-pointer relative p-3 md:p-4"
                      style={{
                        background: "transparent",
                      }}>
                      <div
                        className="w-full h-full rounded-[24px] md:rounded-[32px] relative overflow-hidden p-6 md:p-8 shadow-card"
                        style={{
                          background: item.color,
                        }}>
                        <div className="w-full h-full flex flex-col justify-between">
                          <div className="flex items-start justify-between">
                            <p
                              className="mono-label px-3 py-1.5 rounded-full border-[1.5px]"
                              style={{
                                color: item.text,
                                borderColor: item.text,
                              }}>
                              0{i + 1} · {stage.tag}
                            </p>
                            {/* painted corner accent */}
                            <svg viewBox="0 0 60 60" className="w-10 h-10 opacity-80">
                              <path
                                d="M8 44C16 28 32 16 52 12c4-1 5 4 2 6-16 10-28 22-34 34-2 4-10 2-12-8z"
                                fill={item.text}
                                opacity="0.9"
                              />
                            </svg>
                          </div>
                          <div className="flex w-full items-end justify-between gap-5 flex-col">
                            <h2
                              className="text-[9vw] md:text-[44px] uppercase tracking-[-0.02em] leading-[1] font-extrabold whitespace-nowrap"
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
      <div className="w-full flex flex-wrap items-center justify-center px-6 md:px-10 py-20 md:py-32 gap-10 md:gap-20">
        {t.approach.stats.map((stat, i) => (
          <div
            key={i}
            className="flex items-end justify-end">
            <div>
              <h2
                className="text-[12vw] md:text-[72px] uppercase tracking-[-0.03em] leading-[1] font-extrabold"
                style={{
                  color: statColors[i],
                }}>
                {stat.big}
              </h2>
            </div>
            <div>
              <p className="mono-label text-ink/50 pb-1 px-1">
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
