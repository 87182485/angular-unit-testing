'use strict';

/**
 * @ngdoc function
 * @name angularUnitTestingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularUnitTestingApp
 */
angular.module('angularUnitTestingApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
