// import * as sinon from 'sinon';
// import * as Utils from './utils.js';
// import * as payment from './3-payment.js';

const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');



const utils = Utils;
const utilSpy = sinon.spy(utils, 'calculateNumber');


sendPaymentRequestToApi(10, 3);


console.log(utilSpy.called);
console.log(utilSpy.callCount);



// Restore the original method
utilSpy.restore();