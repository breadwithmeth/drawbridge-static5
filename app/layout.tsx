import { Navbar } from "@/components";
import { I18nProvider } from "@/i18n/context";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import type { Metadata } from "next";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DRAWBRIDGE — заказная разработка ПО в Казахстане",
  description:
    "Drawbridge — казахстанская IT-компания: веб и мобильная разработка, AI/LLM-решения, интеграции (1С, Kaspi API), IoT и DevOps. Офисы в Павлодаре и Алматы.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body
        className={`${manrope.variable} ${jetbrainsMono.variable}`}
      >
        <I18nProvider>
          <Navbar />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
