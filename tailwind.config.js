/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily:{
        tiltPrism: [
          'Tilt Prism'
        ],
        ubuntu: [
          'Ubuntu'
        ]
      },
      colors: {
        primary: "#FF6363"
      }
    },
  },
  plugins: [],
}

