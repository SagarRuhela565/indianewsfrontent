/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"], // enable dark mode via class strategy
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { "2xl": "1430px" },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
      colors: {
        // === base neutral palette ===
        base: {
          white: "#ffffff",
          black: "#0B0B0C",
          50:  "#f8f9fb",
          100: "#f2f3f5",
          200: "#e6e8ec",
          300: "#d0d4db",
          400: "#a6adbb",
          500: "#7b8496",
          600: "#5b6374",
          700: "#3f4654",
          800: "#2a2f38",
          900: "#191c22",
        },
        // === brand red ===
        brand: {
          50:  "#FFF1F2",
          100: "#FFE1E3",
          200: "#FFC8CC",
          300: "#FFA4A9",
          400: "#FF727E",
          500: "#E11D48", // 🔴 primary
          600: "#C11639",
          700: "#9A132F",
          800: "#751027",
          900: "#4C0A19",
        },
        // === accent blue (links) ===
        accent: {
          50:  "#F0F6FF",
          100: "#DCE9FF",
          200: "#BCD5FF",
          300: "#8FBBFF",
          400: "#5A99FF",
          500: "#2C79FF",
          600: "#1E5FE0",
          700: "#194BB2",
          800: "#153E8F",
          900: "#112F6B",
        },

        // === semantic tokens ===
        bg: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        edge: "rgb(var(--edge) / <alpha-value>)",

        text: {
          normal: "rgb(var(--text) / <alpha-value>)",
          muted: "rgb(var(--text-muted) / <alpha-value>)",
          inverse: "rgb(var(--text-inverse) / <alpha-value>)",
        },

        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          fg: "rgb(var(--on-primary) / <alpha-value>)",
        },
        link: {
          DEFAULT: "rgb(var(--link) / <alpha-value>)",
          hover: "rgb(var(--link-hover) / <alpha-value>)",
        },
        ring: "rgb(var(--ring) / <alpha-value>)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,0.06)",
        pop: "0 10px 30px rgba(225,29,72,0.22)", // brand glow
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
