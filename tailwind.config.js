/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      text: {
        infomation: {
          DEFAULT: 'var(--color-purle-800)',
          hover: 'white'
        }
      },
      borderColor: {
        DEFAULT: 'black',
        primary: 'pink'
      },
      main: 'var(--color-main)',
      primary: {
        DEFAULT: 'var(--color-primary)',
        1: 'var(--color-primary-1)'
      },
      border: {
        button: {
          DEFAULT: 'var(--color-primary)',
          1: 'var(--color-primary-1)'
        },
        datatable: {
           DEFAULT: 'var(--color-primary)',
        }
      },
      background: {
        DEFAULT: 'var(--color-primary)',
        1: 'var(--color-background-1)',

        calendar: {
          DEFAULT: 'var(--color-primary)',
          1: 'var(--color-primary-1)'
        },

        tag: {
          DEFAULT: 'var(--color-background-1)'
        }
      },
      text: {
        button: {
          DEFAULT: 'white',
          secondary: 'var(--color-primary-1)'
        }
      },
      ...colors
    },
    extend: {},
  },
  plugins: [],
}
