var express = require('express')
var app = express()
var val = 'Testing';

// process a Get Request
function doGet (req, res)  {
   res.send('Hi getter man!' + req.param('b'));
   console.log('i got hit! ' + req.param('b'));
}

// process a Get Request
function doPost (req, res)  {
  res.send('Hi Poster boy!' + req.param('b'));
  console.log('i got hit! ' + req.param('b'));
}

// only once at the start of the service...
function logStart() {
  console.log('i got it started!');
}

app.get('/', doGet);
app.post('/', doPost);
app.listen(8000, logStart() );
