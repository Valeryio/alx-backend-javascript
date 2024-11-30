// import * as sinon from 'sinon';
// import * as Utils from './utils.js';
// import * as payment from './3-payment.js';

const sinon = require('sinon');
const Utils = require('./utils');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');


describe('sendPaymentRequestToApi', () => {
    it('it should call Utils.calculateNUmber with correct arguments', () => {
        const utils = Utils;
        const utilSpy = sinon.spy(utils, 'calculateNumber');

        sendPaymentRequestToApi(10, 3);
        expect(utilSpy.calledOnce).to.be.true;
        expect(utilSpy.callCount).to.be.equal(1);

        // Restore the original method
        utilSpy.restore();
    });

    it('verify if calculateNumber is called with the right args', () => {
        const utils = Utils;
        const utilSpy = sinon.spy(utils, 'calculateNumber');

        sendPaymentRequestToApi(10, 3);
        expect(utilSpy.calledWith("SUM", 10, 3)).to.be.true;

        // Restore the original method
        utilSpy.restore();
    })
})


// expect(utilSpy.called).to.be.true;

