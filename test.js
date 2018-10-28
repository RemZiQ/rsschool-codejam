
const assert = require('assert');
const sumOfOthers = require('./src/sumOfOthers.js');

describe('sumOfOthers', () => {
  it('should return [9, 8, 7, 6]', function () {
    const result = sumOfOthers([1, 2, 3, 4]).join('');
    assert.equal(result, [9, 8, 7, 6].join(''));
  });

  it('should return [140, 130, 120, 110, 100]', function () {
    const result = sumOfOthers([10, 20, 30, 40, 50]).join('');
    assert.equal(result, [140, 130, 120, 110, 100].join(''));
  });

  it('should return [1129, 1125, 1100, 708, 1080, 508]', function () {
    const result = sumOfOthers([1, 5, 30, 422, 50, 622]).join('');
    assert.equal(result, [1129, 1125, 1100, 708, 1080, 508].join(''));
  });

  it('should return [236, 232, 207, 237, 186, 196, 138, 237, 236, 228]', function () {
    const result = sumOfOthers([1, 5, 30, 0, 51, 41, 99, 0, 1, 9]).join('');
    assert.equal(result, [236, 232, 207, 237, 186, 196, 138, 237, 236, 228].join(''));
  });
});

const make = require('./src/make.js');
const sum = function (a, b) { return a + b; };
describe('make', () => {
  it('should return 777', function () {
    const result = make(15)(34, 21, 666)(41)(sum);
    assert.equal(result, 777);
  });

  it('should return 211', function () {
    const result = make(15)(34, 21, 22, 77)(41, 1)(sum);
    assert.equal(result, 211);
  });

  it('should return 70', function () {
    const result = make(15)(34, 21, sum);
    assert.equal(result, 70);
  });
});

