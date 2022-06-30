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
        "link-color-auth": "var(--blueLight)",
      },
      colors: {
        "navbar-background": "var(--navbar-background)",
        "input-background-navbar": "var(--input-background-navbar)",
        "a-hover-background-navbar": "var(--a-hover-background-navbar)",
        "createPost-background": "var(--createPost-background)",
        "button-background-discardPost": "var(--redLight)",
        "auth-background": "var(--auth-background)",
        "form-backgound-auth": "var(--form-backgound-auth)",
        "button-backgound-auth": "var(--button-background-auth)",
        "peopleLikePostComponent-background":
          "var(--peopleLikePostComponent-background)",
      },
    },
  },
  plugins: [],
};
