/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components.json",
  ],
  theme: {
    extend: {
      colors: {
        'fast-gate-primary': '#1e40af', // Azul sofisticado
        'fast-gate-secondary': '#dc2626', // Vermelho para destaque
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': {
          color: theme('colors.fast-gate-primary'),
        },
        'h2': {
          color: theme('colors.fast-gate-secondary'),
        },
      })
    })
  ],
}

