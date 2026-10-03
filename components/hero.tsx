"use client";
import { motion, MotionValue, useTransform } from "framer-motion";
import { useI18n } from "@/i18n/context";

export default function Hero({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const { t } = useI18n();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (
    <motion.div
      style={{ scale, rotate }}
      className="w-full h-screen bg-heroColor sticky top-0 left-0 pb-[10vh] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <h1 className="text-[9.5vw] uppercase leading-none tracking-[-2] font-humaneMedium text-white relative">
          {t.hero.word}
          <div className="absolute bottom-16 -right-10 md:bottom-28 md:-right-16">
            <div className="relative">
              <motion.img
                animate={{
                  rotate: [0, 360],
                  transition: {
                    duration: 6,
                    ease: "linear",
                    repeat: Infinity,
                  },
                }}
                src={"/circlerotation.svg"}
                alt="drawbridge"
                width={250}
                height={250}
                className="w-[130px] h-[130px] md:w-[250px] md:h-[250px]"
              />
              <h1 className="text-[20px] md:text-[28px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase leading-tight font-humaneMedium text-black tracking-wide">
                {t.hero.circle}
              </h1>
            </div>
          </div>
        </h1>
      </div>
      <div className="absolute bottom-5 text-center left-1/2 -translate-x-1/2 max-w-[92%] px-2">
        <h1 className="text-[14px] md:text-[18px] font-helveticaNeue leading-snug text-white uppercase">
          {t.hero.tagline}
        </h1>
      </div>
      <div className="hidden md:block absolute -top-20 -right-20">
        <motion.img
          src={"/linedraw.svg"}
          alt="decoration"
          width={300}
          height={300}
          className="w-full h-full rotate-[110deg]"
        />
      </div>
      <div className="hidden md:block absolute bottom-20 -left-20">
        <motion.img
          src={"/linedraw.svg"}
          alt="decoration"
          width={300}
          height={300}
          className="w-full h-full"
        />
      </div>
    </motion.div>
  );
}
