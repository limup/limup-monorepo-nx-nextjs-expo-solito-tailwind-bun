module.exports = {
  content: [
    '../../apps/*/src/**/*.{js,ts,jsx,tsx}',
    '../../apps/*/app/**/*.{js,ts,jsx,tsx}',
    '../*/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        background: '#F8FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
