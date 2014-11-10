/**
 * Created by Gary on 11/10/2014.
 */
'use strict';
describe('This is my first test case.', function(){
  beforeEach(module('FunApp'));

  it('my first angular unit test', function (){
    expect(5).toEqual(5);
  });
});
