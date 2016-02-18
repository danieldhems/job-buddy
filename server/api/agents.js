var db = require('../database.js');
var router = require('express').Router();

var api = {
	create: function(req, res){
		var data = req.body;
		console.log(data);
		db.query('INSERT INTO `agents` SET ?', [data], function(err, result){
			console.log(err, result)
			if(err) res.send(new Error(err));
			if(result.affectedRows==1) res.json({id:result.insertId});
		});
	},
	read: function(req, res){
		var query = "\
			SELECT *\
			FROM `agents`\
		";
		if(req.params.id){
			var id = req.params.id;
			query += " WHERE agents.id = ?";
		}
		db.query(query, [id], function(err, rows){
			if(err) throw new Error(err);
			res.json(rows);
		});
	},
	update: function(req, res){
		var data = req.body;
		db.query('UPDATE `agents` SET ? WHERE `id` = ?', [data, data.id], function(err, result){
			if(err) throw new Error(err);
			console.log(result);
			res.json({"success": true, "updatedItem": data});
		});
	},
	destroy: function(req, res){
		var id = parseInt(req.body.id,10);
		db.query('DELETE FROM `agents` WHERE `id` = ?', [id], function(err, rows){
			if(err) throw new Error(err);
			res.json({"success":true});
		});
	}
};


// Set API CRUD endpoints
router.get('/', api.read);
router.get('/', api.read);
router.post('/', api.create);
router.put('/', api.update);
router.patch('/', api.update);
router.delete('/', api.destroy);

module.exports = router;
