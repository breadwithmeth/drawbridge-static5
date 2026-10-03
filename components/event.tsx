"use client";
import { Slider } from "@/components";
import { motion, MotionValue, useTransform } from "framer-motion";
import { useI18n } from "@/i18n/context";

export default function Event({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const { t } = useI18n();
  const rotate = useTransform(scrollYProgress, [0, 1], [2, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);
  return (
    <motion.div
      id="services"
      style={{ scale, rotate }}
      className="w-full min-h-screen bg-paperWarm sticky top-0 left-0">
      <div className="w-full flex items-end justify-between gap-2 pt-32 md:pt-56 px-5 md:px-10">
        <span className="flex text-[13vw] md:text-[110px] uppercase leading-none font-extrabold text-ink tracking-[-0.03em]">
          {t.directions.big.split("").map((item: string, i: number) => (
            <motion.p
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{
                delay: i * 0.04,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              key={i}>
              {item}
            </motion.p>
          ))}
        </span>
        <h1 className="hidden md:block text-[18px] font-medium leading-[1.1] text-ink/70 uppercase text-right max-w-[360px]">
          {t.directions.subtitlePre}{" "}
          <span className="text-[26px] font-bold text-ink lowercase">
            {t.directions.subtitleAccent1}{" "}
          </span>
          {t.directions.subtitleMid}{" "}
          <span className="text-[26px] font-bold text-ink lowercase">
            {t.directions.subtitleAccent2}
          </span>
          {t.directions.subtitlePost}
        </h1>
      </div>
      <Slider />
    </motion.div>
  );
}
