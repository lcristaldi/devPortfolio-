export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        editorial: [
          "Crimson Pro",
          "ui-serif",
          "Georgia",
          "Cambria",
          "serif",
        ],
        display: [
          "Lulo Clean One Bold",
          "Bowlby One",
          "Impact",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        serif: [
          "Fraunces",
          "ui-serif",
          "Georgia",
          "serif",
        ],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out both",
        "fade-in": "fadeIn 1s ease-out both",
        "slide-down": "slideDown 0.6s ease-out both",
        "float-slow": "floatSlow 6s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
