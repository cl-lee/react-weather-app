/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/Components/Header.js",
    "./src/Components/Content.js",
    "./src/Components/Content/Sidebar.js",
  ],
  theme: {
    extend: {
      colors: {
        "black-font": "#232528",
      },
    },
  },
  plugins: [],
}

