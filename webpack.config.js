const webpack       = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'app.bundle.js',
    path: path.join(__dirname, 'public'),
  },
   plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": ["env", "react", "es2015"]
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: './public',
    hot: true,
    historyApiFallback: {
      index: 'index.html'
    }
  }
  // plugins: [
  //   new webpack.LoaderOptionsPlugin({
  //     test: /\.js$/,
  //     exclude: /(node_modules|bower_components)/,
  //     use: {
  //       loader: 'babel-loader',
  //         options: {
  //           babelrc: true
  //         }
  //     }
  //   })
  // ],
};