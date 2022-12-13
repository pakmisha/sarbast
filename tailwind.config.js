module.exports = {
  content: ["./src/views/**/*.pug", "./src/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        body: "#C41919",
        "brand-accent": "#E7AB5C",
        "brand-accent-light": "#FDF2D6",
        "brand-light": "#E5E5E5",
        "brand-gray": "#8A8A8A",
      },
      fontFamily: {
        primary: ["PF DinText Pro", "sans-serif"],
        secondary: ["Americana Std", "sans-serif"],
      },
      transitionTimingFunction: {
        inQuad: "cubic-bezier(0.33, 1, 0.68, 1)",
      },
      lineHeight: {
        "extra-loose": "2.5",
        12: "3rem",
        13: "4rem",
        14: "5rem",
        15: "6rem",
        16: "7rem",
        17: "8rem",
        18: "9rem",
        19: "10rem",
      },
    },
  },
  plugins: [],
};
