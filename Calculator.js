'use strict';

class Calculator {
    constructor(sum = null) {
        this.sum = sum;
    }

    add(args) {
        for (const arg of args) {
            this.sum += parseInt(arg);
        }
        return this.sum;
    }

    sub(args) {
        for (const arg of args) {
            this.sum -= parseInt(arg);
        }
        return this.sum;
    }

    multiply(args) {
        if (this.sum === null) {
            this.sum = 1;
        }
        for (const arg of args) {
            this.sum *= parseInt(arg);
        }
        return this.sum;
    }
}

module.exports = Calculator;