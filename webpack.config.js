const webpack       = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require ('extract-text-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'app.bundle.js',
    path: path.join(__dirname, 'public'),
  },
   plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('bundle.css'),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.join(__dirname, 'src', 'lib'),
      'node_modules'
    ]
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
      },
      {
      test: /\.(scss)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader', // translates CSS into CommonJS modules
        }, {
          loader: 'postcss-loader', // Run post css actions
          options: {
            plugins: function () { // post css plugins, can be exported to postcss.config.js
              return [
                require('precss'),
                require('autoprefixer')
              ];
            }
          }
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      })
    },
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "css-loader"
      })
    }
    ]
  },
  devServer: {
    contentBase: './public',
    hot: true,
    historyApiFallback: {
      index: 'index.html'
    },
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000, // How often check for changes (in milliseconds)
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