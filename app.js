var express = require('express');
var app = express();
var path = require("path");

app.use(express.static(path.join(__dirname + '/public')));


app.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname+'/views/login.html'));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/views/index.html'));
});

app.get('/swipe', function (req, res) {
  res.sendFile(path.join(__dirname+'/views/swipe.html'));
});

app.get('/recipe', function (req, res) {
  res.sendFile(path.join(__dirname+'/views/recipe.html'));
});

var server = app.listen((process.env.PORT || 3000), function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Crave Demo app listening at http://localhost/%s', port);
});