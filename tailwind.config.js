/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    "animate-wave-y-3",
    "animate-wave-y-5",
    "bg-[var(--ube-500)]",
    "bg-[var(--raspberry-500)]",
    "bg-[var(--strawberry-500)]",
    "bg-[var(--lemon-500)]",
    "bg-[var(--lime-500)]",
    "bg-[var(--mint-500)]",
    "border-[var(--ube-500)]",
    "border-[var(--raspberry-500)]",
    "border-[var(--strawberry-500)]",
    "border-[var(--lemon-500)]",
    "border-[var(--lime-500)]",
    "border-[var(--mint-500)]",
  ],
  theme: {
    extend: {
      animation: {
        "bg-scrolling-12": "bg-scrolling 12s linear infinite",
        "wave-y-3": "wave-y-3 3s ease-in-out infinite",
        "wave-y-5": "wave-y-5 3s ease-in-out infinite",
        "fade-in": "fade-in 0.5s ease-in-out 1",
      },
      backgroundImage: {
        "checkerboard-45":
          "linear-gradient(135deg, var(--black) 25%, transparent 25%), linear-gradient(45deg, var(--black) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, var(--black) 75%), linear-gradient(135deg, transparent 75%, var(--black) 75%)",
      },
      backgroundSize: {
        50: "50px 50px",
      },
      borderWidth: {
        1: "1px",
        16: "16px",
      },
      boxShadow: {
        "drop-3": "3px 3px 3px 0px rgba(0, 0, 0.5, 0.5)",
        "drop-5": "5px 5px 5px 0px rgba(0, 0, 0.5, 0.5)",
      },
      height: {
        "60vh": "60vh",
        "75vh": "75vh",
        "80vh": "80vh",
      },
      keyframes: {
        "bg-scrolling": {
          "0%": {
            "background-position": "250px -200px",
          },
          "100%": {
            "background-position": "0 0",
          },
        },
        "wave-y-3": {
          "0%,100%": {
            transform: "translateY(3px)",
          },
          "50%": {
            transform: "translateY(-3px)",
          },
        },
        "wave-y-5": {
          "0%,100%": {
            transform: "translateY(5px)",
          },
          "50%": {
            transform: "translateY(-5px)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      maxHeight: {
        "60vh": "60vh",
        "75vh": "75vh",
        "80vh": "80vh",
      },
      width: {
        "75vw": "75vw",
        "80vw": "80vw",
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("modal-open", '&[data-modal-active="open"]');
    }),
  ],
};
