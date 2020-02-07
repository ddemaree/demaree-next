/*
$sans-serif-fonts: 'soehne-web', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

$serif-fonts: 'ivar-text', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

*/

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['soehne-web', ...defaultTheme.fontFamily.sans],
        serif: ['ivar-text', ...defaultTheme.fontFamily.serif] 
      }
    },
  },
  variants: {},
  plugins: [],
}
