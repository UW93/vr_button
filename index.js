var express = require('express');
var app = express();

const port = process.env.PORT || 1993

app.get('/', function (req, res) {
   
   res.sendFile(__dirname + '/index.html');
})


var server = app.listen(port, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})