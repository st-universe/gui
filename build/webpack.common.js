const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	output: {
		path: path.join(__dirname, '../dist'),
		filename: 'script.js',
	},
	entry: [
		path.join(__dirname, '../src/app.js')
	],
	module: {
		rules: [{
			test: /\.vue$/,
			use: 'vue-loader'
		},{
			test: /\.css$/,
			use: ['vue-style-loader', 'css-loader']
		},{
			test: /\.(woff|woff2|eot|ttf|otf)$/,
			use: ['file-loader']
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Stu3',
			template: 'public/index.html'
		}),
		new CopyWebpackPlugin([ { from: 'public/images', to: 'images' } ]),
		new CopyWebpackPlugin([ { from: 'public/fonts', to: 'fonts' } ]),
		new VueLoaderPlugin()
	]
};
