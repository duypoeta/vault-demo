/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      main: 'var(--color-main)',
      primary: {
        DEFAULT: 'var(--color-primary)',
        1: 'var(--color-primary-1)'
      } ,
      bg: {
        1: 'var(--color-background-1)'
      },
      ...colors
    },
    extend: {},
  },
  plugins: [],
}
