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
 
var _model = mongoose.model('Beer', BeerSchema);


var create = function(request, response, data){
  var model = new _model(data);

  model.save(function (err, data) {
    if (err){
      console.log('Erro: ', err);
    }
    console.log('Cerveja inserida: ', data);
    makeResponse(response, data);
  });
}

var find = function(request, response){
  _model.find(function (err, beers) {
    if(err) {
      console.log(err);
    } else {
      console.log(beers);
          makeResponse(response, beers);
    }
  });
}

var makeResponse = function(response, data){
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write(JSON.stringify(data));
  response.end();
}

exports.create = create;
exports.find = find;
