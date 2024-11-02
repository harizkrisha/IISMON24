/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helveticaBlack: ["HelveticaBlack", "sans-serif"],
        helveticaMedium: ["HelveticaMedium", "sans-serif"],
        helveticaUltraLight: ["HelveticaUltraLight", "sans-serif"],
      },
    },
  },
  plugins: [],
}

