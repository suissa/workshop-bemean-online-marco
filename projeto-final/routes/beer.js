var _model = require("../models/beer");
 
var beerCreate = function(req, res){
// para utilizarmos o req.body precisamos adicionar 
// o bodyParser() nas configurações
  var dados = req.body;
  console.log('Recebi no backend: ', dados);
  _model.create(req, res, dados);
}
 
var beerRetrieve = function(req, res){
  _model.find(req, res);
}
 
var beerUpdate = function(req, res){
  // nome da cerveja a ser alterada
  var id = req.params.id;
  // query da cerveja a ser alterada
  var query = {_id: id};
  // dados a serem modificados
  var mod = req.body;
  console.log('Alterar: ', query, mod);
  _model.update(req, res, query, mod);
}
 
var beerDelete = function(req, res){
  var url = req.url; // /beer/83748923hdnskajfo
  var id = req.params.id;
  var query = {_id: id};

  _model.delete(req, res, query);
}

var beerGet = function(req, res){
  var id = req.params.id;
  var query = {_id: id};

  _model.get(req, res, query);
}

exports.create = beerCreate;
exports.retrieve = beerRetrieve;
exports.update = beerUpdate;
exports.delete = beerDelete;
exports.get = beerGet;


