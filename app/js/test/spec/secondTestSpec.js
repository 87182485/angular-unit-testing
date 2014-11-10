/**
 * Created by Gary on 11/10/2014.
 */
'use strict';
describe('Unit: FirstController', function(){
  beforeEach(module('FunApp'));

  var ctrl, scope;

  beforeEach(inject(function($controller, $rootScope){
    scope = $rootScope.$new();

    ctrl = $controller('FunController as Fun', {
      $scope:scope
    });
  }));

  it('SortBy should be return title as string', function(){
    expect(scope.Fun.sortBy).toEqual('title');
  })
});
