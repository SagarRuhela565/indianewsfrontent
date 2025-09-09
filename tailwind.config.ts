/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8",   // your theme primary color
        secondary: "#9333EA", // optional
      },
    },
  },
  plugins: [],
};
