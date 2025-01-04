/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "san serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#FF498B",
        },
        secondary: {
          DEFAULT: "#3252DF",
        },
        tertiary: {
          DEFAULT: "#B0B0B0",
        },
        light: {
          DEFAULT: "#152C5B",
        },
    },
  },
  },
  plugins: [],
};
