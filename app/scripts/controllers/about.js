'use strict';

/**
 * @ngdoc function
 * @name angularUnitTestingApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularUnitTestingApp
 */
angular.module('angularUnitTestingApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
