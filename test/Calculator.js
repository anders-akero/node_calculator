const assert = require('assert');
const Calculator = require('../Calculator');

describe('Calculator', function () {

    describe('#add()', function () {
        it('should return the sum of given arguments', function () {
            const args = [5, 5, 5];
            const calc = new Calculator();
            assert.equal(calc.add(args), 15);
        });
    });

    describe('#sub()', function () {
        it('should return the negative sum of given arguments', function () {
            const args = [5, 5, 5];
            const calc = new Calculator();
            assert.equal(calc.sub(args), -15);
        });
    });

    describe('#multiply()', function () {
        it('should return the multiplicated value of given arguments', function () {
            const args = [5, 5, 5];
            const calc = new Calculator();
            assert.equal(calc.multiply(args), 125);
        });
    });
});
