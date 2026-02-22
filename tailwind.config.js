/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED', // Deep Lavender
        secondary: '#C4B5FD', // Soft Lavender
        background: '#FFFFFF',
        surface: '#F5F3FF',
        gray: '#F3F4F6',
        text: {
          primary: '#111827',
        },
        cta: {
          accent: '#6D28D9',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
