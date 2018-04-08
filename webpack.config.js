if (process.env.NODE_ENV === 'development') {
	module.exports = require('./conf/webpack.config.dev');
} else {
	module.exports = require('./conf/webpack.config.prod');
}