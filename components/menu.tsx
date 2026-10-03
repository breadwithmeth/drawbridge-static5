"use client";
import { useState } from "react";
import TextHover from "./text-hover";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n/context";
import { LangSwitcher } from "./navbar";

export default function Menu() {
  const [hidden, setHidden] = useState(true);
  const { t } = useI18n();

  return (
    <div className="relative -translate-x-1/2 left-[62%] md:left-[35%] z-[999]">
      {/* sliding panel */}
      <motion.div
        initial={{ y: -600 }}
        animate={hidden ? { y: -600 } : { y: 0 }}
        transition={{ duration: 0.6, ease: [0.34, 1.2, 0.4, 1], type: "tween" }}
        className="fixed top-24 left-1/2 ml-[-46vw] w-[92vw] md:ml-[-270px] md:w-[540px]">
        <div className="bg-paperWarm p-6 md:p-10 rounded-[20px] md:rounded-[28px] shadow-card border border-line">
          {t.nav.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setHidden(true)}
              className="flex py-2 flex-col cursor-pointer group">
              <TextHover
                titile1={item.title}
                titile2={item.title}
              />
              <span className="w-full border-b border-line group-hover:border-orange transition-colors" />
            </a>
          ))}
          <div className="w-full flex items-center justify-center py-3 gap-2">
            <LangSwitcher />
          </div>
        </div>
      </motion.div>
      {/* always-visible burger */}
      <button
        type="button"
        onClick={() => setHidden(!hidden)}
        aria-label={hidden ? "Открыть меню" : "Закрыть меню"}
        aria-expanded={!hidden}
        className="relative cursor-pointer w-12 h-12 md:w-14 md:h-14 rounded-[16px] bg-ink shadow-card flex flex-col items-center justify-center gap-[5px] transition-transform duration-200 active:scale-95">
        <span
          className={`w-[22px] h-[2px] transition ease-out duration-200 bg-white ${
            !hidden ? "rotate-45 translate-y-[7px]" : ""
          }`}
        />
        <span
          className={`w-[22px] h-[2px] transition ease-out duration-200 bg-white ${
            !hidden ? "opacity-0" : ""
          }`}
        />
        <span
          className={`w-[22px] h-[2px] transition ease-out duration-200 bg-white ${
            !hidden ? "-rotate-45 -translate-y-[7px]" : ""
          }`}
        />
      </button>
    </div>
  );
}
