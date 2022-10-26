/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'BonVivant': ["Bon Vivant Serif"],
        'BonVivantCursive': ["Bon Vivant"],
        'Montaga': ["Montaga"],
      },
    },
  },
  plugins: [],
}
