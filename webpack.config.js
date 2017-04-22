module.exports = {
	entry: {
		'classui': './index.tsx'
	},
	
	output: {
		filename: '[name].js',
		path: __dirname+"/bundle"
	},

	module: {
		loaders: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: 'ts-loader'
			},
			{
				test: /\.tsx?$/,
				loader: 'source-map-loader'
			},
			{
				test: /\.jsx?$/,
				loader: 'source-map-loader'
			}
		]
	},
	resolve: {
		alias: {
			'classui': __dirname+'/ts/'
		},
		extensions: [".tsx", ".ts", ".js"]
	},

	devtool: 'inline-source-map',
	
	devServer: {
		host: '0.0.0.0',
		port: 8000
	}
};