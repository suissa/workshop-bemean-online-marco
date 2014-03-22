#Ementa

#Start


#Two-way data binding

No one way a VIEW é composta pela compilação do template mais o model.
No two way data binding a VIEW é gerada pelo template e o model conecta
diretamente na view, podendo asism atualizá-la quando necessário e também
ser atualizado quando houver mudanças na view. Por isso se chama two way, 
porque nós atualizamos tando do model para a view como da view para o model.


###ex04
vou mostrar uma coisa legal

O angularjs ele começa a parsear o html da página a partir do ng-app
ali nós estamos usando ele em body, porém podemos usar ele no html

Para q isso?


Perceberam que conseguimos manipular qualquer tag do html que está
abaixo do ng-app?


#Filtros
Os filtros são usados ​​para a formatação de dados exibidos para o usuário na view.
Com eles conseguimos grandes poderes de transformação de dados já compilado
pelo Angular.

http://docs.angularjs.org/api/ng/filter/filter
http://docs.angularjs.org/guide/filter


**ex05** - filtro upperCase
http://docs.angularjs.org/api/ng/filter/uppercase

Além de usarmos um filtro para transformar nosso dados, podemos agregar
mais filtros de uma só vez. Além de usarmos os filtros padrões, podemos criar
os nosso próprios como no exercicio a seguir:


**ex05** - filtro upperCase reverseName

Para criarmos um filtro no Angular usamos a seguinte sintaxe:

  angular.module('yourModuleName', [])
    .filter('yourFilterName', function () {
        return function () {
            return;
        };
    });

Basicamente criamos um filtro atrelado ao nosso módulo, onde passamos no primeiro
parametro seu nome e no segundo sua funçnao de callback. Dentro do callbacl nós retornamos uma função para que a mesma seja executada quando for chamada na view.

Criando o filtro de reverseName:

.filter('reverseName', function () {
      return function (text) {
        if(text)
          return text.split("").reverse().join("");
      };
  });

Onde apenas invertemos o nome passado para o filtro
return text.split("").reverse().join("");

E utilizamos da seguinte forma:

{{ nome | uppercase | reverseName }}

Vamos demonstrar mais alguns filtros padrões do Angular



**ex06** - filtros: number, date, currency, lowercase, orderBy
http://docs.angularjs.org/api/ng/filter/currency
http://docs.angularjs.org/api/ng/filter/lowercase
http://docs.angularjs.org/api/ng/filter/number
http://docs.angularjs.org/api/ng/filter/date


###Modularização
A melhor forma de se trabalhar com o Angular é separar seus contextos 
por módulos, como por exemplo um módulo apenas para filtros.

**ex07** - modularização


    {{ 1234 | number:4 }}
    {{ Date.now() | date:'dd/MM/yyyy HH:mm:ss Z'}}



angular.module('workshopOnline', [workshopFilters]);
  angular.module('workshopFilters', [])
  .filter('reverseName', function () {
    return function (text) {
      if(text)
        return text.split("").reverse().join("");
    };
  });

Criamos um módulo apenas para os filtros e os injetamos no workshopOnline


#Controllers
Para criarmos as funcionalidades da nossa aplicação precisamos criar nossos
controllers, que serão so responsáveis por todas as ações que nossa usuário 
poderá executar.

angular.module('workshopOnline', ['filters'])
  .controller('BeerController', 
    function($scope){
      var cerveja1 = {name: 'kaiser', price: 2};
      var cerveja2 = {name: 'skol', price: 3};
      var cerveja3 = {name: 'glacial', price: 4};
      var cerveja4 = {name: 'polar', price: 6};

      $scope.cervejas = [cerveja1, cerveja2, cerveja3, cerveja4]

  })

angular.module('filters', [])
  .filter('reverseName', function () {
    return function (text) {
      if(text)
        return text.split("").reverse().join("");
    };
  })
  .filter('truncate', function () {
    return function (text, length, end) {
      if (isNaN(length))
          length = 10;
      if (end === undefined)
          end = "...";
      if (text.length <= length || text.length - end.length <= length) {
          return text;
      }
      else {
          return String(text).substring(0, length-end.length) + end;
      }
    };
});

