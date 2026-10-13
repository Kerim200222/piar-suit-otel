import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#d4af37",
          light: "#e5c866",
          dark: "#b39126",
        },
        secondary: {
          DEFAULT: "#1a1a1a",
          light: "#2c2c2c",
          dark: "#0f0f0f",
        },
        background: "#faf9f6",
        foreground: "#1a1a1a",
        luxury: {
          gold: "#d4af37",
          dark: "#1a1a1a",
          cream: "#faf9f6",
          sand: "#f4f0e8",
          charcoal: "#262626",
          bronze: "#9c7c2b",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
        heading: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        body: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

