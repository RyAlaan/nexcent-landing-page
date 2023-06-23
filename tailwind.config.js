/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    screen: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors : {
        neutral: {
          black : "#263238",
          dark : '#4D4D4D',
          grey : '#717171',
          light : '#89939E',
          blue : '#ABBDE1',
          silver : '#F5F7FA',
          white : '#FFFFFF',
        },
        primary : '#28CB8B',
        secondary : '#263238',
        info : '#2194f3',
        shade : {
          100 : '#43A046',
          200 : '#388E3B',
          300 : '#237D31',
          400 : '#1B5E1F',
          500 : '#103E13',
        },
        tint : {
          100 : '#66BB69',
          200 : '#81C784',
          300 : '#A5D6A7',
          400 : '#C8E6C9',
          500 : '#E8F5E9',
        },
        action : {
          warning : '#FBC02D',
          error : '#E53835',
          success : '#2E7D31'
        }
      },
      fontFamily: {
        inter: "'Inter', sans-serif"
      },
      keyframes: {
        slide: {
          'from' : {
            trasnfrom : 'translateX(0)'
          },
          'to': {
            transfrom : 'translateX(-100%)'
          }
        }
      },
      animation :{
        slide : '5s slide infinite linear'
      }
    },
  },
  plugins: [],
}

