const webpack = require('webpack')
const path = require('path')
const dev = (process.env.NODE_ENV !== 'production')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')

const merge = require('webpack-merge').smartStrategy(
  {
    entry: 'prepend', // or 'replace'
    'module.loaders': 'prepend',
    'plugins': 'prepend'
  }
)

const oneOf = content => [{oneOf: content}]

const makeSassLoaderRule = (testRegexp, dev = false, enableModules = false) => {
  let nodeModulesPath = path.join(__dirname, 'node_modules')
  
  let loaders = [
    (dev && {
      loader: 'style-loader',
      options: {
        hmr: (dev)
      }
    }),
    (dev && 'extracted-loader'),
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: enableModules
      }
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: dev,
        implementation: require("sass")
      }
    }
  ].filter(Boolean)

  return {
    test: testRegexp,
    loader: loaders
  }
}

const baseConfig = {
  mode: (dev ? 'development' : 'production'),
  entry: [
    './_assets/main.js',
    './_assets/main.scss'
  ],
  output: {
    filename: dev
        ? '[name].js'
        : '[name].[contenthash:8].js',
    path: path.resolve(__dirname, 'dist/assets'),
    publicPath: '/assets/' 
  },
  module: {
    rules: oneOf([
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      makeSassLoaderRule(/\.s?css$/, dev, false),
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|otf)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: dev
              ? '[name].[ext]'
              : '[name].[contenthash:8].[ext]',
            outputPath: "dist/assets/images/",
            publicPath: "/assets/images/"
          }
        }
      },
    ]) 
  },
  plugins: [
    new ManifestPlugin(),
    new MiniCssExtractPlugin({
      filename: dev
        ? '[name].css'
        : '[name].[contenthash:8].css',
      chunkFilename: dev
        ? '[name].chunk.css'
        : '[name].[contenthash:8].chunk.css'
    })
  ]
}

const devServer = {
  port: 8080,
  contentBase: './dist',
  hot: true,
  inline: true,
  publicPath: '/assets/',
  disableHostCheck: true,
  watchOptions: {
    poll: 1000,
    aggregateTimeout: 300,
    ignored: /node_modules/
  },
  index: ''
}

const devConfig = merge(baseConfig, {
  devtool: 'cheap-module-source-map',
  devServer,
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})

module.exports = (dev ? devConfig : baseConfig)