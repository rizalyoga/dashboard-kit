/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primmary_dark: "#363740",
        primmary_blue: "#3751FF",
        light_background: "#F7F8FC",
        dark_background: "#374151",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
