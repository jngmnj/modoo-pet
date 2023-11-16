/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "./src/styles/main.css",
  ],
  theme: {
    extend: {
      colors: {
        "bg-dark": "#243441",
        "orange": {
          50: "#fff8ed",
          100: "#ffefd4",
          200: "#ffdca8",
          300: "#ffc271",
          400: "#ff9d38",
          500: "#fe841b",
          600: "#ef6207",
          700: "#c64908",
          800: "#9d3b0f",
          900: "#7e3210",
          950: "#441606",
        },
      },
    },
  },
  plugins: [],
};

