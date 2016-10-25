var mysql = require('mysql');

var dbConfig = {
	host: 'eu-cdbr-west-01.cleardb.com',
	database: 'heroku_d405d1e37757a91',
	user: 'b6a494a947d9d5',
	password: '0725c683'
};

var dbConnURL = 'mysql://b6a494a947d9d5:0725c683@eu-cdbr-west-01.cleardb.com/heroku_d405d1e37757a91?reconnect=true';

var conn = mysql.createConnection(dbConnURL);

function reconnect(conn){
	conn = mysql.createConnection(dbConnURL);
	conn.on('error', reconnect(conn));
}

conn.connect( function(err){
	if(err) throw new Error(err);
	console.log('DB connected');
});

conn.on('error', function(err) {
  console.log(err.code);
  reconnect(conn);
});

module.exports = conn;