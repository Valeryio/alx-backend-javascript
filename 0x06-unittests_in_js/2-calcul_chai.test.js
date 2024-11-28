import * as calcul from './2-calcul_chai.js';
import * as chai from 'chai';

const assert = chai.assert;

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
