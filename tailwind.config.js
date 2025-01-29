/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      keyframes: {
        dragonGlow: {
          "0%, 100%": {
            textShadow: "0 0 10px #4fd1c5, 0 0 20px #4fd1c5, 0 0 30px #4fd1c5",
          },
          "50%": {
            textShadow: "0 0 20px #81e6d9, 0 0 30px #81e6d9, 0 0 40px #81e6d9",
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
        "appear-quick": "appearLeft 2s ",
        "appear-medium": "appearLeft 3s ",
        "appear-long": "appearLeft 4s ",
        "core-appear": "coreAppear 2s",
        "appear-down": "appearDown 2s",
        'border': 'border 4s linear infinite',
      },
    },
  },

  plugins: [],
};