**ex08** - controllers

filtro orderBy http://docs.angularjs.org/api/ng/filter/orderBy

Estamos setando a váriavel a ser ordenada via ng-click, setando seu valor(predicate)
como 'name', sendo assim nossa ordenação se dará pelos nomes das cervejas. Além 
de usarmos a ordenação por uma variável, também podemos inverter essa ordenação
utilizando o atributo reverse.

    <a href="" data-ng-click="predicate = 'name'; reverse=!reverse">Nome</a>

Para utilizarmos esse filtro precisamos fazer o seguinte:
    data-ng-repeat='beer in cervejas | orderBy: predicate:reverse'

A cada click no link nós estamos invertendo o valor de reverse com o seguinte código:
    reverse=!reverse

Além de usarmos o ng-repeat também estamos utilizando o ng-click, que nada mais é
que o famigerado onclick, porém o Angular esse onclick de uma forma especial, pois
o mesmo é uma diretiva gerenciada diretamente pelo Angular.

Para criarmos um controller urilizamos o seguinte o atributo `data-ng-controller`
passando o nome do seu controller que será criado em:

angular.module('workshopOnline', ['filters'])
  .controller('BeerController', 
    function($scope){
      var cerveja1 = {name: 'kaiser', price: 2};
      var cerveja2 = {name: 'skol', price: 3};
      var cerveja3 = {name: 'glacial', price: 4};
      var cerveja4 = {name: 'polar', price: 6};

      $scope.cervejas = [cerveja1, cerveja2, cerveja3, cerveja4]

  });

**ex09** - modularização

Porém como vimos anteriormente sobre a modularização dos filtros, podemos também
criar um mósulo apenas para nossos controllers.

angular.module('workshopOnline', ['filters'])
  .controller('BeerController', 
    function($scope){
      var cerveja1 = {name: 'kaiser', price: 2};
      var cerveja2 = {name: 'skol', price: 3};
      var cerveja3 = {name: 'glacial', price: 4};
      var cerveja4 = {name: 'polar', price: 6};

      $scope.cervejas = [cerveja1, cerveja2, cerveja3, cerveja4]

  });

Estou criando 4 cervejas diferentes e adicionando no escopo do controller.

var cerveja1 = {name: 'kaiser', price: 2};
var cerveja2 = {name: 'skol', price: 3};
var cerveja3 = {name: 'glacial', price: 4};
var cerveja4 = {name: 'polar', price: 6};

$scope.cervejas = [cerveja1, cerveja2, cerveja3, cerveja4];   

##Diretivas

**ng-repeat** Faz a iteração de um array do scope
http://docs.angularjs.org/api/ng/directive/ngRepeat



**REFATORAÇÃO**

Para tirarmos o módulo do escopo global, a melhor prática é setar o módulo
em uma variável local.


#Rotas
Na versão dos exemplos, 1.0.4, ainda o ngRoute não é um módulo a parte
por isso não necessitamos de nenhuma dependencia externa, depois
atualizarei com outros exemplos com a versão atual.

Para escrevermos nossas rotas utilizamos a função de config do module,
onde injetamos como dependencia o $routeProvider, o qual é nosso
provedor de rotas.

Com o módulo de routeProvider utilizamos o when para criarmos nossas rotas:

    config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
      $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
      $routeProvider.otherwise({redirectTo: '/view1'});
    }])

    Adiciona uma nova definição de rota para o serviço $route

    template: passa uma string html para ser usada na view
    templateUrl: passa o endereço de um template HTML
    controller: o controller a ser executado na rota requisitada

O otherwise é a regra para quando a rota requisitada não for encontrada.

Exemplo de rotas com angular-seed
git clone git@github.com:angular/angular-seed.git

O angular-ssed é um ótimo projeto para iniciarmos rapidamente alguma prova
de conceito com o angular, além desse projeto também iremos utilizar um
do mesmo autor, https://github.com/btford, o ['angular-express-seed'](https://github.com/btford/angular-express-seed)

