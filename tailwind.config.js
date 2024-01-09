/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}" ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'mainPink': '#fed7e2',
      'base': '#F4F4F4',
      'white': '#FFFFFF',
      'neutral': '#ACACAC',
      'clarita': '#656565',
      'negrita': '#262626',
      'fondoInput': '#e6e6e6',
      'red': '#D33939',
      'green': '#4CBB17',
      'pink': {
        100: '#ffe6e6',
        200: '#ffe6f2',
        300: '#ffccee',
        400: '#ffb3e6',
        500: '#ffcce6',
      }
    },
    extend: {},
  },
  plugins: [],
}

