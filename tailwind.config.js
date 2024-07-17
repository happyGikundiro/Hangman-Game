/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        darknavy: "#261676",
        blue: "#2463FF",
        white: "#FFFFFF",
      },
      boxShadow: {
        "custom-shadow":
          "inset 0 -4px 0 2px #140E66, inset 0 2px 0 6px #2463FF",
        "custom-button-shadow":
          "inset 0 -1px 0 1.5px #140E66, inset 0 2px 0 0px #5DA9EF",
        "custom-button-quit":
          "inset 0 -1px 0 1.5px #140E66, inset 0 2px 0 0px purple",
      },
      backgroundImage: {
        "gradient-custom":
          "linear-gradient(to bottom, #344ABA, rgba(0, 20, 121, 0.9))",
        "gradient-customs":
          "linear-gradient(to bottom,#1A043A,rgba(0, 20, 121, 0.7), #2B1677)",
      },
    },
  },
  plugins: [],
};
