"use client";
import Image from "next/image";
import { serviceArrow } from "@/constants";
import { AnimatedText } from "@/components";
import { useI18n } from "@/i18n/context";

export default function PartyTolls() {
  const { t } = useI18n();
  return (
    <>
      <div className="w-full py-20 bg-[#FF6B00]">
        <div className="w-full flex items-center justify-between gap-2 pt-20 md:pt-40 pb-6 md:pb-10 px-5 md:px-10">
          <AnimatedText
            text={t.services.heading}
            className="text-[6vw] md:text-[54px] text-[#1c1c1c] overflow-hidden leading-[1]"
          />
          <h1 className="hidden md:block text-[24px] font-helveticaNeue leading-none text-[#1c1c1c] uppercase text-right">
            {t.services.subtitlePre}
            <span className="text-[34px] font-bodoniseventytwo leading-[0.9] lowercase">
              {t.services.subtitleAccent}
            </span>
            {t.services.subtitlePost}
          </h1>
        </div>
        <div className="w-full flex flex-col">
          {t.services.items.map((item, i) => (
            <div
              className="w-full flex items-center justify-between pt-4 hover:bg-black/10 px-5 md:px-10 border-b border-black cursor-pointer group"
              key={i}>
              <h1 className="text-[6vw] md:text-[34px] font-humaneMedium leading-[1.2] text-[#1c1c1c] uppercase group-hover:translate-x-10 transition-all duration-200 ease-in-out">
                {item}
              </h1>
              <Image
                src={serviceArrow}
                alt="arrow"
                width={80}
                height={80}
                className="w-[36px] h-[36px] md:w-[80px] md:h-[80px] object-cover group-hover:-translate-x-10 transition-all duration-200 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
