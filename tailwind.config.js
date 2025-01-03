/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          10: "#FFF5F6",
          20: "##FF385C",
          30: "#FFBDC9",
          40: "#FF849A",
          50: "#FF5C79",
          60: "#FF385C",
          70: "#D42F4D",
          80: "#801C2E",
          90: "#67101F",
          100: "#4E0916",
        }
      },
      fontFamily: {
        "sans": ["AirbnbCerealAppBold", "AirbnbCerealAppBook", "AirbnbCerealAppLight", "AirbnbCerealAppMedium"],
        "AirbnbCerealBold": ["AirbnbCerealAppBold"],
        "AirbnbCerealBook": ["AirbnbCerealAppBook"],
        "AirbnbCerealLight": ["AirbnbCerealAppLight"],
        "AirbnbCerealMedium": ["AirbnbCerealAppMedium"],
      }
    },

  },
  plugins: [],
}