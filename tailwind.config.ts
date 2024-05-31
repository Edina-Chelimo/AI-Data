/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'btg-maroon': '#C41230',
        'btg-gray': '#6A737B',
        'btg-black': '#231F20',
        'btg-white': '#ffffff',
      },
      fontFamily: {
        'roboto':['roboto', 'sans-serif'] ,
      },
    },
  },
  plugins: [],
}