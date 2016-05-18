var Coins = require(APP_ROOT + '/models/coins');

describe('Coins model ', function () {

    var testAmount = "399";
    var denominations = [1, 2, 5, 10, 20, 50, 100, 200];
    var result;

    describe('getChange', function () {

        it('should return an array', function () {
            result = Coins.getChange(testAmount);
            result.should.be.an('array');
        });

        it('should return the minimum possible coins for the amount', function () {
            Coins.getChange(testAmount).length.should.equal(8);

            Coins.getChange(1).length.should.equal(1);

            Coins.getChange(3).length.should.equal(2);

            Coins.getChange(300).length.should.equal(2);

            Coins.getChange(312).length.should.equal(4);

            Coins.getChange(999).length.should.equal(11);
        });

    });

    describe('getMaxOfArray', function () {

        it('should return a number', function() {
            result = Coins.getMaxOfArray(denominations);
            result.should.be.a('number');
        });

        it('should not return a number that exceeds the limit', function() {
            result = Coins.getMaxOfArray(denominations, 9);
            result.should.be.below(10);
        });

        it('should return the highest possible coin', function() {
            result = Coins.getMaxOfArray(denominations, 10);
            result.should.equal(10);
        });

    });

    describe('toString', function () {

        it('should return a string', function() {
            result = Coins.toString(testAmount);
            result.should.be.a('string');
        });

        it('should add currency prefix/suffix', function() {
            result = Coins.toString(testAmount);
            result.should.contain('£');

            result = Coins.toString(99);
            result.should.contain('p');
        });

    });

    describe('toValue', function () {

        it('should strip text', function() {
            result = Coins.toValue('£3.42p');
            result.should.match(/\d/);
        });

        it('should convert to pounds if a pound value is given', function() {
            result = Coins.toValue('£3');
            result.should.equal(300);
        });

    });

    describe('convertUp', function () {

        it('should convert pounds to pence', function() {
            result = Coins.convertUp(3);
            result.should.equal(300);
        });

    });

    describe('convertDown', function () {

        it('should convert pence to pounds', function() {
            result = Coins.convertDown(300);
            result.should.equal(3);
        });
    });

});