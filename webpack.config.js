const path = require('path');

module.exports = {
	context: __dirname + '\\client\\js',
	output: {
		path: __dirname + '\\dist',
		filename: 'bundle.js'
	},
	entry: '.\\app',
	module: {
		loaders: [
		    {
		      test: /\.jsx?$/,
		      exclude: /(node_modules|bower_components)/,
		      loader: 'babel', // 'babel-loader' is also a legal name to reference
		    	query: {
		          presets: ['es2015', 'react']
		        }
		    }
	  	]
	},
	resolve: {
	    extensions: ['', '.js', '.jsx']
	  }
}