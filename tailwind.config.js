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
          lightYl: "#ede5ce", // An even lighter shade if needed
          dark: "#1a1a1a", // A more dark black shade
        },
        white: {
          DEFAULT: "#f8f8f8", // A slightly dark-ish white
          dark: "#d9d9d9", // A more dark white shade
        },
        primary: {
          DEFAULT: "#FFA500", // The main yellow-orange shade
          light: "#FFD700", // A lighter shade
          dark: "#D2691E", // A more dark yellow-orange shade
          pale: "#FFDAB9", // A pale yellow-orange shade
        },
        listing: {
          rent: "#0398fc",
          sale: "#039903",
          sold: "#b50404",
        },
      },
      backgroundImage: {
        "diagonal-stripes":
          "repeating-linear-gradient(45deg, rgba(255, 255, 0, 0.2), rgba(181, 181, 20, 0.2) 100px, rgba(0, 0, 0, 0.2) 100px, rgba(0, 0, 0, 0.2) 200px)",
      },
    },
  },
  plugins: [],
};
