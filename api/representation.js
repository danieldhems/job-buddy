var db = require('../database.js');
var router = require('express').Router();

var dbTable = 'representation';

var api = {
	create: function(req, res){

		var data = Array.prototype.join.call(req.body,', ');
		
		var query = 'INSERT INTO ?? VALUES ' + data;
		db.query(query, function(err, rows){
			if(err) throw new Error(err);
			console.log(rows);
		});
	},
	read: function(req, res){
		var query = 'SELECT * FROM ??';
		db.query(query, function(err, rows){
			if(err) throw new Error(err);
			console.log(rows);
		});
	},
	update: function(req, res){
		var query = 'SELECT * FROM ??';
		db.query(query, function(err, rows){
			if(err) throw new Error(err);
			console.log(rows);
		});
	},
	destroy: function(req, res){
		var query = 'SELECT * FROM ??';
		db.query(query, function(err, rows){
			if(err) throw new Error(err);
			console.log(rows);
		});
	}
};

router.get('/', api.read);
router.post('/', api.create);
router.put('/', api.update);
router.delete('/', api.destroy);

module.exports = router;
