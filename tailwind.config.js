/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'header': '#7E0F1E', // Azul personalizado
        'footer': '#DCCBC3', // Gris claro personalizado
      },
    },
  },
  plugins: [],
}