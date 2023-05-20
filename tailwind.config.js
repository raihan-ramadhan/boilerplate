/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "500px",
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [
    ({ addVariant }) => {
      addVariant("& > *");
    },
  ],
};
