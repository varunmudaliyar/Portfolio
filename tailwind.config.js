/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Light theme - Beige palette
        beige: {
          50: '#fdfbf7',
          100: '#f7f3eb',
          200: '#f0e6d6',
          300: '#e8d8c0',
          400: '#d9c4a0',
          500: '#c9af81',
          600: '#b59a6b',
          700: '#9a7f52',
          800: '#7a6342',
          900: '#5a4a32',
        },
        // Dark theme - Deep blue palette
        deepBlue: {
          50: '#e6f0ff',
          100: '#cce0ff',
          200: '#99c2ff',
          300: '#66a3ff',
          400: '#3385ff',
          500: '#0066ff',
          600: '#0052cc',
          700: '#003d99',
          800: '#002966',
          900: '#001433',
          950: '#000a1a',
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
