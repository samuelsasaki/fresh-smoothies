/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '3/4': '3 / 4'
      },
      transitionProperty: {
        'bottom': 'bottom',
      
      },
    },
    fontFamily: {
      poppins: ['Poppins'],
      mont: ['Montserrat'],
      fredoka: ['Fredoka']
    }
  },
  plugins: [],
}