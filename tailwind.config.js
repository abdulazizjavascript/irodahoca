/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true, // Centers the container
        padding: '15px', // Adds padding
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 10px 0px yellow' },
          '50%': { boxShadow: '0 0 20px 5px yellow' },
        },
      },
      animation: {
        pulseGlow: 'pulseGlow 2s infinite',
      },
      fontFamily: {
        // Add a custom font family name: "bebas"
        bebas: [ '"Bebas Neue"', 'sans-serif' ],
        condensed: [ 'Roboto Condensed', 'sans-serif' ],
        roboto: [ "Roboto", "sans-serif" ],
        montserrat: [ "Montserrat", "sans-serif" ],
        playfair: [ "Playfair Display", "serif" ],
      },
    },
  },
  plugins: [],
}
