/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Comfortaa", ],
        titleFont: ["Comfortaa", ],
      },
      colors: {
        // bodyColor: "#212428",
        bodyColor: "#FFFFFF",

        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #111827, #1f2937)",
        // designColor: "#ff014f",
        designColor: "#4A90C5",
        designColorLight: "#67ADE3",
      },
    },
  },
  plugins: [],
};
