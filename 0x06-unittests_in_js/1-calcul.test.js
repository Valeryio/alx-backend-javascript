import * as calcul from './1-calcul.js';
// import * as chai from 'chai';
import assert from 'assert';

// const assert = chai.assert;

describe("calculateNumber", () => {
  it("SUM", function () {
    let result = calcul.calculateNumber("SUM", 1.4, 4.5);
    assert.equal(result, 6);
  })

  it("SUBTRACT", function () {
    let result = calcul.calculateNumber("SUBTRACT", 1.4, 4.5);
    assert.equal(result, -4);
  })

  it("DIVIDE", function () {
    let result = calcul.calculateNumber("DIVIDE", 1.4, 4.5);
    assert.equal(result, 0.2);
  })

  it("DIVIDE", function () {
    let result = calcul.calculateNumber("DIVIDE", 1.4, 0);
    assert.equal(result, "Error");
  })
});