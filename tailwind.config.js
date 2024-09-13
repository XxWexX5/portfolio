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
    },
  },
  plugins: [],
}