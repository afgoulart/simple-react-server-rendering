'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// var webpack = require('webpack');
// var WebpackDevServer = require('webpack-dev-server');
// var config = require('./webpack.config');

// new WebpackDevServer(webpack(config), {
//   publicPath: config.output.publicPath
// })
// .listen(3000, '0.0.0.0', function (err) {
//   if (err) {
//     throw new Error(err.stats());
//   }
//   console.log('Running at http://0.0.0.0:3000');
// });

var app = (0, _express2.default)();

app.use('/static', _express2.default.static('public'));

if (process.env.NODE_ENV !== 'production') {
  app.use(require('./routes/webpack'));
}

app.use('*', _routes2.default);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});