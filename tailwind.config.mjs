import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        dark: "var(--dark)",
        ink: "var(--ink)",
        primary: {
          DEFAULT: "var(--primary)",
          dark: "var(--primary-dark)",
          light: "var(--primary-light)",
        },
        "brand-green": "var(--green)",
        grey: "var(--grey)",
        "x-19-1a-23": "var(--x-19-1a-23)",
      },
      fontFamily: {
        sans: ["Space Grotesk", "Helvetica", "sans-serif"],
        "h-1": "var(--h-1-font-family)",
        "h-2": "var(--h-2-font-family)",
        "h-3": "var(--h-3-font-family)",
        "h-4": "var(--h-4-font-family)",
        p: "var(--p-font-family)",
      },
      boxShadow: {
        shadow: "var(--shadow)",
        glow: "0 8px 32px rgba(225, 66, 66, 0.12)",
        card: "0 4px 24px rgba(25, 26, 35, 0.06)",
      },
      animation: {
        "fade-in-down": "fadeInDown 0.25s ease-out",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [typography, forms],
};
