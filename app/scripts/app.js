'use strict';

/**
 * @ngdoc overview
 * @name angularUnitTestingApp
 * @description
 * # angularUnitTestingApp
 *
 * Main module of the application.
 */
angular
  .module('angularUnitTestingApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
