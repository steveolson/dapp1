var express = require('express')
var app = express()
var val = 'Testing';

app.get('/', function (req, res) {
  res.send('Hello dapp1! ' + req.param('b'));
  // req.get('Content-Type')
})

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})