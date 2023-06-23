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
        'gray-light': "#c9c9c9"
      }
    },
  },
  plugins: [],
}
