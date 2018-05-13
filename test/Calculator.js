const assert = require('assert');
const Calculator = require('../Calculator');

describe('Calculator', function() {
    describe('#add()', function() {
        it('should return the sum of given arguments', function() {
            const args = [5, 5, 5];
            const calc = new Calculator();
            assert.equal(calc.add(args), 15);
        });
    });
});
