"use client";
import { useRef } from "react";
import { AnimatedText } from "@/components";
import { motion, useScroll, useTransform } from "framer-motion";
import { ToyCloud, ToyShell, PaintBlob, ToyDisc } from "@/components/toys";
import { useI18n } from "@/i18n/context";

export default function WhoWeAre() {
  const { t } = useI18n();
  const container1Ref = useRef(null);
  const container2Ref = useRef(null);

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: container1Ref,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: container2Ref,
    offset: ["start end", "end start"],
  });
  const cq = useTransform(scrollYProgress1, [0, 1], [0, 120]);
  const crq = useTransform(scrollYProgress1, [0, 1], [0, 25]);
  const mq = useTransform(scrollYProgress2, [0, 1], [0, -120]);
  const mrq = useTransform(scrollYProgress2, [0, 1], [0, 25]);

  return (
    <>
      <div
        id="about"
        className="w-full min-h-screen bg-paper pt-16 md:pt-20">
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-5 p-5 md:p-10 md:h-full">
          <div className="w-full md:w-1/2 flex flex-col justify-between gap-5 relative md:h-full">
            <div className="flex flex-col">
              <AnimatedText
                text={t.about.heading[0]}
                className="text-[11vw] md:text-[96px] text-ink overflow-hidden leading-[1] tracking-[-0.03em]"
              />
              <AnimatedText
                text={t.about.heading[1]}
                className="text-[11vw] md:text-[96px] text-orange overflow-hidden leading-[1] tracking-[-0.03em]"
              />
            </div>
            <span className="hidden md:block mono-label text-ink/40 absolute top-1/2 -left-1/4 -translate-y-1/2 rotate-90 origin-left">
              [ about — drawbridge ]
            </span>
            <div className="w-full flex justify-end items-end">
              <motion.p className="w-full md:w-1/2 leading-relaxed text-base md:text-lg font-medium text-ink/80">
                {t.about.paragraph}
              </motion.p>
            </div>
          </div>
          <div
            ref={container1Ref}
            className="w-full md:w-1/2 relative min-h-[55vh] md:h-full flex justify-end items-start mt-4 md:mt-0">
            <div className="w-full max-w-[520px] toy-float">
              <ToyCloud />
            </div>
            <motion.div
              className="hidden md:block absolute top-0 right-12"
              style={{ y: cq, rotate: crq }}>
              <PaintBlob className="w-[90px] md:w-[160px]" color="#FFC529" />
            </motion.div>
            <div className="hidden md:block absolute -bottom-[8%] left-[20%] w-[160px] md:w-[220px]">
              <ToyDisc
                label={`${t.about.circle} · ${t.about.circle} · `}
                paint="#2B4EE6"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full min-h-screen bg-paperWarm py-10 md:py-20">
        <div className="w-full flex h-full relative">
          <div
            ref={container2Ref}
            className="hidden md:flex w-1/4 flex-col justify-between gap-5 relative h-full">
            <motion.div
              className="flex flex-col"
              style={{ y: mq, rotate: mrq }}>
              <div className="w-[200px]">
                <ToyShell />
              </div>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2 h-full flex justify-center items-center relative z-50 px-4">
            <div className="flex flex-col gap-14">
              <motion.p className="text-center leading-tight tracking-tight text-[18px] font-semibold uppercase text-ink/70 flex items-center justify-center gap-3 flex-col">
                {t.about.label}
              </motion.p>
              <div className="w-full flex flex-col items-center justify-center overflow-hidden">
                {t.about.lines.map((line, i) => (
                  <AnimatedText
                    key={i}
                    className="text-ink leading-[1.05] text-[5.5vw] md:text-[52px] overflow-hidden text-center whitespace-nowrap tracking-[-0.02em]"
                    text={line}
                  />
                ))}
              </div>
            </div>
            <motion.div
              className="hidden md:block absolute -bottom-40 -right-10 overflow-hidden"
              style={{ y: mq, rotate: mrq }}>
              <PaintBlob className="w-[120px]" color="#F0533F" />
            </motion.div>
          </div>
          <span className="hidden md:block mono-label text-ink/40 absolute top-1/2 -right-16 -translate-y-1/2 -rotate-90 origin-right">
            [ molded · painted · assembled ]
          </span>
        </div>
      </div>
    </>
  );
}
