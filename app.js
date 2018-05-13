const Calculator = require('./Calculator');
const express = require('express');
const app = express();
const prefix = 'Result: ';

app.use('/add', function (req, res) {
    const args = req.path.substring(1).split('/');
    const calc = new Calculator();
    res.send(prefix + calc.add(args));
});

app.listen(3000);
