var express = require('express');
var app = express();
const PORT = 3000;

var middleware = require('./middleware.js');

// app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
  res.send('about us');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
  console.log('Server started at port ' + PORT + '!');
});