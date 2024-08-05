/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,ts,html,js}"],
  theme: {
    extend: {
      screens: {

      },
      colors: {
        'dark-blue-dm': '#1A202C',
        'very-dark-blue-dm': '#121721',
        'very-dark-blue-lm': '#1E2A47',
        'dark-gray-lm': '#6E8098',
        'very-light-gray-lm': '#F0F4F8',
        'white': '#FFFFFF',
      },
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}

