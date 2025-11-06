/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Gray: "#C4DAD2",
        LightGray: "#C6C5C2",
        white: "#F4F4F9",
        green: "#859F3D",
        black: "#1e1e1e",
        gradientTop: "#000000",
        brown: "#381D15",
        gold: "#bfaa7c",
        red: "#F64B3C",
        pink: "#BB747A",
        blue: "#7BD3EA",
        darkBlue: "#0076B8",
        purple: "#432E54",
        yellow: "#DCDCAA", // VSCode function name
        darkYellow: "#FFD700", // Brackets & punctuation (bright)
        darkOrange: "#CE9178", // String color
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
      },
    },
  },
  plugins: [],
};
