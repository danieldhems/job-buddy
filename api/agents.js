var db = require('../database.js');
var router = require('express').Router();

var api = {
	create: function(req, res){

		var data = req.body;
		
		db.query('INSERT INTO `agents` SET ?', [data] , function(err, result){
			if(err) throw new Error(err);
			if(result.affectedRows>0) res.sendStatus(200);
		});
	},
	read: function(req, res){
		var query = 'SELECT * FROM `agents`';
		db.query(query, function(err, rows){
			if(err) throw new Error(err);
			res.json(rows);
		});
	},
	update: function(req, res){
		var data = req.body;
		var id = data.id;
		db.query('UPDATE `agents` SET ? WHERE `id` = ?', [data,id], function(err, result){
			if(err) throw new Error(err);
			if(result.affectedRows>0) res.sendStatus(200);
		});
	},
	destroy: function(req, res){
		var query = 'SELECT * FROM `agents`';
		db.query(query, function(err, rows){
			if(err) throw new Error(err);
			console.log(rows);
		});
	}
};

router.get('/', api.read);
router.post('/', api.create);
router.put('/', api.update);
router.patch('/', api.update);
router.delete('/', api.destroy);

module.exports = router;
