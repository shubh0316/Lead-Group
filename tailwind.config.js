// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        extend: {
          fontFamily: {
            gotham: ['GothamBook'],
          },
        },
      },
    },
    plugins: [
      require("tailwindcss-animate"),
    ],
  };
  