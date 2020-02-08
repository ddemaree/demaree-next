module.exports = () => ({
  plugins: [
    require('postcss-import'),
    require('postcss-url')([
      { filter: '**/*.woff*', url: 'rebase' } 
    ]),
    require("tailwindcss")("./tailwind.config.js"),
    require("postcss-nested"),
    // require('postcss-custom-properties')({
    //   importFrom: [
    //     {
    //       customProperties: { '--dd-hello-world': '#f0f3' }
    //     }
    //   ]
    // }),
  ],
})