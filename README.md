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


Após criarmos nossa primeira funcionalidade vamos criar nosso primeiro formulário
de cadastrod e cervejas, para isso criamos nossa rota:








