'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('cidemoApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should return empty string for firstName when initialized', function () {
    expect(scope.firstName()).toBe('');
  });

  it('should return the complete string when name is one word', function () {
    scope.name = 'John';
    expect(scope.firstName()).toBe('John');
  });

  it('should return the first name only when name and surname is specified', function () {
    scope.name = 'John Doe';
    expect(scope.firstName()).toBe('John');
  });
});
