var _model = require("../models/beer");
 
 
var beerCreate = function(req, res){
  var dados = {
    name: 'Norteña',
    description: 'Buena',
    alcohol: 4.5,
    category: 'pilsen'
  }

  _model.create(req, res, dados);
}
 
var beerRetrieve = function(req, res){
  _model.find(req, res);
}
 
var beerUpdate = function(req, res){

  var query = {name: 'Heineken'};
  
  var mod = {description: 'TESTE'};

  _model.update(req, res, query, mod);
}
 
var beerDelete = function(req, res){
  var url = req.url; // /beer/83748923hdnskajfo
  // var name = url.split('/').slice(3,4);
  var query = {name: 'Heineken'};

  _model.delete(req, res, query);
}

var beerGet = function(req, res){
  var url = req.url; // /beer/83748923hdnskajfo
  var id = url.split('/').slice(3,4);
  var query = {_id: id};

  _model.get(req, res, query);
}

exports.create = beerCreate;
exports.retrieve = beerRetrieve;
exports.update = beerUpdate;
exports.delete = beerDelete;
exports.get = beerGet;