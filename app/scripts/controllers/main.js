'use strict';

/**
 * @ngdoc function
 * @name cidemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cidemoApp
 */
angular.module('cidemoApp')
  .controller('MainCtrl', function ($scope, $timeout) {
  	$scope.name = '';
  	$scope.weather = '';
    $scope.firstName = function() {
    	return $scope.name.split(' ')[0];
    };

    $scope.guessLastName = function() {
    	$scope.lastName = 'Please wait while I\'m guessing';
	    $timeout(function() {
	    	var parts = $scope.name.split(' ');
	    	if (parts.length > 1)
	    		$scope.lastName = 'Must be ' +parts[parts.length-1]+'!';
	    	else
	    		$scope.lastName = 'Maybe Lee?';
	    }, 1300);
	  };
  });
