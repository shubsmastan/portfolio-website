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
    },
  },
  plugins: [],
};
