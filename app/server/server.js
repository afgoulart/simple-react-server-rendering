import express from 'express';
import middlewareRoutes from './routes';
var app = express();


app.use('/js', express.static('public/js'));
app.use('/stylesheets', express.static('public/stylesheets'));

if (process.env.NODE_ENV !== 'production') {
  app.use(require('./routes/webpack'));
}

app.use('*', middlewareRoutes);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});