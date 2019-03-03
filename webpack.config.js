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

const babelLoader = function(dev = false) {
  let loaders = ['babel-loader']

  return {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: loaders,
  }
}

const makeSassLoaderRule = (testRegexp, dev = false, enableModules = false) => {
  let loaders = [
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
        sourceMap: dev
        // , includePaths: ['node_modules']
      }
    }
  ].filter(Boolean)

  // TODO: Only prepend this in dev, and add MiniCssExtract in prod
  loaders.unshift({
    loader: 'style-loader',
    options: {
      hmr: (dev)
    }
  })

  return {
    test: testRegexp,
    loader: loaders
  }
}

// TODO: Refactor these loaders to a shared factory of some kind
const sassModuleLoader = makeSassLoaderRule(/\.mod.s?css$/, dev, true) 
const sassLoader = makeSassLoaderRule(/\.s?css$/, dev, false) 

const baseConfig = {
  mode: (dev ? 'development' : 'production'),
  entry: {
    main: [
      './_assets/main.js',
      './_assets/main.scss'
    ]
  },
  output: {
    filename: dev
        ? '[name].js'
        : '[name].[contenthash:8].js',
    path: path.resolve(__dirname, 'assets'),
    publicPath: '/assets/' 
  },
  module: {
    rules: [{
      oneOf: [
        babelLoader(dev),
        sassModuleLoader,
        sassLoader,
        {
          test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|otf)$/i,
          use: {
            loader: "file-loader",
            options: {
              name: dev
                ? '[name].[ext]'
                : '[name].[contenthash:8].[ext]',
              outputPath: "static/assets/images/",
              publicPath: "/assets/images/"
            }
          }
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: dev
                  ? '[name].[ext]'
                  : '[name].[hash:8].[ext]'
              }
            },
            {
              loader: 'svgo-loader',
              options: {
                plugins: [
                  {removeTitle: true},
                  {convertColors: {shorthex: false}},
                  {convertPathData: false}
                ]
              }
            }
          ]
        }
      ]
    }]
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

// proxy: {
//   context: () => true,
//   target: 'http://localhost:4000'
// },

const devServer = {
  port: 8080,
  contentBase: './_site',
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