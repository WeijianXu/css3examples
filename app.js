
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
// app.set('view engine', 'htm');
app.engine('htm', require('ejs').renderFile);
app.set('view engine', 'htm');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get(/^\/www\/chapter[0-9]{2}\/\w*/, routes.chapter);
app.get(/^\/www\/climb\/\w*/, routes.climb);
app.get(/^\/www\/roma\/\w*/, routes.roma);
app.get(/^\/www\/harmonise\/\w*/, routes.harmonise);
app.get(/^\/test\/\w*/, routes.test);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
