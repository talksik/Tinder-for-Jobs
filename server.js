var express = require('express');
var app = express();

app.use(express.static('public'));

//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));

const port = server.address().port || 8081;
var server = app.listen(port, function () {
  console.log('Server started at http://localhost:%s', port);
});
