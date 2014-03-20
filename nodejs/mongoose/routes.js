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
    Beer.find(function (err, beers) {
      if(err) {
        console.log(err);
      } else {
        console.log(beers);
            makeResponse(response, beers);
      }
    })
}
 
var beerUpdate = function(request, response){

    var query = {name: 'Heineken'};
    
    var mod = {alcohol: 4};

    Beer.update(query, mod, function(err, beer) {
      if(err) {
        console.log(err);
      } else {
        console.log('Cerveja atualizada com sucesso');
            makeResponse(response, beer);
      }
    });
}
 
var beerDelete = function(request, response){
    var query = {name: 'Skol'};

    Beer.remove(query, function(err, beer) {
      if(err) {
        console.log(err);
      } else {
        console.log('Cerveja deletada com sucesso');
        makeResponse(response, beer);
      }
    });
}

var beerGet = function(request, response){
  var url = request.url; // /beer/83748923hdnskajfo
  var id = url.split('/').slice(2,3);
  var query = {_id: id};

  Beer.findOne(query, function (err, beers) {
    if(err) {
      console.log(err);
    } else {
      console.log(beers);
      makeResponse(response, beers);
    }
  })
}

exports.create = beerCreate;
exports.retrieve = beerRetrieve;
exports.update = beerUpdate;
exports.delete = beerDelete;
exports.get = beerGet;




