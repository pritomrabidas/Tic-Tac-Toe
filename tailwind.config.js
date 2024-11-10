/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Popins: ["Poppins", "sans-serif"],
        nunitoFont: ["Nunito", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
        Opensans: ["Open Sans", "sans-serif"],
      },
      container:{
        center:true
      }
    },
  },
  plugins: [],
}