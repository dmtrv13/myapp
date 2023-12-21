var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://postgres:Olya2002@localhost:5432/web')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var readersRouter = require('./routes/readers');
var book_issuanceRouter = require('./routes/book_issuance');
var booksRouter = require('./routes/books');
var genresRouter = require('./routes/genres');
var authorsRouter = require('./routes/authors');

var app = express();

session = require("./session.js")

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req,res,next){
  req.db = db;
  next();
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/readers', readersRouter);
app.use('/book_issuance', book_issuanceRouter);
app.use('/books', booksRouter);
app.use('/genres', genresRouter);
app.use('/authors', authorsRouter);

var api = require('./routes/api');
app.use('/api', api);
var api_auth = require('./routes/api/auth');
api.use('/auth', api_auth);

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

db.one('SELECT $1 AS value', 123)
.then((data) => {
console.log('DATA:', data.value)
})
.catch((error) => {
console.log('ERROR:', error)
})

module.exports = app;