Analisando o código nós vemos que na pasta de app temos um index.html, é apenas ele
que é inicialmente carregado, pois como o AngularJs se trata de um framework [SPA]()
então o resto das views serão carregadas dinamicamente. Como vemos nas rotas:

- /view1
- /view2

Então como então sendo carregadas essas views?

Vamos analisa o código do index.html

    <div ng-view></div>

Essa é a chamada para nossa view setada na rota em app/js/app.js:

    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});

Então nós estamos trocando apenas o conteúdo do ng-view e quando entramos em
cada rotao Angular irá buscar no caminho setado em templateUrl para trocar
a view no nosso arquivo.


#Ajax

Vamos adicionar o módulo de $http para podermos criar as requisições em ajax.

$http.get(url)
.success(function(data) {
  console.log(data);
})
.error(function(err){
  console.log('Error: ', err)
});

Toda a reuqisição feita pelo $http irá retornar uma promisse.


#Integração MEAN
Para agilizarmos nosso processo de criação de um projeto em MEAN, vamos utilizar
como base o ['angular-express-seed'](http://github.com:btford/angular-express-seed.git)

    git clone git@github.com:btford/angular-express-seed.git

Após clonarmos entramos na pasta angular-express-seed e instalamos as dependencias:

    npm install

Primeira coisa que faremos para integrar, será o MongoDb. Logo precisamos
instalar a dependencia do mongoose.

    npm install mongoose --save

Agora vamos rodar e ver como o projeto se comporta.

    node app

Primeira ação que faremos será criar uma rota para uma listagem das nossas cervejas.
Para isso editamos o arquivo public/js/app.js e adicionamos nossa rota:

    when('/beer', {
      templateUrl: 'partials/list',
      controller: 'BeerController'
    })

Antes de tudo precisamos criar nossa partial list, que será salva em views/partials.

    h2 MEAN Cervejaria

    {{ cervejas }}

Nessa view estamos utilizando o jade, pois quem irá renderizar a view será nosso
backend em Node.js + Express. Para diminuir a carga de renderização do client-side.

Para conseguirmos retornar algum dado para essa view, teremos que criar nossa API 
no backend e consumí-la com no Angular.

Então vamos criar nossas rotas no arquivo app.js, para facilitar nosso trabalho
re-usaremos as rotas já criadas anteriormente.
`pegar rotas em /nodejs/express/app.js`

**dica**: não esquecer de adicionar o módulo de beer 
    beer = require('./routes/beer')


    // Beer API
    // create
    app.post('/api/beer', beer.create);
    // retrieve
    app.get('/api/beer', beer.retrieve);
    // update
    app.put('/api/beer/:name', beer.update);
    // delete
    app.delete('/api/beer/:name', beer.delete);
    // get
    app.get('/api/beer/:name', beer.get);

Após criarmos nossas rotas, precisamos integrar nosso controller e model.
Primeiramente vamos integrar nosso model com no mongoose, reaproveitando de
`/nodejs/express/models/beer.js`

Após criado o model beer.js em models, precisamos criar nosso controller, 
reaproveitando de `/nodejs/express/routes/beer.js`



**WORKFLOW DO MEAN**
    criar uma rota -> criar uma view -> criar um controller -> criar uma requisição
para o backedn -> criar a rota no node.js -> criar o controller - criar o model

Depois de acertarmos o backend, vamos voltar para nosso controller BeerController
no angular, para que possamos criar a requisição para nosso backend.

   controller('BeerController', function ($scope, $http) {

      $http({
        method: 'GET',
        url: '/api/beer'
      }).
      success(function (data, status, headers, config) {
        // Se ocorrer sucesso injetarei o resultado na variavel
        // cerveja no nosso escopo local
        $scope.cervejas = data;
      }).
      error(function (data, status, headers, config) {
        // Se ocorrer sucesso injetarei o Error na variavel
        // cerveja no nosso escopo local
        $scope.cervejas = 'Error!';
      });

    })


##Create - Cadastrar
Após criarmos nossa primeira funcionalidade vamos criar nosso primeiro formulário
de cadastro de cervejas, para isso criamos nossa rota:


    when('/beer/create', {
      templateUrl: 'partials/create',
      controller: 'BeerController'
    })

Depois criamos nosso rota, vamos criar nosso formulário:

    form(data-ng-submit='cadastrar(form)')
      label Nome
        input(type='text', data-ng-model='form.name')
      label Graduação Alcoólica
        input(type='text', data-ng-model='form.alcohol')
      label Tipo
        input(type='text', data-ng-model='form.category')
      label Descrição
        textarea(type='text', data-ng-model='form.description')


Como podemos percerber no FORM nós temos a diretiva [ng-submit](http://docs.angularjs.org/api/ng/directive/ngSubmit) onde irá executar a função cadastrar,
que será criada em nosso BeerController, passando como parâmetro o form, 
encapsulado em ng-model. Nossa função ficará da seguinte forma:

    $scope.cadastrar = function(form){
      var url = '/api/beer';
      var dados = form;
      console.log('Salvando: ', dados);

      $http({
        method: 'POST',
        url: url, // url a ser requisitada
        data: dados // dados da cerveja a ser inserida
      }).
      success(function (data, status, headers, config) {
        var dados = $scope.form;
        console.log('dados: ', dados);
        $scope.msg = data;
      }).
      error(function (data, status, headers, config) {
        $scope.msg = 'Error!';
      });
    }; // fim cadastrar 


**refatoração de código**

    var makeResponse = function(response, data){
      response.writeHead(200, {"Content-Type": "text/plain"});
      response.write(JSON.stringify(data));
      response.end();
    }


    // vira isso por causa do json do express
    var makeResponse = function(res, data){
      res.json(data);
    }

##Get - Consultar
Para consultarmos uma cerveja o faremos pelo _id do nosso objeto, então criamos
a seguinte rota:

    when('/beer/:id', {
      templateUrl: 'partials/get',
      controller: 'BeerGetController'
    })

Perceba que agora utilizamos o identificador :id para que aceitemos variáveis 
nessa rota. Vamos criar nossa view get em partials:

    h2 MEAN Cervejaria

    h3 Cerveja consultada
      p
        | name: {{ cerveja.name }}
        br
        | alcohol: {{ cerveja.alcohol }}
        br
        | category: {{ cerveja.category }}
        br
        | description: {{ cerveja.description }}
        br

Então vamos criar nossa função que irá buscar nossa cerveja no BeerController.
Precisamos injetar a dependecia do routeParams:

    controller('BeerGetController', ['$scope','$http', '$routeParams', function ($scope, $http, $routeParams) 

*O routeParams é o responsável por manipular as variáveis das rotas*

Utilizamos a listagem das dependencias locais '$scope','$http' para que a 
referência das dependencias sejam mantidas quando o arquivo for minificado.

Nossa função de get da cerveja é essa:

      var id = $routeParams.id;   

      // Com o id a ser buscado, passarei para minha API
      var url = '/api/beer/'+id;
      $http({
        method: 'GET',
        url: url
      }).
      success(function (data, status, headers, config) {
        $scope.cerveja = data;
      }).
      error(function (data, status, headers, config) {
        $scope.cerveja = 'Error!';
      });
    }

Para que essa função tenha sucesso, precisamos **refatorar** o código do node.js.
Vamos refatorar o nome da variável das nossas rotas de name para id.

    app.put('/api/beer/:id', beer.update);
    // delete
    app.delete('/api/beer/:id', beer.delete);
    // get
    app.get('/api/beer/:id', beer.get);

Depois refatoramos a função beerGet em routes:

    var beerGet = function(req, res){
      var id = req.params.id;
      var query = {_id: id};

      _model.get(req, res, query);
    }

##Update - Alterar
Vamos **refatorar** nossa view de get para que os valores estejam em inputs.

    h2 MEAN Cervejaria

    p
      strong=msg

    h3 Cerveja consultada
      form
        p
          | name: {{ cerveja.name }}
          label
            input(type='text', data-ng-model='cerveja.name')
          br
          | alcohol: {{ cerveja.alcohol }}
          label
            input(type='text', data-ng-model='cerveja.alcohol')
          br
          | category: {{ cerveja.category }}
          label
            input(type='text', data-ng-model='cerveja.category')
          br
          | description: {{ cerveja.description }}
          label
            textarea(type='text', data-ng-model='cerveja.description')
          br

    button(data-ng-click='alterar(cerveja)') DELETAR

Depois disso precisamos criar nossa função de alterar no nosso BeerGetController:

    $scope.alterar = function(cerveja){
      console.log(cerveja._id);
      var url = '/api/beer/'+cerveja._id;
      console.log('url', url); // em app.js '/api/beer/:id', beer.update

      $http({
        method: 'PUT',
        url: url
      }).
      success(function (data, status, headers, config) {
        var msg = 'Cerveja alterada';
        $scope.msg = msg;
        console.log(msg);
      }).
      error(function (data, status, headers, config) {
        var msg = 'Error! Cerveja não alterada';
        $scope.cerveja = msg;
        console.log(msg);
      });
    }

Para funcionar precisamos refatoramos a função beerUpdate em routes:

var beerUpdate = function(req, res){
  // nome da cerveja a ser alterada
  var id = req.params.id;
  // query da cerveja a ser alterada
  var query = {_id: id};
  // dados a serem modificados
  var mod = req.body;
  console.log(mod, query);
  _model.update(req, res, query, mod);
}


Caso mandarmos o registro inteiro com _id o mongoose retornará o seguinte erro:

    Alterar:  { _id: '532a4fee5594810000d8dfdd' } { __v: 0,
      _id: '532a4fee5594810000d8dfdd',
      alcohol: '1',
      created: '2014-03-20T02:18:22.453Z',
      category: 'pilsen',
      description: '12345678',
      name: 'Skol' }
    { [MongoError: Mod on _id not allowed]
      name: 'MongoError',
      err: 'Mod on _id not allowed',
      code: 10148,
      n: 0,
      connectionId: 1042,
      ok: 1 }

Então para isso nós precisamos montar nosso objeto a ser modificado.

    var dados = {
        name: cerveja.name,
        alcohol: cerveja.alcohol,
        category: cerveja.category,
        description: cerveja.description,
      };      

##Delete - Deletar
Para deletarmos uma cerveja o faremos pelo _id do nosso objeto, mas não precisaremos
de uma rota no Angular pois utilizaremos uma função para acionar o delete do backend.

Antes de criarmos nossa função vamos **refatorar** nossa view get, adicionando:

    button(data-ng-click='deletar(cerveja)') DELETAR

Vamos criar nossa função que irá deletar nossa cerveja no BeerGetController.


      var id = $routeParams.id;   

      // Com o id a ser buscado, passarei para minha API
      var url = '/api/beer/'+id;
      $http({
        method: 'GET',
        url: url
      }).
      success(function (data, status, headers, config) {
        $scope.cerveja = data;
      }).
      error(function (data, status, headers, config) {
        $scope.cerveja = 'Error!';
      });
    }

Para que essa função tenha sucesso, precisamos **refatorar** o código do node.js.
Vamos refatorar o nome da variável das nossas rotas de name para id.

    app.put('/api/beer/:id', beer.update);
    // delete
    app.delete('/api/beer/:id', beer.delete);
    // get
    app.get('/api/beer/:id', beer.get);

Depois refatoramos a função beerDelete em routes:

    var beerDelete = function(req, res){
      var url = req.url; // /beer/83748923hdnskajfo
      var id = req.params.id;
      var query = {_id: id};

      _model.delete(req, res, query);
    }

#Listagem
Para finalizarmos nossa integração do MEAN, vamos refatorar nossa listagem. Começando
pela view list:

    h2 MEAN Cervejaria

    h3 Cervjas JSON
    {{ cervejas }}

    ul
      li(data-ng-repeat='cerveja in cervejas')
        a(href='/beer/{{cerveja._id}}') 
          {{ cerveja.name }} - {{ cerveja.category }} - {{ cerveja.alcohol }}

Estamos utilizando a diretiva [ng-repeat](http://docs.angularjs.org/api/ng/directive/ngRepeat) para iterarmos no array das cervejas, adicionando um link com o atributo 
href chamando nossa rota de get do Angular, entrando no formulário de alteração.


