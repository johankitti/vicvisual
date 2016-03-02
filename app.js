'use strict';

var express = require('express');
var http = require('http');
var https = require('https');
var bodyParser = require('body-parser');
//var data = require('./data/data.json');

// Setup server
var app = express();

app.use("/js", express.static(__dirname + "/web/js"));
app.use("/css", express.static(__dirname + "/web/css"));
app.use("/html", express.static(__dirname + "/web/html"));
app.use("/assets", express.static(__dirname + "/web/assets"));
app.use("/data", express.static(__dirname + "/data"));
app.use("/bower_components", express.static(__dirname + "/web/bower_components"));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var WORKERS = process.env.WEB_CONCURRENCY || 1;

var server = app.listen(process.env.PORT || 80, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Procalize App is listening at http://%s:%s', host, port);
});

// STATIC CONTENT
app.all("/", function(req, res, next) {
	res.sendfile("index.html", { root: __dirname + "/web" });
});

	// TEST PING
app.get('/ping', function(req, res){
	res.status(200);
  res.send('pong');
});

/*

// TEST API GET
app.get('/api/data', function(req, res) {
	res.send(data.data);
});

*/
