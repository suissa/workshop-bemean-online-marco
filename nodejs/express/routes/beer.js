var _model = require("../models/beer");
 
 
var beerCreate = function(req, res){
  var dados = {
    name: 'Skol',
    description: 'Buena',
    alcohol: 4.5,
    category: 'pilsen'
  }

// para utilizarmos o req.body precisamos adicionar o bodyParser() nas configurações
  var dados = req.body

  _model.create(req, res, dados);
}
 
var beerRetrieve = function(req, res){
  _model.find(req, res);
}
 
var beerUpdate = function(req, res){
  // nome da cerveja a ser alterada
  var name = req.params.name;
  // query da cerveja a ser alterada
  var query = {name: name};
  // dados a serem modificados
  var mod = req.body;
  _model.update(req, res, query, mod);
}
 
var beerDelete = function(req, res){
  var url = req.url; // /beer/83748923hdnskajfo
  // var name = url.split('/').slice(3,4);
  var query = {name: 'Heineken'};

  _model.delete(req, res, query);
}

var beerGet = function(req, res){
  var name = req.params.name;
  var query = {name: name};

  _model.get(req, res, query);
}

exports.create = beerCreate;
exports.retrieve = beerRetrieve;
exports.update = beerUpdate;
exports.delete = beerDelete;
exports.get = beerGet;


