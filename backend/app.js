var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config()
require('./database');

var economicTwistsRouter = require('./routes/economic-twists');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/economic-twists', economicTwistsRouter);

module.exports = app;
