/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: '#f54b1f',
        dip: '#de3509',
        beige: '#f6ebe1',
        purple: '#c8bafe',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
