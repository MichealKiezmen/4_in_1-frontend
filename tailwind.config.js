/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        themed_pink: "#FFCFEF",
        themed_teal : "#0A97B0",
        themed_blue : "#0A5EB0",
        themed_black : "#2A3335"
      }
    },
  },
  plugins: [],
}
