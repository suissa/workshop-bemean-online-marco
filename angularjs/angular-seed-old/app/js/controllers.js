'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {
// http://cep.correiocontrol.com.br/02011200.json
    var url = 'http://cep.correiocontrol.com.br/02011200.json';
    $http.get(url).success(function(data) {
    // prepare data here
      callback(data);
    });
  }])
  .controller('MyCtrl2', [function() {

  }]);