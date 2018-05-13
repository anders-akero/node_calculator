const express = require('express');
const app = express();
const prefix = 'Result: ';

app.use('/add', function(req, res){
  const args =  req.path.substring(1).split('/');
  let result = 0;
  for (const arg of args) {
    result += parseInt(arg);
  }
  res.send(prefix + result);
});

app.listen(3000);
