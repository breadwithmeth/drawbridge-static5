"use client";
import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public";
import { Menu } from "@/components";
import { Button } from "@/components";
import { useI18n } from "@/i18n/context";
import { langLabels } from "@/i18n/translations";
import { CONTACTS } from "@/constants";

export function LangSwitcher() {
  const { lang, setLang } = useI18n();
  return (
    <div className="flex items-center border-[1.5px] border-white rounded-full overflow-hidden">
      {langLabels.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          className={`px-2.5 py-1 text-xs uppercase font-helveticaNeue transition-all duration-200 ${
            lang === code
              ? "bg-white text-black"
              : "text-white hover:bg-white/20"
          }`}>
          {label}
        </button>
      ))}
    </div>
  );
}

export default function Navbar() {
  const { t } = useI18n();
  return (
    <div className="fixed top-0 left-0 w-full flex justify-between items-center py-3 md:py-5 px-5 md:px-10 z-50 backdrop-blur-sm">
      <Link href="/" className="flex items-center gap-3">
        <Image src={logo} alt="Drawbridge" width={56} height={42} />
        <div className="flex flex-col">
          <span className="text-xl md:text-2xl uppercase text-white font-humaneMedium tracking-wide leading-none">
            Drawbridge
          </span>
          <span className="hidden sm:block text-[11px] uppercase text-white/60 font-helveticaNeue leading-tight">
            {t.navbar.tagline}
          </span>
        </div>
      </Link>
      <div>
        <Menu />
      </div>
      <div className="flex items-center gap-2">
        <LangSwitcher />
        <a href={CONTACTS.telegram} target="_blank" rel="noreferrer" className="hidden lg:block">
          <Button title={t.navbar.discuss} />
        </a>
      </div>
    </div>
  );
}
