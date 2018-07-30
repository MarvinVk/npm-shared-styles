const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: '#inline-source-map',
	entry: [
		'./demo/boot.js',
	],
	output: {
		publicPath: '/',
		path: path.resolve('dist'),
		filename: 'index.js',
	},
	module: {
		rules: [
			{
				test: /\.json$/,
				use: 'json-loader',
			},
			{
				test: /\.js$/,
				use: ['babel-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /(\.scss|\.css)$/,
				use: [
					'style-loader',
					'css-loader',
					'postcss-loader',
				],
			},
			{
				test: /\.(png|jpg|gif|svg|ico)$/,
				use: 'file-loader',
			},
		],
	},
	devServer: {
		open: true,
		port: 3000,
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
			filename: 'index.html',
			inject: 'body',
		}),
	],
	resolve: {
		extensions: ['.json', '.js', '.jsx'],
	},
};
