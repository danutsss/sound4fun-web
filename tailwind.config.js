/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        black: "#212529",
        grey: "#f8f9fa",
        border_grey: "#dee2e6",
        primary: {
          900: "#4E0754",
          800: "#671270",
          700: "#7C1A87",
          600: "#90279C",
          500: "#A23DAD",
          400: "#ADABB8",
          300: "#BB61C7",
          200: "#CE80D9",
          100: "#ECDBF2",
          50: "#F5E1F7",
        },
        secondary: {
          500: "#F9703F",
          400: "#FF9466",
          300: "#FFBO88",
          200: "#FFDOB5",
          100: "#FFE8D9",
        },
        "blue-grey": {
          900: "#102A43",
          800: "#243B53",
          700: "#334E68",
          600: "#486581",
          500: "#627D98",
          400: "#829AB1",
          300: "#9FB3C8",
          200: "#BCCCDC",
          100: "#D9E2EC",
          50: "#FOF4F8",
        },
      },
    },
  },
  plugins: [],
};
