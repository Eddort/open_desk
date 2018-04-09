import path from 'path';
import express from 'express';
import webpack from 'webpack';
import reactRoute from './routes/react';

const app = express();

if (process.env.NODE_ENV === 'development') {
	
	const config = require('./webpack.config');
	const compiler = webpack(config);
	app.use(require('webpack-dev-middleware')(compiler, {
		noInfo: false,
		publicPath: config.output.publicPath,
		stats: {
			assets: false,
			colors: true,
			version: false,
			hash: false,
			timings: false,
			chunks: false,
			chunkModules: false
		}
	}));
	app.use(require('webpack-hot-middleware')(compiler));
}

app.use(express.static(path.resolve('./public')));

app.get('*', reactRoute);

app.listen(8082, '0.0.0.0', (err) => {
	console.log(process.env.NODE_ENV)
	if(err) {
		console.error(err);
	} else {
		console.info('Listening at http://localhost:8082');	
	}
});