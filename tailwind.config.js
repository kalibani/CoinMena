module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        slate: {
          200: "#c9d1d9",
          400: "#8b949e",
        },
        blue: {
          400: "#58a6ff",
        },
        orange: {
          400: "#db6d28",
        },
      },
      fontSize: {
        sm: "12px",
        base: "14px",
        "1xl": "16px !important",
        "2xl": "20px !important",
        "4xl": "32px",
      },
      backgroundColor: {
        black: "#0d1117",
        blue: {
          600: "#1f6feb",
        },
        zinc: {
          800: "#8b949e",
          900: "#161b22",
        },
      },
      borderColor: {
        zinc: {
          600: "#c9d1d9",
          800: "#30363d",
        },
        blue: {
          600: "#1f6feb",
        },
      },
      fill: {
        gray: {
          400: "#8b949e",
        },
        blue: {
          400: "#58a6ff",
        },
        orange: {
          400: "#db6d28",
        },
      },
      decoration: {
        blue: {
          400: "#58a6ff",
        },
      },
    },
  },
  plugins: [],
};
