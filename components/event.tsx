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
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  return (
    <motion.div
      id="services"
      style={{ scale, rotate }}
      className="w-full min-h-screen bg-eventBgColor sticky top-0 left-0">
      <div className="w-full flex items-center justify-between gap-2 pt-36 md:pt-60 px-5 md:px-10">
        <span className="flex text-[13vw] md:text-[110px] uppercase leading-none font-humaneMedium text-white">
          {t.directions.big.split("").map((item: string, i: number) => (
            <motion.p
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{
                delay: i * 0.05,
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1],
              }}
              viewport={{ once: true }}
              key={i}>
              {item}
            </motion.p>
          ))}
        </span>
        <h1 className="hidden md:block text-[22px] font-helveticaNeue leading-[0.9] text-white uppercase text-right">
          {t.directions.subtitlePre}{" "}
          <span className="text-[32px] font-bodoniseventytwo leading-[0.9] lowercase">
            {t.directions.subtitleAccent1}{" "}
          </span>
          {t.directions.subtitleMid}{" "}
          <span className="text-[32px] font-bodoniseventytwo leading-[0.9] lowercase">
            {t.directions.subtitleAccent2}
          </span>
          {t.directions.subtitlePost}
        </h1>
      </div>
      <Slider />
    </motion.div>
  );
}
