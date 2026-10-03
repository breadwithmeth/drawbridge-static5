"use client";
import Image from "next/image";
import Button from "./button";
import { motion } from "framer-motion";
import { flowCurveTextWhite } from "@/public";
import { CONTACTS } from "@/constants";
import { useI18n } from "@/i18n/context";

export default function Footer() {
  const { t } = useI18n();
  return (
    <div
      id="contacts"
      className="w-full pt-20 md:pt-40 px-5 md:px-10">
      <h1 className="text-[10vw] uppercase leading-none text-center tracking-[-2] font-humaneMedium text-white">
        {t.footer.big}
      </h1>
      <div className="relative w-full flex items-center justify-center">
        <Image
          src={flowCurveTextWhite}
          alt="drawbridge"
          width={1000}
          height={1000}
          className="w-full md:w-[70%] h-full object-cover"
        />
        <div className="absolute -bottom-10 right-4 md:-bottom-20 md:right-80">
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
              className="w-[250px] h-[250px]"
            />
            <h1 className="text-[32px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase leading-tight font-humaneMedium text-black">
              {t.footer.circle}
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center py-14 md:py-20 gap-6 md:gap-8">
        <p className="text-[16px] uppercase font-helveticaNeue text-white/60 tracking-tight">
          {t.footer.contactsTitle}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href={CONTACTS.telegram} target="_blank" rel="noreferrer">
            <Button title={t.footer.tg} />
          </a>
          <a href={CONTACTS.whatsapp} target="_blank" rel="noreferrer">
            <Button title={t.footer.wa} />
          </a>
          <a href={CONTACTS.email}>
            <Button title={CONTACTS.emailLabel} />
          </a>
        </div>
        <p className="text-[18px] uppercase font-helveticaNeue text-white tracking-tight">
          {CONTACTS.phone} · {t.footer.cities}
        </p>
      </div>
      <div className="w-full flex items-center justify-center py-5">
        <h1 className="text-[16px] uppercase leading-tight font-helveticaNeue text-white/60">
          {t.footer.copyright}
        </h1>
      </div>
    </div>
  );
}
