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
    "border-[var(--ube-700)]",
    "border-[var(--raspberry-700)]",
    "border-[var(--strawberry-700)]",
    "border-[var(--lemon-700)]",
    "border-[var(--lime-700)]",
    "border-[var(--mint-700)]",
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
        "checkerboard-45": "var(--diamond)",
      },
      backgroundSize: {
        50: "50px 50px",
      },
      borderWidth: {
        1: "1px",
        16: "16px",
      },
      boxShadow: {
        3: "3px 3px 3px 0px var(--theme-color-900)",
        5: "5px 5px 5px 0px var(--theme-color-900)",
      },
      dropShadow: {
        "border-2": [
          "2px 0px 0 var(--theme-color-700)",
          "0px 2px 0 var(--theme-color-700)",
          "-2px 0px 0 var(--theme-color-700)",
          "0 -2px 0 var(--theme-color-700)",
          "0 4px 4px var(--theme-color-900)",
        ],
      },
      height: {
        xl: "36rem",
        "60vh": "60vh",
        "75vh": "75vh",
        "80vh": "80vh",
      },
      hueRotate: {
        120: "120deg",
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
      maxWidth: {
        "75vw": "75vw",
      },
      maxHeight: {
        "60vh": "60vh",
        "75vh": "75vh",
        "80vh": "80vh",
      },
      spacing: {
        unset: "unset",
      },
      strokeWidth: {
        1.5: "1.5px",
      },
      width: {
        xl: "36rem",
        "3xl": "48rem",
        "75vw": "75vw",
        "80vw": "80vw",
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("modal-open", '&[data-modal-state="open"]');
    }),
  ],
};
