'use strict';
describe('This is my first test case.', function(){
  beforeEach(module('FunApp'));

  describe('FunController', function(){
    expect(5).toBe(5);
  });
});
