var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
require('dotenv').config();
require('./database');

var economicTwistsRouter = require('./routes/economic-twists');
var economicActivitiesRouter = require('./routes/economic-activities');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/economic-twists', economicTwistsRouter);
app.use('/economic-activities', economicActivitiesRouter);

module.exports = app;
