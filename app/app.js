'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['googlechart',
    'ngAria',
    'ngAnimate',
    'ngMaterial',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
