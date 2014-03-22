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

  }).
  controller('MyCtrl1', function ($scope) {
    // write Ctrl here

  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  });
