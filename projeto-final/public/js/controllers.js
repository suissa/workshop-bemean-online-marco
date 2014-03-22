'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

  }).
  controller('BeerController', function ($scope, $http, $routeParams) {

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

    $scope.get = function(){
      
    }

  }).
  controller('BeerGetController', ['$scope','$http', '$routeParams', function ($scope, $http, $routeParams) {
    // o id vem da nossa rota /beer/:id
    // Como o req.params.id no Express
    var id = $routeParams.id;   

    // Com o id a ser buscado, passarei para minha API
    var url = '/api/beer/'+id;
    $http({
      method: 'GET',
      url: url
    }).
    success(function (data, status, headers, config) {
      $scope.cerveja = data;
      console.log('Cerveja: ', data);
    }).
    error(function (data, status, headers, config) {
      $scope.cerveja = 'Error!';
      console.log('Error: ', data);
    });

    $scope.deletar = function(cerveja){
      console.log(cerveja._id);
      var url = '/api/beer/'+cerveja._id;
      console.log('url', url);

      $http({
        method: 'DELETE',
        url: url
      }).
      success(function (data, status, headers, config) {
        var msg = 'Cerveja deletada';
        $scope.msg = msg;
        console.log(msg);
      }).
      error(function (data, status, headers, config) {
        var msg = 'Error! Cerveja não deletada';
        $scope.cerveja = msg;
        console.log(msg);
      });
    }
  }]).
  controller('MyCtrl1', function ($scope) {
    // write Ctrl here

  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  });
