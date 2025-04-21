module.exports = {
  darkMode: 'class', // THIS IS CRUCIAL
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        slideDown: 'slideDown 0.3s ease-out forwards',
      },
      colors: {
        primary: {
          DEFAULT: '#10B981', // shade of green (emerald-500)
          dark: '#059669',    // darker green for hover/active
        },
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
