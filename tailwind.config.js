/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderColor: {
        "border-color-post": "var(--border-color-post)",
      },
      textColor: {
        "iconLike-backgroundColor-post": "var(--redLight)",
      },
      colors: {
        "navbar-background": "var(--navbar-background)",
        "input-background-navbar": "var(--input-background-navbar)",
        "a-hover-background-navbar": "var(--a-hover-background-navbar)",
        "createPost-background": "var(--createPost-background)",
        "button-background-discardPost": "var(--redLight)",
      },
    },
  },
  plugins: [],
};
