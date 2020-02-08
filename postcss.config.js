module.exports = () => ({
  plugins: [
    require("tailwindcss")("./tailwind.config.js"),
    require("postcss-nested"),
    require('postcss-custom-properties')({
      importFrom: [
        {
          customProperties: { '--dd-hello-world': '#f0f3' }
        }
      ]
    })
  ],
})