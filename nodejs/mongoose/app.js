var http = require("http");
var beer = require("./routes");
 
http.createServer(function(request, response) {
  console.log(request.url);
  var url = request.url;
  switch(url){
    case '/beer/create':
      beer.create(request, response);
      break;
    case '/beer/find':
      beer.retrieve(request, response);
      break;
    case '/beer/532a266262b9570000cd288c':
      beer.get(request, response);
      break;
    case '/beer/update':
      beer.update(request, response);
      break;
    case '/beer/delete':
      beer.delete(request, response);
      break;
    default:
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write('Cervejaria do Suissa');
      response.end();
  }
}).listen(3000);
console.log('Server running at http://localhost:3000/');