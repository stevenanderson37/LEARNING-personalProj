// REQUIRE //
var express = require('express');
var cors = require('cors');
var massive = require('massive');
var bodyParser = require('body-parser');

// APP //
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + './../public'));

// MASSIVE //
var massiveUri = 'postgres://localhost/macbook';
var massiveServer = massive.connectSync({
	connectionString: massiveUri
});
app.set('db', massiveServer);
var db = app.get('db');




// LISTEN //
var port = 3000;
app.listen(port, function() {
	console.log('Listening on port ' + port);
});
