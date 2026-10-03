"use client";
import { serviceArrow } from "@/constants";
import { AnimatedText } from "@/components";
import { useI18n } from "@/i18n/context";

export default function PartyTolls() {
  const { t } = useI18n();
  return (
    <>
      <div className="w-full py-20 bg-paper">
        <div className="w-full flex items-end justify-between gap-2 pt-20 md:pt-40 pb-6 md:pb-10 px-5 md:px-10">
          <AnimatedText
            text={t.services.heading}
            className="text-[6vw] md:text-[54px] text-ink overflow-hidden leading-[1] tracking-[-0.03em]"
          />
          <h1 className="hidden md:block text-[18px] font-medium leading-none text-ink/70 uppercase text-right">
            {t.services.subtitlePre}
            <span className="text-[28px] font-bold text-ink lowercase">
              {t.services.subtitleAccent}
            </span>
            {t.services.subtitlePost}
          </h1>
        </div>
        <div className="w-full flex flex-col">
          {t.services.items.map((item, i) => (
            <div
              className="w-full flex items-center justify-between pt-4 hover:bg-paperWarm px-5 md:px-10 border-b border-line cursor-pointer group transition-colors duration-200"
              key={i}>
              <h1 className="text-[6vw] md:text-[30px] font-bold leading-[1.25] text-ink uppercase tracking-[-0.02em] group-hover:translate-x-8 group-hover:text-orange transition-all duration-300 ease-out">
                {item}
              </h1>
              <span className="text-ink/30 group-hover:text-orange transition-all duration-300">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 md:w-10 md:h-10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5">
                  <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
