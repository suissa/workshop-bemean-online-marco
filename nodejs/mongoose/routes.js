var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/workshop-online-marco');
 
var db = mongoose.connection;
db.on('error', function(err){
    console.log('Erro de conexao.', err)
});
db.once('open', function () {
  console.log('Conexão aberta.')
});
 
var Schema = mongoose.Schema;
 
var BeerSchema = new Schema({
  name: { type: String, default: '' },
  description: { type: String, default: '' },
  alcohol: { type: Number, min: 0},
  category: { type: String, default: ''},
  created: { type: Date, default: Date.now }
});
 
var Beer = mongoose.model('Beer', BeerSchema);
 
var beerReturn = function(response, data){
 
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(JSON.stringify(data));
        response.end();
}
 
var beerCreate = function(request, response){
        var dados = {
                  name: 'Heineken',
                  description: 'Vish',
                  alcohol: 4.5,
                  category: 'pilsen'
                }
 
                var model = new Beer(dados);
 
                model.save(function (err, data) {
                  if (err){
                    console.log('Erro: ', err);
                  }
                        console.log('Cerveja inserida: ', data);
                        // response.writeHead(200, {"Content-Type": "application/json"});
                        // response.write(data);
                        // response.end();
                        beerReturn(response, data);
                });
}
 
var beerRetrieve = function(request, response){
        Beer.find(function (err, beers) {
          if(err) {
            console.log(err);
          } else {
            console.log(beers);
                beerReturn(response, beers);
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
                beerReturn(response, beer);
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
            beerReturn(response, beer);
          }
        });
}

// var _beer = {
//   beerDelete
// }

exports.create = beerCreate;
exports.retrieve = beerRetrieve;
exports.update = beerUpdate;
exports.dalete = beerDelete;

