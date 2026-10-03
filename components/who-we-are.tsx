"use client";
import Image from "next/image";
import { useRef } from "react";
import { AnimatedText } from "@/components";
import { motion, useScroll, useTransform } from "framer-motion";
import { flowCurveText, whoweareline } from "@/public";
import { decorPhotos } from "@/constants";
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
  const cq = useTransform(scrollYProgress1, [0, 1], [0, 200]);
  const crq = useTransform(scrollYProgress1, [0, 1], [0, 40]);
  const mq = useTransform(scrollYProgress2, [0, 1], [0, -200]);
  const mrq = useTransform(scrollYProgress2, [0, 1], [0, 40]);

  return (
    <>
      <div
        id="about"
        className="w-full min-h-screen bg-greenColor pt-16 md:pt-20">
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-5 p-5 md:p-10 md:h-full">
          <div className="w-full md:w-1/2 flex flex-col justify-between gap-5 relative md:h-full">
            <div className="flex flex-col">
              <AnimatedText
                text={t.about.heading[0]}
                className="text-[11vw] md:text-[110px] text-[#1c1c1c] overflow-hidden leading-[1]"
              />
              <AnimatedText
                text={t.about.heading[1]}
                className="text-[11vw] md:text-[110px] text-[#1c1c1c] overflow-hidden leading-[1]"
              />
            </div>
            <div className="hidden md:block absolute top-1/2 -left-1/4 -translate-y-1/2 overflow-hidden">
              <Image
                src={whoweareline}
                alt="decoration"
                width={300}
                height={300}
              />
            </div>
            <div className="w-full flex justify-end items-end">
              <motion.p className="w-full md:w-1/2 leading-tight text-base md:text-lg uppercase font-helveticaNeue text-[#1c1c1c]">
                {t.about.paragraph}
              </motion.p>
            </div>
          </div>
          <div
            ref={container1Ref}
            className="w-full md:w-1/2 relative min-h-[55vh] md:h-full flex justify-end items-start mt-4 md:mt-0">
            <Image
              src={flowCurveText}
              alt="decoration"
              width={700}
              height={700}
              className="w-full max-w-[700px] h-auto"
            />
            <motion.div
              className="hidden md:block absolute top-0 right-12"
              style={{ y: cq, rotate: crq }}>
              <Image
                src={decorPhotos[0]}
                alt="decoration"
                width={300}
                height={300}
                className="w-[140px] h-[140px] md:w-[300px] md:h-[300px] object-cover rounded-full"
              />
            </motion.div>
            <div className="hidden md:block absolute -bottom-[8%] left-[20%]">
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
                <h1 className="text-[20px] md:text-[32px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase leading-tight font-humaneMedium text-black">
                  {t.about.circle}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full min-h-screen bg-greenColor py-10 md:py-20">
        <div className="w-full flex h-full relative">
          <div
            ref={container2Ref}
            className="hidden md:flex w-1/4 flex-col justify-between gap-5 relative h-full">
            <motion.div
              className="flex flex-col"
              style={{ y: mq, rotate: mrq }}>
              <Image
                src={decorPhotos[2]}
                alt="decoration"
                width={300}
                height={300}
                className="w-[140px] h-[140px] md:w-[300px] md:h-[300px] object-cover rounded-full"
              />
            </motion.div>
          </div>
          <div className="w-full md:w-1/2 h-full flex justify-center items-center relative z-50 px-4">
            <div className="flex flex-col gap-14">
              <motion.p className="text-center leading-tight tracking-tight text-[18px] uppercase font-medium font-bodoniseventytwo text-[#1c1c1c] flex items-center justify-center gap-3 flex-col">
                {t.about.label}
              </motion.p>
              <div className="w-full flex flex-col items-center justify-center overflow-hidden">
                {t.about.lines.map((line, i) => (
                  <AnimatedText
                    key={i}
                    className="text-[#1c1c1c] leading-[1] text-[5.5vw] md:text-[62px] overflow-hidden text-center whitespace-nowrap"
                    text={line}
                  />
                ))}
              </div>
            </div>
            <motion.div
              className="hidden md:block absolute -bottom-40 -right-10 overflow-hidden"
              style={{ y: mq, rotate: mrq }}>
              <Image
                src={decorPhotos[1]}
                alt="decoration"
                width={300}
                height={300}
                className="w-[140px] h-[140px] md:w-[300px] md:h-[300px] object-cover rounded-full"
              />
            </motion.div>
          </div>
          <div className="hidden md:block w-1/4 h-full overflow-hidden">
            <Image
              src={whoweareline}
              alt="decoration"
              width={400}
              height={400}
              className="absolute top-1/2 -right-20 -translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </>
  );
}
