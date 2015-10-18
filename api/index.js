var app = require('./app.js');
var roles = require('./roles.js');

app.get('roles', roles.read);