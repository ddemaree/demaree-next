const path   = require('path');
const globby = require('globby');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const dev = process.env.NODE_ENV !== 'production';
const mode = dev ? "development" : "production";

module.exports = {
  mode,
  entry: async function() {
    const paths = await globby("./src/_assets/*.{js,css}")
    let entries = {}

    paths.forEach(pathname => {
      let entryName = path.basename(pathname).replace(/\..+$/, '')
      if(!entries[entryName]) {
        entries[entryName] = []
      }
      entries[entryName].push(pathname)
    })

    return entries
  },
  output: {
    filename: dev ? '[name].js' : '[name].[chunkhash].js',
    path: path.resolve(__dirname, '_site', 'assets'),
    publicPath: '/assets/'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { modules: false }
          },
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new WebpackManifestPlugin(),
    new MiniCssExtractPlugin({
      filename: dev ? '[name].css' : '[name].[chunkhash].css'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, '_site'),
    compress: false,
    publicPath: '/assets',
    port: 8000,
    overlay: true,
    watchContentBase: true
  }
}