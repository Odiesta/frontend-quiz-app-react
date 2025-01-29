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
      backgroundImage: {
        patternDesktopLight:
          "url('./assets/images/pattern-background-desktop-light.svg')",
        patternDesktopDark:
          "url('./assets/images/pattern-background-desktop-dark.svg')",
        patternTabletLight:
          "url('./assets/images/pattern-background-tablet-light.svg')",
        patternTabletDark:
          "url('./assets/images/pattern-background-tablet-dark.svg')",
        patternMobileLight:
          "url('./assets/images/pattern-background-mobile-light.svg')",
        patternMobileDark:
          "url('./assets/images/pattern-background-mobile-dark.svg')",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
