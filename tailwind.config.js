/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'main': '#2B4254',
      'brown': '#BBA748',
      'dark-brown': '#AA8858',
      'white': '#FFF',
      'light-blue': '#EDF3FB',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    extend: {},
  },
  plugins: [],
}
