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
  }).
  controller('MyCtrl1', function ($scope) {
    // write Ctrl here

  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  });
