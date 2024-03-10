/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,vue,html}",
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#E74C3C",
          secondary: "#0F172A",
          neutral: "#ffff",
          "base-100": "#ffff",
          info: "#ECF0F3",
          success: "#ffff",
          warning: "#DF7E07",
          error: "#FA5C5C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}