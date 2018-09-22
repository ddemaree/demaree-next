const withSass = require('@zeit/next-sass')
module.exports = withSass({
  webpack(config, options) {
    options.defaultLoaders.assets = [
      {
        loader: "url-loader",
        options: {
          limit: 8192,
          fallback: "file-loader",
          publicPath: "/_next/static/assets/",
          outputPath: "static/assets/",
          name: "[name]-[hash].[ext]"
        }
      }
    ]

    config.module.rules.push(
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|otf)$/i,
        use: options.defaultLoaders.assets
      }
    )
    return config
  }
})