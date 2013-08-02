
var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var filename = "index.html";
var buf = fs.readFileSync(filename);
var message = buf.toString('utf8',0,buf.length);


app.get('/', function(request, response) {
  response.send(message);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
