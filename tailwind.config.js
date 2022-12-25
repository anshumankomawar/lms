const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [...fontFamily.sans],
      },
      fontSize: {
        '8': '8px',
      },
      colors: {
        charcoal: '#656565',
        lightcharcoal: {
          100: '#E4E6E8',
          200: '#A6A6B4'
        }
      }
    },
  },
  plugins: [],
}
