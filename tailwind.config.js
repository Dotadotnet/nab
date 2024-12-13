/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: [
    "./resources/views/**/*.blade.php",
    "./resources/views/**/**/*.blade.php",
    "./public/js/*.js",
    "./resources/js/*.js",
    "./resources/**/*.blade.php"
  ],
  theme: {

    extend: {
      backgroundImage: {
        menu: "url('http://confectionary.ir/image/menu.png')",
        flower: "url('http://confectionary.ir/image/flower.jpg')",
      },
      colors: {
        dark: {   
          10: 'rgb(252, 252, 252)',
          30: 'rgb(14,35,56)',
          'opacity-30': 'rgba(14,35,56,0.3)',
          60: 'rgb(17,24,39)',
          100: 'rgb(22,22,36)',
          200: 'rgb(17,17,29)',  
        },
        adminprimary: {
          100: "rgb(0,97,247)",
          200: "rgb(0,70,176)",
  
        },
        primary: {
          100: 'rgb(0,15,67)',
          200: 'rgb(7,140,145)',
          300: 'rgb(184,117,12)',
        },
        light: {
          10: 'rgb(3,3,3)',
          30: 'rgb(255,255,255)',
          'opacity-30': 'rgba(255,255,255,0.5)',
          60: 'rgb(243,244,245)',
          100: 'rgb(240,242,250)',
        }
      },
      fontFamily: {
        "samim": "samim",
        "parastoo": "parastoo",
        "tanha": "tanha",
        "sahel": "sahel",
        "shabnam": "shabnam",
        "yekan": "yekan",
        "vazir": "vazir",
        'nastaliq': 'nastaliq',
        'sans': 'sans'
      }
    },
  },
  plugins: [],
}
                                                                                                
 