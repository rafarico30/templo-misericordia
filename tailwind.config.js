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
        'maroon': '#5C2C2C',
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'], 
        script: ['"Great Vibes"', 'cursive'],  
      },
    },
  },
  plugins: [],
}