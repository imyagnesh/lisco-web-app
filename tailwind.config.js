module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Newsreader', 'serif'],
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
