// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        extend: {
          fontFamily: {
            sans: ['var(--font-gotham)', 'sans-serif'],
          },
        },
      },
    },
    plugins: [
      require("tailwindcss-animate"),
    ],
  };
  