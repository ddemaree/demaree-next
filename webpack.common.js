const webpack = require("webpack");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AssetsPlugin = require("assets-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: {
    main: path.join(__dirname, "src", "index.js")
  },

  output: {
    path: path.join(__dirname, "dist/packs"),
    publicPath: '/packs/'
  },

  module: {
    rules: [
      {
        test: /\.((jpe?g)|(png)|(eot)|(woff)|(woff2)|(ttf)|(svg)|(gif))(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[hash].[ext]"
          }
        }
      },

      {test: /\.json$/, loader: "json-loader"},

      {
        test: /\.vue$/,
        loader: "vue-loader"
      },

      {
        test: /\.m?js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },

      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          // "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      fetch: "imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch"
    }),

    new AssetsPlugin({
      filename: "webpack.json",
      path: path.join(process.cwd(), "site/data"),
      prettyPrint: true
    }),

    new VueLoaderPlugin(),

    // new CopyWebpackPlugin([
    //   {
    //     from: "./src/fonts/",
    //     to: "fonts/",
    //     flatten: true
    //   }
    // ])
  ]
};
