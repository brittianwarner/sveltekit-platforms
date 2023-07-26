const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      yellow: colors.yellow,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      rose: colors.rose,
      orange: colors.orange,
      green: colors.green,
      neutral: colors.neutral,
    },
  },

  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
