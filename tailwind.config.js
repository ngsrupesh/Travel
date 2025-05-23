/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3f51b5',
          '50': '#e8eaf6',
          '100': '#c5cae9',
          '200': '#9fa8da',
          '300': '#7986cb',
          '400': '#5c6bc0',
          '500': '#3f51b5',
          '600': '#3949ab',
          '700': '#303f9f',
          '800': '#283593',
          '900': '#1a237e',
        }
      }
    },
  },
  plugins: [],
}