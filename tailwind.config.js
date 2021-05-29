module.exports = {
  purge: {
    content: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
