/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkness: "#333333",
        pastel: "#a2d2ff",
        hotness: "#ffafcc",
        primary: "#00b4d8",
      },
    },
  },
  plugins: [],
};
