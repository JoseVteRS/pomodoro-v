/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f5b061",
        secondary: "#394f6a",
        'gray-dark': "#1d2c3f",
        'gray-light': "#c9c9c9",
      },
      backgroundImage: {
        'mesh-dark': `radial-gradient(at 32% 98%, hsla(213,36%,18%,1) 0px, transparent 50%), radial-gradient(at 13% 15%, hsla(213,36%,18%,1) 0px, transparent 50%), radial-gradient(at 93% 65%, hsla(213,36%,18%,1) 0px, transparent 50%)`
      },
      backgroundColor:{
        'mesh-dark': `hsla(213,30%,31%,1)`,
      },
      height:{
        'calc': 'calc(100vh - 5rem)'
      }
    },
  
  },
  plugins: [],
}



