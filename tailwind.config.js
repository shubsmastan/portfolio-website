/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "dark-rose": "#85586f",
        "dark-rose-hover": "#9b6882",
        cream: "#f8ede3",
        mauve: "#d0b8a8",
        "mauve-hover": "#b39b8c",
      },
      fontFamily: {
        "josefin-sans": ['"Josefin Sans"', "sans-serif"],
      },
      minHeight: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
      },
    },
  },
  plugins: [],
};
