var mysql = require('mysql');

var dbConfig = {
	host: 'localhost',
	database: 'job_buddy',
	user: 'dhems',
	password: 'Cat09021988'
};

var conn = mysql.createConnection(dbConfig);

conn.connect( function(err){
	if(err) throw new Error(err);
	console.log('DB connected');
});

module.exports = conn;