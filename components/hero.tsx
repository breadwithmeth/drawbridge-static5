"use client";
import { motion, MotionValue, useTransform } from "framer-motion";
import { useI18n } from "@/i18n/context";
import { ToyPipeline, ToyDisc, PaintStroke } from "@/components/toys";

export default function Hero({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const { t } = useI18n();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -2]);
  return (
    <motion.div
      style={{ scale, rotate }}
      className="w-full h-screen bg-paper sticky top-0 left-0 pb-[10vh] overflow-hidden">
      {/* faint studio grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(20,19,18,0.04) 1px, transparent 1px)",
          backgroundSize: "clamp(60px, 8vw, 120px) 100%",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full px-5">
        <div className="relative flex justify-center">
          <h1 className="text-[11vw] md:text-[8.5vw] uppercase leading-[0.95] tracking-[-0.03em] font-extrabold text-ink text-center relative">
            {t.hero.word}
            {/* toy disc badge overlapping the headline */}
            <div className="absolute -bottom-16 -right-6 md:-bottom-20 md:-right-28 w-[88px] md:w-[200px]">
              <ToyDisc
                label={`${t.hero.circle} · ${t.hero.circle} · `}
                className="toy-float-slow"
              />
            </div>
            {/* small painted accents */}
            <PaintStroke
              className="hidden md:block absolute -left-32 top-4 w-[110px] rotate-[-12deg]"
              color="#FFC529"
            />
          </h1>
        </div>
      </div>
      {/* hero toy object bottom-left */}
      <motion.div
        initial={{ opacity: 0, y: 60, rotate: -4 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-[14vh] left-[6vw] w-[52vw] md:w-[26vw] max-w-[380px]">
        <ToyPipeline className="toy-float" />
      </motion.div>
      <div className="absolute bottom-5 text-center left-1/2 -translate-x-1/2 max-w-[92%] px-2">
        <p className="mono-label text-ink/50 mb-2">AST · Pavlodar — Almaty · 52.28°N 76.96°E</p>
        <h1 className="text-[14px] md:text-[17px] font-medium leading-snug text-ink uppercase tracking-tight">
          {t.hero.tagline}
        </h1>
      </div>
      {/* technical corner labels */}
      <span className="hidden md:block mono-label absolute top-24 left-10 text-ink/40">[ 001 / interface ]</span>
      <span className="hidden md:block mono-label absolute top-24 right-10 text-ink/40">[ hand-painted series ]</span>
    </motion.div>
  );
}
