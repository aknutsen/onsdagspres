'use strict';

/**
 * @ngdoc function
 * @name cidemoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cidemoApp
 */
angular.module('cidemoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
