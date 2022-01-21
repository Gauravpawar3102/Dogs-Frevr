module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: { 128: '60vh' },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    // ...
  ],
};
