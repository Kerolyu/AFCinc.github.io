/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "6rem",
        },
        center: true,
      },
      colors: {
        salmon: "#F2707C",
        lavender: "#8E7CB5",
        lightblue: "#BFE1FF",
        lightpink: "#FFE4E7",
        lightpurple: "#F7F3FF",
        darkblue: "#12193B",
      },
      width: {
        "50%": "50vw",
      },
      fontFamily: {
        body: ["Roboto"],
        display: ["Helvetica Neue"],
      },
    },
  },
  plugins: [],
};
