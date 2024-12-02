/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Use 'colors' to extend color definitions
        primary: "#000000", // Custom primary color
        secondary: "#39FF14",
        tertiary: "#fafafc",
      },
    },
    screens: {
      sm: {max:"800px"},

      lg: {max:"1024px"},
      
    },
  },
  plugins: [],
};
