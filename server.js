import path from 'path'
import express from 'express'
import webpack from 'webpack'
import routes from './routes'
import middleware from './lib/middleware'
import morgan from 'morgan'
import './lib/mongo'
//прогрев, нужен ли
import './model'

const app = express()

app.use(morgan('combined'))

if (process.env.NODE_ENV === 'development') {
	const config = require('./webpack.config')
	const compiler = webpack(config)
	app.use(
		require('webpack-dev-middleware')(compiler, {
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
		})
	)
	app.use(require('webpack-hot-middleware')(compiler))
}

app.use(express.static(path.resolve('./public')))
app.use(express.static(path.resolve('./assets')))
app.use(middleware)
app.use(routes)

app.set('x-powered-by', false)

app.listen(8082, '0.0.0.0', err => {
	if (err) {
		console.error(err)
	} else {
		console.info(
			'Listening at http://localhost:8082',
			'ENV',
			process.env.NODE_ENV
		)
	}
})

process.on('uncaughtException', err => console.log(err.stack))
