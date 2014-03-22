'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/view1', {
      templateUrl: 'partials/partial1',
      controller: 'MyCtrl1'
    }).
    when('/view2', {
      templateUrl: 'partials/partial2',
      controller: 'MyCtrl2'
    }).
    when('/beer', {
      templateUrl: 'partials/list',
      controller: 'BeerController'
    }).
    when('/beer/create', {
      templateUrl: 'partials/create',
      controller: 'BeerController'
    }).
    when('/beer/:id', {
      templateUrl: 'partials/get',
      controller: 'BeerGetController'
    }).
    otherwise({
      redirectTo: '/view1'
    });

  $locationProvider.html5Mode(true);
});
