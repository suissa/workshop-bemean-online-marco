'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var services = angular.module('myApp.services', ['ngResource']).
  value('version', '0.1');

// services.factory('CorreioFactory', function ($resource) {
//     return $resource('http://cep.correiocontrol.com.br/02011200.json', {}, {
//         query: { method: 'GET', isArray: true }
//         // create: { method: 'POST' }
//     })
// });
// services.factory('CEP', ['$http', function($http){
//   return{
//     get: function(callback){
//       var url = 'http://cep.correiocontrol.com.br/02011200.json';
//       $http.get('books.json').success(function(data) {
//       // prepare data here
//       callback(data);
//       });
//     }
//   };
}]);