// const chai = require('chai');
// const app = require('../app');

import * as app from '../app.js';
import * as chai from 'chai';

const assert = chai.assert;

describe('App', function() {
  it('App should return hello', function() {
    assert.equal(app.hello(), "Hello world!");
  })
});