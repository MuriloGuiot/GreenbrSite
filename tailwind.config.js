/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand palette derived from the GreenBR logo (leaf + earthy wordmark)
        ink: "#12150F", // near-black, warm
        forest: "#1B4D2E", // primary deep green
        moss: "#3E7C4F", // mid green
        sage: "#9CB97A", // light leaf green (accent)
        earth: "#8C7B52", // taupe/olive from the wordmark
        bone: "#F4F1E9", // warm background
        paper: "#FBFAF6", // lighter surface
        line: "#E2DCCE", // hairline borders
      },
      fontFamily: {
        // Display: Fraunces (an editorial, organic serif). Body: Hanken Grotesk.
        display: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Hanken Grotesk"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.22em",
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};
