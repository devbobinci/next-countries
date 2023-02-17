/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "d-mode-el": "hsl(209, 23%, 22%)",
        "d-mode-bg": "hsl(207, 26%, 17%)",
        "l-mode-txt": "hsl(200, 15%, 8%)",
        "l-mode-input": "hsl(0, 0%, 52%)",
        "l-mode-bg": "hsl(0, 0%, 98%)",
      },

      fontWeight: {
        light: "300",
        semibold: "400",
        bold: "600",
        extrabold: "800",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1560px",
        "3xl": "1850px",
      },
    },
  },
  plugins: [],
};
