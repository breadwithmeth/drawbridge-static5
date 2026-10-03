import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        heroColor: "#FF6B00",
        greenColor: "#FFC700",
        eventBgColor: "#1C1C1C",
      },
      fontFamily: {
        helveticaNeue: ['var(--font-manrope)', 'Manrope', 'sans-serif'],
        bodoniseventytwo: ['var(--font-geologica)', 'Geologica', 'sans-serif'],
        humaneMedium: ['var(--font-unbounded)', 'Unbounded', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
