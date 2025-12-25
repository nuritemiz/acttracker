/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.js", "./screens/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'general': ['GeneralSans-Regular'],
        'general-medium': ['GeneralSans-Medium'],
        'general-semibold': ['GeneralSans-Semibold'],
        'general-bold': ['GeneralSans-Bold'],
      }
    },
  },
  plugins: [],
}