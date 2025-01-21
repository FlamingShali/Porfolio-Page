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
      },
      animation: {
        "dragon-glow": "dragonGlow 2s infinite",
      },
    },
  },
  plugins: [],
};
