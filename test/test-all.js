// Init reqs
/* jslint node: true */
/* global describe: false */
/* global it: false */
'use strict';

var money  = require('../'),
    expect = require('chai').expect;

// Tests

// Test for the module
describe('money', function() {

  // Test for quote
  describe('quote()', function() {

    it('should get information', function(done) {
      money.quote({symbols: ['USDCAD', 'USDEUR', 'JPYUSD', 'TWTR','NASDAQ']}, function(err, result) {
        if(err) return done(err);

        expect(err).to.be.equal(undefined);

        expect(result).to.be.a('array');
        expect(result).to.have.property('length').to.be.equal(5);

        expect(result[0]).to.be.a('object');
        expect(result[0]).to.have.property('symbol', 'USDCAD');
        expect(result[0]).to.have.property('type', 'Currency');
        expect(result[0]).to.have.property('name');
        expect(result[0]).to.have.property('high');
        expect(result[0]).to.have.property('low');
        expect(result[0]).to.have.property('last');
        expect(result[0]).to.have.property('volume');
        expect(result[0]).to.have.property('change');
        expect(result[0]).to.have.property('percentchange');
        expect(result[0]).to.have.property('timeoflastsale');
        expect(result[0]).to.have.property('currency');
        expect(result[0]).to.have.property('ask');
        expect(result[0]).to.have.property('bid');
        expect(result[0]).to.have.property('yearhigh');
        expect(result[0]).to.have.property('yearlow');
        expect(result[0]).to.have.property('marketcap');
        expect(result[0]).to.have.property('pe');
        expect(result[0]).to.have.property('close');
        expect(result[0]).to.have.property('open');
        expect(result[0]).to.have.property('eps');
        expect(result[0]).to.have.property('exchange');
        expect(result[0]).to.have.property('sizeoflastsale');

        expect(result[3]).to.be.a('object');
        expect(result[3]).to.have.property('symbol', 'TWTR');
        expect(result[3]).to.have.property('type', 'Equity');

        expect(result[4]).to.be.a('object');
        expect(result[4]).to.have.property('symbol', 'NASDAQ');
        expect(result[4]).to.have.property('type', 'Index');

        done();
      });
    });
  });
});