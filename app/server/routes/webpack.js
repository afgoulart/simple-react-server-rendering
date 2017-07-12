'use strict';

const debug = require('debug')('app');
const colors = require('colors');
const express = require('express');

const router = express.Router();

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  // const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
  // const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
  const config = require('../../../webpack.config.js');

  const compiler = webpack(config);
  router.use(webpackDevMiddleware(compiler))
  router.use(webpackHotMiddleware(compiler))

  // debug(colors.yellow('Using webpack-dev-middleware'));

  // Don't bail in dev server.
  // config.bail = false;

  // compiler.plugin("after-resolvers", function(compiler) {
  //   compiler.apply(new FriendlyErrorsWebpackPlugin());
  //   router.use(
  //     webpackDevMiddleware(compiler, {
  //       quiet: true,
  //       publicPath: config.output.publicPath
  //     })
  //   );
  //   router.use(
  //     webpackHotMiddleware(
  //       compiler.compilers.find(compiler => compiler.name === 'client'),
  //       {
  //         log: () => {}
  //       }
  //     )
  //   );
  //   router.use(
  //     webpackHotServerMiddleware(compiler, {
  //       chunkName: 'server'
  //     })
  //   );
  // });
}

module.exports = router;