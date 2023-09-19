/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#845EC2",
        yellow: "#FFC75F",
        "light-grey": "#EFEFEF",
        grey: "#969696",
        "yellow-dark": "#E7B355",
      },
    },
  },
  plugins: [require("preline/plugin"), require("tailwindcss-animated")],
};
