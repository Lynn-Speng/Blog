const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.css", "./src/**/*.js", "./src/**/*.vue"],
  darkMode: "class",
  theme: {
    fontFamily: {
      serif: ["Newsreader", "Source Han Serif CN", "serif"],
      sans: [
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".text-indent": {
          "text-indent": "1rem",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
