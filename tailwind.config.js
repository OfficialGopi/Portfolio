/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
      'project-dark': "url('./src/assets/dark-bg.jpeg')",
      'project-light': "url('./src/assets/light-bg.jpg')",
    },
    },
    
    
  },  
  plugins: [],
};
