/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        themeColor1: "rgba(0, 0, 255, 0.2)",
        themeColor2: "rgba(255, 140, 0, 0.3)",
      },
      boxShadow: {
        profile1: "0px 4px 8px rgba(0, 0, 0, 0.25)",
        profile2: "2px 2px 8px rgba(50, 80, 120, 0.7)",
        logo1: "0px 1px 4px rgba(0, 0, 0, 0.25)",
        logo2: "2px 2px 8px rgba(50, 80, 120, 0.7)",
        card: "2px 2px 10px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
