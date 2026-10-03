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
    <div className="flex items-center border-[1.5px] border-ink/25 rounded-full overflow-hidden font-mono">
      {langLabels.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          className={`px-2.5 py-1 text-xs uppercase transition-all duration-200 ${
            lang === code
              ? "bg-ink text-white"
              : "text-ink/60 hover:bg-ink/10"
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
    <div className="fixed top-0 left-0 w-full flex justify-between items-center py-3 md:py-5 px-5 md:px-10 z-50">
      <Link href="/" className="flex items-center gap-3 bg-paper/80 backdrop-blur-sm rounded-xl px-3 py-1.5 -ml-3 shadow-card">
        <Image src={logo} alt="Drawbridge" width={56} height={42} />
        <div className="flex flex-col">
          <span className="text-lg md:text-xl uppercase text-ink font-extrabold tracking-tight leading-none">
            Drawbridge
          </span>
          <span className="hidden sm:block mono-label text-ink/50 leading-tight">
            {t.navbar.tagline}
          </span>
        </div>
      </Link>
      <div>
        <Menu />
      </div>
      <div className="flex items-center gap-2 bg-paper/80 backdrop-blur-sm rounded-xl px-3 py-1.5 -mr-3 shadow-card">
        <LangSwitcher />
        <a href={CONTACTS.telegram} target="_blank" rel="noreferrer" className="hidden lg:block">
          <Button title={t.navbar.discuss} />
        </a>
      </div>
    </div>
  );
}
