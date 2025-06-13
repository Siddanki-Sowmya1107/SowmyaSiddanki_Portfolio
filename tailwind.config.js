/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkOlive: '#2F4F4F',
        warmSand: '#D9CAB3',
        creamWhite: '#FFF8E1',
        rustOrange: '#D35400',
        charcoalGray: '#3C3C3C',
      },
      fontFamily: {
        // Add elegant fonts if you want
        elegant: ['"Playfair Display"', 'serif'],
        modern: ['"Poppins"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
