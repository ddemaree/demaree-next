module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {
      filter: '**/*.woff',
      url: 'rebase'
    },
    'postcss-nested': {}, 
    tailwindcss: {},
    autoprefixer: {},
  },
}