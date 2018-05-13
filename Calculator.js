'use strict';

class Calculator {
    constructor(sum = 0) {
        this.sum = sum;
    }

    add(args) {
        for (const arg of args) {
            this.sum += parseInt(arg);
        }
        return this.sum;
    }
}

module.exports = Calculator;