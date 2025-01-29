/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        dragonGlow: {
          "0%, 100%": {
            textShadow:
              "0 0 10px rgb(125 211 252), 0 0 20px rgb(125 211 252), 0 0 30px rgb(125 211 252)",
          },
          "50%": {
            textShadow:
              "0 0 20px rgb(37 99 235 / 0), 0 0 30px rgb(37 99 235 / 0), 0 0 40px rgb(37 99 235 / 0)",
          },
        },
        appearLeft: {
          "0%": {
            color: "transparent",
            right: "50%",
          },
          "100%": {
            right: "0%",
          },
        },
        appearDown: {
          "0%": {
            color: "transparent",
            top: "50%",
          },
          "100%": {
            top: "0%",
          },
        },
        coreAppear: {
          "0%": {
            color: "transparent",
          },
        },
        border: {
          to: { "--border-angle": "360deg" },
        },
      },

      animation: {
        "dragon-glow": "dragonGlow 2s infinite",
        "appear-quick": "appearLeft 1s ",
        "appear-medium": "appearLeft 3s ",
        "appear-long": "appearLeft 4s ",
        "core-appear": "coreAppear 2s",
        "appear-down": "appearDown 2s",
        border: "border 4s linear infinite",
      },
    },
  },

  plugins: [],
};
