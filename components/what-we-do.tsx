"use client";
import Image from "next/image";
import { AnimatedText } from "@/components";
import { devopsPhotos } from "@/constants";
import { useI18n } from "@/i18n/context";

export default function WhatWeDo() {
  const { t } = useI18n();
  const imgs = devopsPhotos;
  return (
    <>
      <div className="w-full py-20 bg-eventBgColor mt-20">
        <div className="w-full flex items-center justify-between gap-2 pt-36 md:pt-60 px-5 md:px-10">
          <AnimatedText
            text={t.devops.heading}
            className="text-[7vw] md:text-[46px] text-white overflow-hidden leading-[1.05]"
          />
          <h1 className="hidden md:block text-[18px] font-helveticaNeue leading-[1.2] text-white uppercase text-right max-w-[420px]">
            {t.devops.subtitlePre}
            <span className="text-[32px] font-bodoniseventytwo leading-[0.9] lowercase">
              {t.devops.subtitleAccent1}
            </span>
            {t.devops.subtitleMid}
            <span className="text-[32px] font-bodoniseventytwo leading-[0.9] lowercase">
              {t.devops.subtitleAccent2}
            </span>
          </h1>
        </div>
      </div>
      <div className="w-full min-h-screen flex flex-col md:flex-row items-stretch">
        {t.devops.cards.map((card, i) => (
          <div
            key={i}
            className="w-full h-full cursor-pointer relative p-10"
            style={{ background: ["#FFC700", "#FF6B00", "#FFB03B"][i] }}>
            <div className="w-full flex items-center justify-center h-full">
              <Image
                src={imgs[i]}
                alt={card.title}
                width={400}
                height={400}
                className="w-[70vw] max-w-[400px] h-[70vw] max-h-[400px] object-cover rounded-[40px]"
              />
            </div>
            <div className="absolute bottom-0">
              <h2 className="text-[9vw] md:text-[54px] uppercase leading-[1] text-[#1c1c1c] font-humaneMedium">
                {card.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
