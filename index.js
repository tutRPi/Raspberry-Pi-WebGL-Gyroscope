var express = require('express');
var gyroscopeController = require('./controllers/gyroscopeController');

require('dotenv').config()


var app = express();
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendfile('index.html');
});

app.get('/api/data', gyroscopeController.data);

app.listen(process.env.PORT || 3000, function(){
  console.log("Listening on port " + (process.env.PORT || 3000))
});