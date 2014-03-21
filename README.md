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







