// import * as calcul from './0-calcul.js';
// import * as chai from 'chai';
// import assert from 'assert';

// const calculateNumber = require('./0-calcul');

// const assert = chai.assert;
// const calculateNumber = calcul.calculateNumber;

const calculateNumber = require('./0-calcul').calculateNumber;
const assert = require('assert');


describe("calculateNumber", () => {
  it("...", function () {
    assert.equal(calculateNumber(1, 3), 4);
  });

  it("...", function () {
    assert.equal(calculateNumber(1, 3.7), 5);
  });

  it("...", function () {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });

  it("...", function () {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});