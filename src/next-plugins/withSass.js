/*
Adapted from github.com/zeit/next-plugins

This withSass plugin adds support for image and font imports from SCSS
*/
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const cssLoaderConfig = require('@zeit/next-css/css-loader-config')
const commonsChunkConfig = require('@zeit/next-css/commons-chunk-config')

module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      if (!options.defaultLoaders) {
        throw new Error(
          'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
        )
      }

      const { dev, isServer } = options
      const {
        cssModules,
        cssLoaderOptions,
        postcssLoaderOptions,
        sassLoaderOptions = {}
      } = nextConfig
      // Support the user providing their own instance of ExtractTextPlugin.
      // If extractCSSPlugin is not defined we pass the same instance of ExtractTextPlugin to all css related modules
      // So that they compile to the same file in production
      let extractCSSPlugin =
        nextConfig.extractCSSPlugin || options.extractCSSPlugin

      if (!extractCSSPlugin) {
        extractCSSPlugin = new ExtractTextPlugin({
          filename: 'static/style.css'
        })
        config.plugins.push(extractCSSPlugin)
        options.extractCSSPlugin = extractCSSPlugin
        if (!isServer) {
          config = commonsChunkConfig(config, /\.(scss|sass)$/)
        }
      }

      options.defaultLoaders.sass = cssLoaderConfig(config, extractCSSPlugin, {
        cssModules,
        cssLoaderOptions,
        postcssLoaderOptions,
        dev,
        isServer,
        loaders: [
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: sassLoaderOptions
          }
        ]
      })

      options.defaultLoaders.images = [
        {
          loader: "url-loader",
          options: {
            limit: 8192,
            fallback: "file-loader",
            publicPath: "/_next/static/images/",
            outputPath: "static/images/",
            name: "[name]-[hash].[ext]"
          }
        }
      ]
    
      options.defaultLoaders.fonts = [
        {
          loader: "url-loader",
          options: {
            limit: 8192,
            fallback: "file-loader",
            publicPath: "/_next/static/fonts/",
            outputPath: "static/fonts/",
            name: "[name]-[hash].[ext]"
          }
        }
      ]

      config.module.rules.push(
        {
          test: /\.(jpe?g|png|gif)$/i,
          use: options.defaultLoaders.images
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: options.defaultLoaders.fonts
        },
        {
          test: /\.scss$/,
          use: options.defaultLoaders.sass
        },
        {
          test: /\.sass$/,
          use: options.defaultLoaders.sass
        }
      )

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    }
  })
}