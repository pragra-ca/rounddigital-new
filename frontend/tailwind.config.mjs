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
        green: "var(--green)",
        grey: "var(--grey)",
        "x-19-1a-23": "var(--x-19-1a-23)",
      },
      fontFamily: {
        "h-1": "var(--h-1-font-family)",
        "h-2": "var(--h-2-font-family)",
        "h-3": "var(--h-3-font-family)",
        "h-4": "var(--h-4-font-family)",
        p: "var(--p-font-family)",
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        shadow: "var(--shadow)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
