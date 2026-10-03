import { arrowUp } from "@/public";

const u = (file: string) => `/unsplash/${file}`;

export const CONTACTS = {
  telegram: "https://t.me/shrvse",
  whatsapp: "https://wa.me/77054810862",
  email: "mailto:shrvse@drawbridge.kz",
  emailLabel: "shrvse@drawbridge.kz",
  phone: "+7 705 481 08 62",
};

// Unsplash photos for the 4 direction cards
export const directionItems = [
  { id: 1, src: u("web-mobile.jpg"), color: "#fff" }, // smartphone / web & mobile
  { id: 2, src: u("ai-llm.jpg"), color: "#000" }, // AI
  { id: 3, src: u("integrations.jpg"), color: "#fff" }, // analytics / integrations
  { id: 4, src: u("iot.jpg"), color: "#000" }, // circuit board / IoT
];

export const approachBg = u("approach-bg.jpg"); // dark earth network

// 3D illustrations for the DevOps cards
export const devopsPhotos = ["/cicd.jpg", "/monitoring.jpg", "/cloud.jpg"];

export const decorPhotos = [
  u("decor-1.jpg"), // abstract wave
  u("decor-2.jpg"), // abstract paint
  u("decor-3.jpg"), // abstract
];

// Colors for the 4 approach stage cards
export const stageItems = [
  { id: 1, color: "#FF6B00", text: "#fff" },
  { id: 2, color: "#FFB03B", text: "#1c1c1c" },
  { id: 3, color: "#FFC700", text: "#1c1c1c" },
  { id: 4, color: "#1c1c1c", text: "#fff" },
];

export const serviceArrow = arrowUp;
