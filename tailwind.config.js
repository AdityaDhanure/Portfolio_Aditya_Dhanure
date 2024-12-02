/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: "#181823",
        cream: "#fff3e4",
        greyText: "#8491a0",
        palette: "#00ffff"
      },
      backgroundImage: {
        profile: "url('./src/assets/profile1.jpg')",
      }
    },
    
  },
  plugins: [],
}