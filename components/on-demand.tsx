"use client";
import Image from "next/image";
import { AnimatedText } from "@/components";
import { approachBg } from "@/constants";
import { motion, MotionValue, useTransform } from "framer-motion";
import { useI18n } from "@/i18n/context";

export default function OnDemand({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const { t } = useI18n();
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.3], [-5, 0]);
  return (
    <>
      <div
        id="approach"
        className="w-full min-h-screen flex items-center justify-center py-24">
        <div className="w-full flex flex-col items-center justify-center gap-10 overflow-hidden">
          <AnimatedText
            className="leading-none text-white text-[13vw] md:text-[110px]"
            text={t.approach.heading}
          />
          <p className="md:hidden text-white text-center text-base leading-snug uppercase font-helveticaNeue px-2">
            {t.approach.introLines.join(" ")}
          </p>
          <div className="hidden md:flex flex-col gap-2 items-center justify-center overflow-hidden text-center">
            {t.approach.introLines.map((line, i) => (
              <AnimatedText
                key={i}
                className="text-white leading-[1.15] text-[38px]"
                text={line}
              />
            ))}
          </div>
        </div>
      </div>
      <motion.div
        style={{ scale, rotate }}
        className="w-full h-screen sticky top-0 left-0 overflow-hidden">
        <div className="w-full h-full">
          <Image
            src={approachBg}
            alt="Drawbridge approach"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="text-[9vw] uppercase leading-tight whitespace-nowrap tracking-[-2] font-humaneMedium text-white">
            {t.approach.overlay}
          </h1>
        </div>
        <div className="absolute bottom-5 text-center left-1/2 -translate-x-1/2">
          <h1 className="text-[22px] font-helveticaNeue leading-tight text-white uppercase">
            {t.approach.captionPre}
            <span className="text-[34px] font-bodoniseventytwo leading-tight lowercase">
              {t.approach.captionAccent}
            </span>
            {t.approach.captionPost}
          </h1>
        </div>
      </motion.div>
    </>
  );
}
