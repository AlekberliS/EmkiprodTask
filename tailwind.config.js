/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'euclid': ['"Euclid Circular A"', 'sans-serif']
      },
      
    },


    extend: {
      width: {
        '98': '360px',
        
      },
      borderWidth: {
        't-1': '1px', 
      },
      colors: {
        borderCol: '#192038',
      },
    },
  },
  plugins: [],
}

