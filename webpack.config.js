var path = require('path');
var webpack = require("webpack");

module.exports = {

	entry: './src/index.js',

	output: {
		filename: 'build.js',
		path: path.resolve(__dirname, "dist"),
	},

	watch: true,


	watchOptions: {
		aggregateTimeout: 3000,
	},

	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'react']
			}
		},
		{
			test: /\.css$/,
			loader: "style-loader!css-loader"
		},
		{
			test: /\.styl$/,
			loader: 'style-loader!css-loader!stylus-loader',
		}]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],

	devServer: {
		// contentBase: path.join(__dirname, "/dist"),
		hot: true
	}

}