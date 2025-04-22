/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'header': '#7E0F1E', 
        'footer': '#DCCBC3', 
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'], 
      },
    },
  },
  plugins: [],
}