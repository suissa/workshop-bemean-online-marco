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



**ex06** - filtros: number, date, currency, lowercase
http://docs.angularjs.org/api/ng/filter/currency
http://docs.angularjs.org/api/ng/filter/lowercase
http://docs.angularjs.org/api/ng/filter/number
http://docs.angularjs.org/api/ng/filter/date



    {{ 1234 | number:4 }}
    {{ Date.now() | date:'dd/MM/yyyy HH:mm:ss Z'}}




###Modularização
A melhor forma de se trabalhar com o Angular é separar seus contextos 
por módulos, como por exemplo um módulo apenas para filtros.

**ex07** - modularização

angular.module('workshopOnline', [workshopFilters]);
  angular.module('workshopFilters', [])
  .filter('reverseName', function () {
    return function (text) {
      if(text)
        return text.split("").reverse().join("");
    };
  });

Criamos um módulo apenas para os filtros e os injetamos no workshopOnline







