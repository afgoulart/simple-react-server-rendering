const webpack = require('webpack');
const path = require('path');

module.exports = [
  {
    entry: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      './app/client.js',
    ],
    output: {
      path: path.join(__dirname, '/public'),
      filename: 'app.bundle.js',
      publicPath: '/static'
    },
    module: {
      loaders: [{
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      }]
    },
    devtool: '#source-map',
    //If you want to minify your files uncomment this
    plugins: [
      // OccurenceOrderPlugin is needed for webpack 1.x only
      // new webpack.optimize.UglifyJsPlugin({
      //   compress: {
      //     warnings: false,
      //   },
      //   output: {
      //     comments: false,
      //   },
      // }),
      // new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ]
  }
]