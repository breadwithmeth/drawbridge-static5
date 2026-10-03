"use client";
import { AnimatedText } from "@/components";
import { ToyPipeline, ToyMonitor, ToyCloud } from "@/components/toys";
import { useI18n } from "@/i18n/context";

const toys = [ToyPipeline, ToyMonitor, ToyCloud];
const tags = ["ci / cd", "observe", "scale"];

export default function WhatWeDo() {
  const { t } = useI18n();
  return (
    <>
      <div className="w-full pt-20 pb-6 bg-paper mt-20">
        <div className="w-full flex items-end justify-between gap-2 px-5 md:px-10">
          <AnimatedText
            text={t.devops.heading}
            className="text-[7vw] md:text-[46px] text-ink overflow-hidden leading-[1.05] tracking-[-0.02em]"
          />
          <h1 className="hidden md:block text-[16px] font-medium leading-[1.2] text-ink/70 uppercase text-right max-w-[420px]">
            {t.devops.subtitlePre}
            <span className="text-[26px] font-bold text-ink lowercase">
              {t.devops.subtitleAccent1}
            </span>
            {t.devops.subtitleMid}
            <span className="text-[26px] font-bold text-ink lowercase">
              {t.devops.subtitleAccent2}
            </span>
          </h1>
        </div>
      </div>
      <div className="w-full min-h-screen flex flex-col md:flex-row items-stretch px-3 md:px-4 pb-4 gap-3 md:gap-4">
        {t.devops.cards.map((card, i) => {
          const Toy = toys[i % toys.length];
          return (
            <div
              key={i}
              className="w-full h-full cursor-pointer relative p-3 md:p-4">
              <div className="w-full h-full bg-paperWarm rounded-[24px] md:rounded-[32px] border border-line shadow-card relative overflow-hidden flex flex-col p-6 md:p-8 min-h-[420px]">
                <div className="flex items-start justify-between">
                  <span className="mono-label text-ink/40">0{i + 1} · {tags[i]}</span>
                  <span
                    className="mono-label px-3 py-1 rounded-full border-[1.5px]"
                    style={{
                      color: ["#F96A1B", "#2B4EE6", "#5FD3A5"][i],
                      borderColor: ["#F96A1B", "#2B4EE6", "#5FD3A5"][i],
                    }}>
                    devops
                  </span>
                </div>
                <div className="flex-1 flex items-center justify-center py-6">
                  <div className="w-[80%] max-w-[320px] toy-float">
                    <Toy />
                  </div>
                </div>
                <h2 className="text-[8vw] md:text-[38px] uppercase leading-[1] text-ink font-extrabold tracking-[-0.02em]">
                  {card.title}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
