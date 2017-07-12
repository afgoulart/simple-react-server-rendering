'use strict';

var debug = require('debug')('app');
var colors = require('colors');
var express = require('express');
var webpack = require('webpack');

var router = express.Router();

if (process.env.NODE_ENV !== 'production') {
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var webpackHotServerMiddleware = require('webpack-hot-server-middleware');
  var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
  var config = require('../../../webpack.config.js');

  debug(colors.yellow('Using webpack-dev-middleware'));

  // Don't bail in dev server.
  config.forEach(function (c) {
    return c.bail = false;
  });

  var compiler = webpack(config);
  compiler.plugin("after-resolvers", function (compiler) {
    compiler.apply(new FriendlyErrorsWebpackPlugin());
    router.use(webpackDevMiddleware(compiler, {
      quiet: true,
      publicPath: config[0].output.publicPath
    }));
    router.use(webpackHotMiddleware(compiler.compilers.find(function (compiler) {
      return compiler.name === 'client';
    }), {
      log: function log() {}
    }));
    router.use(webpackHotServerMiddleware(compiler, {
      chunkName: 'server'
    }));
  });
}

module.exports = router;