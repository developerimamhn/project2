/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-transparent': 'rgba(252, 254, 255, 0.4)', // Adding custom RGBA color
        'custom-white': '#FCFEFF', // Adding custom hex color
      },
      keyframes: {
        contrastEffect: {
          '0%, 100%': { filter: 'contrast(100%)' },
          '50%': { filter: 'contrast(200%)' },
        },
        slowBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        contrastEffect: 'contrastEffect 3s ease-in-out infinite', // Adjust duration as needed
        slowBounce: 'slowBounce 3s ease-in-out infinite',
      },
    },

  },
  plugins: [],
};
