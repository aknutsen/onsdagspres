'use strict';

/**
 * @ngdoc overview
 * @name cidemoApp
 * @description
 * # cidemoApp
 *
 * Main module of the application.
 */
angular
  .module('cidemoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(["$routeProvider", function ($routeProvider) {
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
  }]);

'use strict';

/**
 * @ngdoc function
 * @name cidemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cidemoApp
 */
angular.module('cidemoApp')
  .controller('MainCtrl', ["$scope", "$timeout", function ($scope, $timeout) {
  	$scope.name = '';
  	$scope.weather = '';
    $scope.firstName = function() {
    	return $scope.name.split(' ')[0];
    };

    $scope.guessLastName = function() {
    	$scope.lastName = 'Please wait while I\'m guessing';
	    $timeout(function() {
	    	var parts = $scope.name.split(' ');
	    	if (parts.length > 1) {
	    		$scope.lastName = 'Must be ' +parts[parts.length-1]+'!';
        }
	    	else {
          $scope.lastName = 'Maybe Lee?';
        }
	    		
	    }, 1300);
	  };
  }]);

'use strict';

/**
 * @ngdoc function
 * @name cidemoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cidemoApp
 */
angular.module('cidemoApp')
  .controller('AboutCtrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
