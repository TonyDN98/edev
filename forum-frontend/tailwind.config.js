/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#6FB3B8", // O nuanță mai deschisă
          DEFAULT: "#2C6975", // Culoarea principală
          dark: "#1B3B4F", // O nuanță mai închisă
        },
        secondary: {
          light: "#F3E9D2",
          DEFAULT: "#D9BF77",
          dark: "#A68435",
        },
        accent: "#F26D21",
      },
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"], // Font principal
        heading: ["Montserrat", "sans-serif"], // Font pentru titluri
      },
      spacing: {
        128: "32rem", // Adăugăm spațieri personalizate
        144: "36rem",
      },
      borderRadius: {
        xl: "1rem", // Colțuri rotunjite personalizate
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
