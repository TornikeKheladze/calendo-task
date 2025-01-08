/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        button: "0px 2px 10px 0px rgba(0, 0, 0, 0.1)",
        buttonHover: "0px 4px 15px 0px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        inactive: "#64748B",
        lightGray: "#F4F6F9",
        lightGrayHover: "#E9ECF2",
        textBlack: "#0F172A",
        textBlackHover: "#1A2A3A",
        disabled: "#CBD5E1",
        primaryButton: "#7C1FD1",
        primaryButtonHover: "#6A1BAE",
        secondaryBlack: "#09101D",
        pickerBorder: "#D9D9D9",
        secondaryGray: "#747B84",
      },
      fontFamily: {
        noto: ["Noto Serif Georgian", "sans-serif"],
        helvetica: ["Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
