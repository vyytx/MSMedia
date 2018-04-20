var express = require('express');
var app = express();
var http = require('http').Server(app);

app.set('port', (process.env.PORT || 3000));

app.get('/', function(req, res){
	res.send('Hello World');
});

http.listen(app.get("port") , function(){
	console.log('listening on *:' + app.get("port"));
});