/*global angular */
var proj3 = angular.module('proj3', ['ngRoute']);

proj3.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'html/likes.html',
        controller: 'MainCtrl as mainCtrl'
      }).
      when('/bajs', {
        templateUrl: 'html/likes.html',
        controller: 'mainCtrl as mainCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
