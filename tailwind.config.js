/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-purple": "#A729F5",
        "custom-dark": "#313E51",
        "custom-dark-light": "#3B4D66",
        "custom-grey": "#626C7F",
        "custom-light-blue": "#ABC1E1",
        "custom-light-grey": "#F4F6FA",
        "custom-correct": "#26D782",
        "custom-incorrect": "#EE5454",
      },
      fontFamily: {
        rubik: "Rubik, serif",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
