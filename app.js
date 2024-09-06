var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var adminRouter = require('./routes/admin');
var categoryRouter = require('./routes/category');
var brandRouter = require('./routes/brand');
var productRouter = require('./routes/product');
var orderRouter = require('./routes/order');
var reviewRouter = require('./routes/review');

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/e-commerce')
  .then(() => console.log('Connected!'))
  .catch((error) => console.log(error.message))

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/admin', adminRouter);
app.use('/category', categoryRouter);
app.use('/review', reviewRouter);
app.use('/brand', brandRouter);
app.use('/product', productRouter);
app.use('/order', orderRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
