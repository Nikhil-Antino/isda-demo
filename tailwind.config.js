/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1463ff",
        "primary-dark": "#030122",
        secondary: "#ffc933",
        tertiary: "#fff9f0ff",
        quaternary: "#ff595eff",
        grayshade: "#F9FAFB",
      },

      animation: {
        infiniteScroll: "xscroll 40s linear infinite backwards",
        infiniteScrollReverse: "xscroll 40s linear infinite reverse",
        infiniteScrollFast: "xscroll 25s linear infinite backwards",
        infiniteScrollReverseFast: "xscroll 25s linear infinite reverse",
        infiniteScrollRepeat: "xscrollrepeat 25s linear infinite",
      },
      keyframes: {
        xscroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        xscrollrepeat: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
