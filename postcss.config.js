/*

	plugins: [  require('tailwindcss')('./tailwind.config.js'), ],

*/

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-url')([{ filter: '**/*.woff*', url: 'rebase' }]),
    require(`tailwindcss`)(`./tailwind.config.js`),
    require('postcss-nested'),
    require(`autoprefixer`),
    ...(process.env.ELEVENTY_PRODUCTION
      ? [
          require(`postcss-clean`),
          require(`@fullhuman/postcss-purgecss`)({
            content: ["_site/**/*.html"],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
            whitelist: [],
            whitelistPatterns: [/body/, /headroom/, /ril/],
          }),
        ]
      : []),
  ],
};