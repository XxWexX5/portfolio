/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'ui-sans-serif'],
        raleway: ['Raleway', 'ui-sans-serif'],
      },
      colors: {
        primary: {
          500: '#E1376C',
        },
        secondary: {
          100: '#9E75CE',
          500: '#532FB8',
          700: '#532EB8'
        },
        tertiary: {
          500: '#FECA90',
        }
      },
    },
  },
  plugins: [],
}