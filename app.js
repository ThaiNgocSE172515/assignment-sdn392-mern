var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL)

var indexRouter = require('./routes/index');
var perfumeRouter = require('./routes/perfume');
var brandRouter = require('./routes/brand');
var memberRouter = require('./routes/member');
var commentRouter = require('./routes/comment');
var authRouter = require('./routes/auth');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', perfumeRouter);
app.use('/', brandRouter);
app.use('/', memberRouter);
app.use('/', commentRouter);
app.use('/', authRouter);
;

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
