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

import express from 'express';
import middlewareRoutes from './routes';
var app = express();


app.use('/static', express.static('public'));

if (process.env.NODE_ENV !== 'production') {
  app.use(require('./routes/webpack'));
}

app.use('*', middlewareRoutes);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});