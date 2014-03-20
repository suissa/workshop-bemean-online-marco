
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
// adiciono o módulo de beer
var beer = require('./routes/beer');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
// req.body
// na versão atual não é mais necessário
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


// Aqui temos a definição das nossas rotas
// Observe como é a sintaxe da rota: app.verbo_do_http(url, funcao)
app.get('/', routes.index);
// conferir a função em ./routes/user.js
app.get('/users', user.list);

// Beer API
// create
app.post('/beer', beer.create);
// retrieve
app.get('/beer', beer.retrieve);
// update
app.get('/beer/update', beer.update);
// create
app.get('/beer/delete', beer.delete);

// get
app.get('/beer/:name', beer.get);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
