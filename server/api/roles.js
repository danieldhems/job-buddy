var db = require('../database.js');
var router = require('express').Router();

var api = {
	create: function(req, res){
		var data = req.body;
		db.query('INSERT INTO `roles` SET ?', [data], function(err, result){
			if(err) throw new Error(err);
			if(result.affectedRows===1) res.send(200, result.insertId);
		});
	},
	read: function(req, res){
		var query = "\
			SELECT\
				roles.title,\
				roles.client,\
				roles.salary,\
				roles.location,\
				roles.archived,\
				agents.name as `agent_name`,\
				agents.company as `agent_company`,\
				interviews.stage as `interview_stage`\
			FROM `roles`\
			LEFT JOIN `agents` ON roles.agent_id = agents.id\
			LEFT JOIN `interviews` ON roles.id = interviews.role_id\
			WHERE roles.archived = 0\
		";
		if(req.params.id){
			query += " AND roles.id = " + req.params.id;
		}
		db.query(query, function(err, rows){
			if(err) throw new Error(err);
			res.json(rows);
		});
	},
	update: function(req, res){
		var data = req.body;
		var id = req.params.id;
		db.query('UPDATE `roles` SET ? WHERE `id` = ?', [data, id], function(err, result){
			if(err) throw new Error(err);
			console.log(result);
		});
	},
	destroy: function(req, res){
		var id = req.params.id;
		db.query('DROP * FROM `roles` WHERE id = ?', [id], function(err, rows){
			if(err) throw new Error(err);
			console.log(rows);
		});
	}
};

// Set API CRnUD endpoints
router.get('/', api.read);
router.get('/:id', api.read);
router.post('/', api.create);
router.put('/:id', api.update);
router.patch('/:id', api.update);
router.delete('/:id', api.destroy);

module.exports = router;
