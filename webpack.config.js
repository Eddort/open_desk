const webpack       = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/app.js',
  mode: 'development',
  output: {
    filename: 'app.bundle.js',
    path: path.join(__dirname, 'build'),
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
          options: {
            babelrc: true
          }
      }
    })
  ],
};