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
        ink: "#141312",
        paper: "#FFFFFF",
        paperWarm: "#FAF7F2",
        orange: {
          DEFAULT: "#F96A1B",
          soft: "#FF8B47",
          deep: "#D9540E",
        },
        cobalt: "#2B4EE6",
        yellow: "#FFC529",
        mint: "#5FD3A5",
        coral: "#F0533F",
        line: "#E8E2D8",
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'Manrope', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        card: "0 1px 2px rgba(20,19,18,0.04), 0 8px 24px rgba(20,19,18,0.06)",
        toy: "0 24px 40px -18px rgba(20,19,18,0.22)",
      },
    },
  },
  plugins: [],
};
export default config;
