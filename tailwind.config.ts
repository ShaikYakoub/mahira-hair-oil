import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: "#F4E6D4",
        brown: "#6B4F3A",
        deepBrown: "#4A3526",
        mutedGreen: "#5C7A4D",
        gold: "#C49A3A",
      },
      fontFamily: {
        serif: ["var(--font-playfair)"],
        sans: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
export default config;
