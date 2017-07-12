const webpack = require('webpack');
const path = require('path');
const hostname = 'localhost';
const port = '3000';

const webpackConfig = {
  entry: [
    './app/client.js'
  ],
  output: {
    path: path.join(__dirname, '/public/js'),
    filename: 'app.bundle.js',
    publicPath: '/',
    hotUpdateChunkFilename: 'hot-update.js',
    hotUpdateMainFilename: 'hot-update.json'
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
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};

if (process.env.NODE_ENV !== 'production') {
  webpackConfig.entry = webpackConfig.entry.concat([
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    'webpack-hot-middleware/client?path=http://'+hostname+':'+port+'/__webpack_hmr'
  ]);
  webpackConfig.plugins = webpackConfig.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]);
  webpackConfig.devServer = {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    hot: true
  };
}

module.exports = webpackConfig;