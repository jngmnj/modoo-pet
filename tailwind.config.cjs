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
        "orange01": "#FE841B",
      },
    },
  },
  plugins: [],
};

