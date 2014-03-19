var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/workshop-online-marco');

var db = mongoose.connection;

db.on('error', function(err){
    console.log('Erro de conexao.', err)
});
db.once('open', function () {
  console.log('Conexão aberta.')
});

var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Osvaldinho' });
kitty.save(function (err) {
  if (err){
	console.log('Erro: ', err);
  }
  console.log('meow');
});
