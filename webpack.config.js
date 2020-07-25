const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const { merge } = require('webpack-merge');

const dev = process.env.NODE_ENV !== 'production';

const baseConfig = {
	entry: [
    './src/_assets/js/index.js',
    './src/_assets/styles/global.css'
  ],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '_site'),
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '/css/[name].css',
			chunkFilename: '[id].css',
		}),
		new ImageminWebpWebpackPlugin({
			config: [
				{
					test: /\.(jpe?g|png)/,
					options: {
						quality: 60,
					},
				},
			],
		}),
	],
	node: {
		global: true,
		fs: 'empty',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: '/node_modules',
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: '../',
						},
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							config: {
								path: __dirname + '/postcss.config.js',
							},
						},
					},
				],
			},
			{
				test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/',
						},
					},
				],
			},
		],
	},
};

const devConfig = merge(baseConfig, {
	mode: 'development',
	plugins: [
		new BrowserSyncPlugin({
			host: '0.0.0.0',
			port: 3000,
			server: { baseDir: ['_site'] },
			ghostMode: false,
			notify: false,
			watch: true,
			open: false, // won't automatically launch in default browser when started
		}),
	],
	watch: true,
	devtool: 'inline-source-map',
});

module.exports = dev ? devConfig : baseConfig;
