var _model = require("./models/beer");
 
 
var beerCreate = function(request, response){
  var dados = {
    name: 'Norteña',
    description: 'Buena',
    alcohol: 4.5,
    category: 'pilsen'
  }

  _model.create(request, response, dados);
}
 
var beerRetrieve = function(request, response){
  _model.find(request, response);
}
 
var beerUpdate = function(request, response){

  var query = {name: 'Heineken'};
  
  var mod = {description: 'TESTE'};

  _model.update(request, response, query, mod);
}
 
var beerDelete = function(request, response){
    var query = {name: 'Skol'};

    _model.delete(request, response, query);
}

var beerGet = function(request, response){
  var url = request.url; // /beer/83748923hdnskajfo
  var id = url.split('/').slice(2,3);
  var query = {_id: id};

  _model.get(request, response, query);
}

exports.create = beerCreate;
exports.retrieve = beerRetrieve;
exports.update = beerUpdate;
exports.delete = beerDelete;
exports.get = beerGet;




