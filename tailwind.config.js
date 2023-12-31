module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#333333", // A slightly less black shade
          light: "#666666", // An even lighter shade if needed
        },
        white: {
          DEFAULT: "#f8f8f8", // A slightly dark-ish white
          dark: "#d9d9d9", // A more dark white shade
        },
        primary: {
          DEFAULT: "#FFA500", // The main yellow-orange shade
          light: "#FFD700", // A lighter shade
          dark: "#D2691E", // A more dark yellow-orange shade
        },
      },
    },
  },
  plugins: [],
};
