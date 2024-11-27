import * as calcul from './0-calcul.js';
import * as chai from 'chai';

const assert = chai.assert;
// const calculateNumber = calcul.calculateNumber;


describe("calculateNumber", () => {
  it("Should return 4", function () {
    assert.equal(calcul.calculateNumber(1, 3), 4);
  });

  it("Should return 5", function () {
    assert.equal(calcul.calculateNumber(1, 3.7), 5);
  });

  it("Should return 5", function () {
    assert.equal(calcul.calculateNumber(1.2, 3.7), 5);
  });

  it("Should return 6", function () {
    assert.equal(calcul.calculateNumber(1.5, 3.7), 6);
  });
});