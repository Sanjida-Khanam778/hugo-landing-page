/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "serif"],
        inter: ["Inter", "serif"],
      },
      colors: {
        primary: "#002B5B",
      }
    },
  },
  plugins: [],
};
