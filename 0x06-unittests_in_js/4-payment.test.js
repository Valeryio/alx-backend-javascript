// import * as sinon from 'sinon';
// import * as Utils from './utils.js';
// import * as payment from './3-payment.js';

const sinon = require('sinon');
const Utils = require('./utils');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');


describe('sendPaymentRequestToApi', () => {
    it('it should call Utils.calculateNumber is called', () => {
        const utils = Utils;
        const utilSpy = sinon.spy(utils, 'calculateNumber');

        sendPaymentRequestToApi(100, 20);
        expect(utilSpy.calledOnce).to.be.true;
        expect(utilSpy.callCount).to.be.equal(1);

        // Restore the original method
        utilSpy.restore();
    });

    it('verify if calculateNumber is called with the right args', () => {
        const utils = Utils;
        const utilSpy = sinon.spy(utils, 'calculateNumber');
    
        sendPaymentRequestToApi(100, 20);
    
        expect(utilSpy.calledWith("SUM", 100, 20)).to.be.true;

        // Restore the original method
        utilSpy.restore();
    });

    it('verify if calculateNumber is remplaced with the stub', () => {
        const utils = Utils;
        const utilStub = sinon.stub(utils, 'calculateNumber');

        utilStub.returns(10);
        sendPaymentRequestToApi(100, 20);
    
        expect(utilStub.returnValues[0]).to.be.equal(10);

        // Restore the original method
        utilStub.restore();
    });
});