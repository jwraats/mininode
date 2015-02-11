// Includes / declerations
var express = require('express');
var mysql = require('mysql');
var app = express();
var settings = require('./settings.json');

//Connection with the DB
var connection = mysql.createConnection({
	host : settings.dbServer,
	user : settings.dbUsername,
	password : settings.dbPassword,
	database : settings.dbScheme
});
app.set('dbConnection', connection);

//Routes
app.all('*', function(req, res, next) {
	// Log alle request
	console.log( req.method + " " + req.url) ;
	next();
});
app.use('/', require('./routes.js'));


// LISTEN UP: Start server
var port = settings.webPort | 8080;
var server = app.listen( port , function() {
	console.log('Listening server on port ' + server.address().port );
});
