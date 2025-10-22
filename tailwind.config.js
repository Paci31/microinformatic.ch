/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "mis-teal": "#15928F", // inspiré du logo
        "mis-teal-2": "#43B3B0", // nuance claire
        "mis-gray": "#3F4651", // gris du logo
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
        ],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.12)",
        "soft-lg": "0 20px 60px rgba(0,0,0,.18)",
      },
      borderRadius: {
        "2xl": "1rem",
      },
    },
  },
};
