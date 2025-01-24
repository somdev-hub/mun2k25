import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: "var(--blue)",
        pink: "var(--pink)",
        purple: "var(--purple)",
        violet: "var(--violet)"
      },
      fontFamily: {
        "days-one": "var(--font-days-one)",
        "lilita-one": "var(--font-lilita-one)",
        lalezar: "var(--font-lalezar)",
        lemon: "var(--font-lemon)"
      }
    }
  },
  plugins: []
} satisfies Config;
