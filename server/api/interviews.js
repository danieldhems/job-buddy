var db = require('../database.js');
var router = require('express').Router();

var api = {
	create: function(req, res){
		var data = req.body;
		var table = req.params.table
		db.query('INSERT INTO `roles` SET ?', [table, data], function(err, result){
			if(err) throw new Error(err);
			if(result.affectedRows===1) res.send(200, result.insertId);
		});
	},
	read: function(req, res){
		var table = req.params.table;
		console.log(table);
		if(req.params.id){
			var id = req.params.id;
			var query = "\
				SELECT *\
				FROM `roless'\
				WHERE `roles`.`id` = ?\
				LEFT JOIN `agents` ON `roles`.`agent_id` = `agents`.`id\
			";
			db.query(query, [table, id], function(err, rows){
				if(err) throw new Error(err);
				res.json(rows);
			});
		} else {
			var query = "\
				SELECT *\
				FROM `ROLES\
			";
			db.query(query, [table], function(err, rows){
				if(err) throw new Error(err);
				res.json(rows);
			});
		}
	},
	update: function(req, res){
		var data = req.body;
		var id = req.params.id;
		var table = req.params.table;
		db.query('UPDATE ?? SET ? WHERE `id` = ?', [table, data, id], function(err, result){
			if(err) throw new Error(err);
			console.log(result);
		});
	},
	destroy: function(req, res){
		var id = req.params.id;
		var table = req.params.table;
		db.query('DROP * FROM ?? WHERE id = ?', [table, id], function(err, rows){
			if(err) throw new Error(err);
			console.log(rows);
		});
	}
};

// Set API CRUD endpoints
router.get('/:table/', api.read);
router.get('/:table/:id', api.read);
router.post('/:table/', api.create);
router.put('/:table/:id', api.update);
router.patch('/:table/:id', api.update);
router.delete('/:table/:id', api.destroy);

module.exports = router;
