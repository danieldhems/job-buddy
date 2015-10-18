var bodyParser = require('body-parser');
var	express = require('express');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('./bower_components'));
app.use(express.static('./public'));

app.use('/roles', require('./api/roles.js'));
app.use('/agents', require('./api/agents.js'));
app.use('/interviews', require('./api/interviews.js'));
app.use('/representation', require('./api/representation.js'));

app.get('/', function(req, res){
	res.sendFile('index.html');
});

module.exports = app;
