import { heroui } from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
      light: {
        layout: {
          // Layout settings for light mode
        },
        colors: {
          primary: {
            foreground: "#FFFFFF",
            DEFAULT: "#2970ae",
            background: "#2970ae",
            50: "#c1daf0",  // Lightest
            100: "#98c2e7",
            200: "#6fa9dd",
            300: "#4591d3",
            400: "#2c78ba",
            500: "#225d90",
            600: "#184267",
            700: "#0f283e",
            800: "#07121e",  // Darkest
            900: "#041118"
          },
        }
      },
      dark: {
        layout: {
          // Layout settings for dark mode
        },
        colors: {
          primary: {
            foreground: "#FFFFFF",
            DEFAULT: "#2970ae",
            background: "#2970ae",
            50: "#07121e",
            100: "#0f283e",
            200: "#184267",
            300: "#225d90",
            400: "#2c78ba",
            500: "#4591d3",
            600: "#6fa9dd",
            700: "#98c2e7",
            800: "#c1daf0",
            900: "#eaf3fa"
          },
        }
      },
      // Additional custom themes can be added here
    }
  })],
}
