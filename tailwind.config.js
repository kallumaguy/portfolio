/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      text: "#0a0a0a",
      background: "#f9f9f",
      primary: "#2575fc",
      secondary: "#6a11cb",
      accent: "#f9f9f",
      light: "",
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "0rem",
        md: "2rem",
        lg: "3rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      keyframes: {
        bounceSmall: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        bounceSmall: "bounceSmall 1s ease-in-out infinite",
      },
      colors: {
        scrollbar: {
          track: "#f1f5f9",
          thumb: "#6a11cb",
          thumbHover: "#2575fc",
        },
        "glass-bg": "rgba(0, 0, 0, 0.4)", // Example translucent white
      },
      backgroundImage: {
        "blue-gradient": "linear-gradient(to right, #6a11cb 0%, #2575fc 100%)",
        "carbon-gradient":
          "linear-gradient( 111.4deg,  rgba(7,7,9,1) 0%, rgba(27,24,113,1) 70% )",
        "green-gradient":
          "linear-gradient(to right, #053c36, #06403a, #08443d, #0a4841, #0c4c45)",
      },
      fontFamily: {
        khand: ["Khand", "sans-serif"],
        hind: ["Hind", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
  darkMode: "class",
};
