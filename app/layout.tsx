import { Navbar } from "@/components";
import { I18nProvider } from "@/i18n/context";
import { Unbounded, Geologica, Manrope } from "next/font/google";
import "@/styles/globals.css";
import type { Metadata } from "next";

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-unbounded",
  display: "swap",
});

const geologica = Geologica({
  subsets: ["latin", "cyrillic"],
  variable: "--font-geologica",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
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
        className={`${unbounded.variable} ${geologica.variable} ${manrope.variable}`}
      >
        <I18nProvider>
          <Navbar />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
