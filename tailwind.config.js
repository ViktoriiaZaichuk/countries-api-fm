/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,ts,html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {

      },
      colors: {
        'dark-blue-dm': '#2b3945',
        'very-dark-blue-dm': '#202c37',
        'very-dark-blue-lm': '#111517',
        'dark-gray-lm': '#858585',
        'very-light-gray-lm': '#fafafa',
        'white': '#FFFFFF',
      },
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}

