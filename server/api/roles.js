var db = require('../database.js');
var router = require('express').Router();

var api = {
	create: function(req, res){
		console.log('creating');
		var data = req.body;

		var columns = Object.keys(data).join(', ');
		var values = Array.prototype.join.call(req.body,', ');
		
		db.query( 'INSERT INTO `??` ?? VALUES ??', [dbTable, columns, values], function(err, rows){
			if(err) throw new Error(err);
			console.log(rows);
		});
	},
	read: function(req, res){
		var query = 'SELECT * FROM roles';
		db.query(query, function(err, rows){
			if(err) throw new Error(err);
			res.json(rows);
		});
	},
	update: function(req, res){
		var query = 'SELECT * FROM roles';
		db.query(query, function(err, rows){
			if(err) throw new Error(err);
			console.log(rows);
		});
	},
	destroy: function(req, res){
		var query = 'SELECT * FROM roles';
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
