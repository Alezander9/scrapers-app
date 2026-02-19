const animate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
      },
      colors: {
        border: "var(--border)",
        page: { bg: "var(--page-bg)" },
        element: { bg: "var(--element-bg)" },
        button: {
          primary: { bg: "var(--primary-button-bg)" },
          label: "var(--button-label)",
        },
        stroke: {
          DEFAULT: "var(--stroke)",
          muted: "var(--stroke-muted)",
        },
        copy: {
          strong: "var(--copy-strong)",
          secondary: "var(--copy-secondary)",
          muted: "var(--copy-muted)",
          featured: "var(--copy-featured)",
        },
        color: { primary: "var(--color-primary)" },
        pumpkin: {
          50: "#FFF8F3",
          100: "#FFDDC5",
          200: "#FFC397",
          300: "#FFA969",
          400: "#FE8F3C",
          500: "#FE750E",
          600: "#DB6103",
          700: "#AC4E04",
          800: "#7E3B04",
          900: "#512704",
          950: "#251202",
        },
        zinc: {
          50: "#FAFAFA",
          100: "#F4F4F5",
          200: "#E4E4E7",
          300: "#D4D4D8",
          400: "#A1A1AA",
          500: "#71717A",
          600: "#52525B",
          700: "#3F3F46",
          800: "#27272A",
          900: "#18181B",
          950: "#09090B",
        },
      },
      borderRadius: {
        xl: "360px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [animate],
};
