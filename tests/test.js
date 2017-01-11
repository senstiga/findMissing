'use strict'

var chai = require('jasmine');
// var assert = chai.assert;
//var expect = chai.expect;
// var should = chai.should();
var myApp = require('../app/library.js');// root to ap

describe("Find missing number two lists: ", function() {
  describe("Case for en empty list", function() {
    it("should return 0 for empty list", function() {
      expect(myApp.findMissing([], [])).toEqual(0);
    });
  });
  describe("Case for lists with the same entries", function() {
    it("should return 0 for [2],[2]", function() {
      expect(myApp.findMissing([2], [2])).toEqual(0);
    });
    it("should return 0 for [4],[4]", function() {
      expect(myApp.findMissing([4], [4])).toEqual(0);
    });
    it("should return 0 for [7],[7]", function() {
      expect(myApp.findMissing([7], [7])).toEqual(0);
    });

    it("should return 0 for [19],[19]", function() {
      expect(myApp.findMissing([19], [19])).toEqual(0);
    });
  });
  describe("Case for lists with similar entries and a missing number", function() {
    it("should return 5 for [1,2],[1,2,5]", function() {
      expect(myApp.findMissing([1, 2], [1, 2, 5])).toEqual(5);
    });
    it("should return 10 for [4, 6, 8],[4, 6, 8, 10]", function() {
      expect(myApp.findMissing([4, 6, 8], [4, 6, 8, 10])).toEqual(10);
    });
    it("should return 1 for [5, 4, 7, 6, 11, 66],[5, 4, 1, 7, 6, 11, 66]", function() {
      expect(myApp.findMissing([5, 4, 7, 6, 11, 66], [5, 4, 177, 7, 61, 11, 3])).toEqual(3);
    });

    it("should return 1 for [5, 4, 7, 6, 11, 66],[5, 4, 1, 7, 6, 11, 66]", function() {
      expect(myApp.findMissing([35, 4, 7, 6, 11, 66], [5, 4, 1, 7, 6, 11, 19])).toEqual(19);
    });

    it("should return 1 for [8, 4, 7, 6, 14, 96],[5, 4, 1, 7, 6, 11, 0]", function() {
      expect(myApp.findMissing([5, 4, 7, 6, 11, 66], [5, 4, 1, 7, 6, 11, 0])).toEqual(0);
    });
  });
});