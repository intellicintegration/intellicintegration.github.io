import { colors, nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
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
      },
    },
    // If you want separate themes for light and dark modes, you might need a different approach
    // Example: Adding custom themes for light and dark modes
    // customThemes: {
    //   light: {
    //     colors: {
    //       // Light mode colors
    //     },
    //   },
    //   dark: {
    //     colors: {
    //       // Dark mode colors
    //     },
    //   },
    // },
  },
  darkMode: "class",
  plugins: [nextui()],
}
