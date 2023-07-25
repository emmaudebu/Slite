/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        div: "url('../src/assets/images/images/div.png')",
      },
    },
  },
  plugins: [],
};
