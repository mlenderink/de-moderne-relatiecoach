/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        champagne: "#f9dbd1",
        red: "#f8252c",
        sunset: "#ff5a5a",
      },
    },
    fontFamily: {
      brandon_light: "Brandon Grotesque Light",
      brandon_medium: "Brandon Grotesque Medium",
      avallon: "Avallon All Caps",
      iskry: "Iskry One",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
