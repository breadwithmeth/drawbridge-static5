"use client";
import Button from "./button";
import { motion } from "framer-motion";
import { ToyDisc, PaintStroke } from "@/components/toys";
import { CONTACTS } from "@/constants";
import { useI18n } from "@/i18n/context";

export default function Footer() {
  const { t } = useI18n();
  return (
    <div
      id="contacts"
      className="w-full pt-20 md:pt-40 px-5 md:px-10 bg-ink relative overflow-hidden">
      {/* painted accents in the dark field */}
      <PaintStroke
        className="absolute top-16 left-[4%] w-[160px] rotate-[-8deg] opacity-70"
        color="#F96A1B"
      />
      <PaintStroke
        className="absolute bottom-32 right-[6%] w-[120px] rotate-[10deg] opacity-60"
        color="#5FD3A5"
      />
      <h1 className="text-[10vw] uppercase leading-none text-center tracking-[-0.03em] font-extrabold text-paper">
        {t.footer.big}
      </h1>
      <div className="relative w-full flex items-center justify-center py-10">
        <div className="w-[220px] md:w-[280px]">
          <ToyDisc
            label={`${t.footer.circle} · ${t.footer.circle} · `}
            paint="#FFC529"
          />
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center py-10 md:py-16 gap-6 md:gap-8">
        <p className="mono-label text-paper/50">
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
        <p className="text-[16px] uppercase font-mono text-paper tracking-tight">
          {CONTACTS.phone} · {t.footer.cities}
        </p>
      </div>
      <div className="w-full flex items-center justify-center py-5 border-t border-paper/10">
        <h1 className="mono-label text-paper/40">
          {t.footer.copyright}
        </h1>
      </div>
    </div>
  );
}
