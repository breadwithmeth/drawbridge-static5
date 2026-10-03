"use client";
import { AnimatedText } from "@/components";
import { ToyAutomation, PaintStroke } from "@/components/toys";
import { motion, MotionValue, useTransform } from "framer-motion";
import { useI18n } from "@/i18n/context";

export default function OnDemand({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const { t } = useI18n();
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.94, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.3], [-2, 0]);
  return (
    <>
      <div
        id="approach"
        className="w-full min-h-screen flex items-center justify-center py-24 bg-paper">
        <div className="w-full flex flex-col items-center justify-center gap-10 overflow-hidden">
          <AnimatedText
            className="leading-none text-ink text-[13vw] md:text-[96px] tracking-[-0.03em]"
            text={t.approach.heading}
          />
          <p className="md:hidden text-ink/70 text-center text-base leading-snug font-medium px-2">
            {t.approach.introLines.join(" ")}
          </p>
          <div className="hidden md:flex flex-col gap-2 items-center justify-center overflow-hidden text-center">
            {t.approach.introLines.map((line, i) => (
              <AnimatedText
                key={i}
                className="text-ink/80 leading-[1.2] text-[30px]"
                text={line}
              />
            ))}
          </div>
        </div>
      </div>
      <motion.div
        style={{ scale, rotate }}
        className="w-full h-screen sticky top-0 left-0 overflow-hidden bg-paperWarm flex items-center justify-center">
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 pointer-events-none z-0">
          <h1 className="text-[9vw] uppercase leading-tight whitespace-nowrap tracking-[-0.03em] font-extrabold text-ink/85">
            {t.approach.overlay}
          </h1>
        </div>
        {/* big automation mechanism in front */}
        <div className="relative z-10 w-[70vw] max-w-[560px] toy-float mt-[16vh]">
          <ToyAutomation />
        </div>
        <PaintStroke
          className="absolute top-[14%] right-[8%] w-[180px] rotate-[8deg] z-0"
          color="#2B4EE6"
        />
        <PaintStroke
          className="absolute bottom-[16%] left-[7%] w-[140px] rotate-[-6deg] z-0"
          color="#FFC529"
        />
        <div className="absolute bottom-5 text-center left-1/2 -translate-x-1/2">
          <h1 className="text-[18px] font-medium leading-tight text-ink/80 uppercase">
            {t.approach.captionPre}
            <span className="text-[28px] font-bold text-ink lowercase">
              {t.approach.captionAccent}
            </span>
            {t.approach.captionPost}
          </h1>
        </div>
      </motion.div>
    </>
  );
}
