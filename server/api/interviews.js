var db = require('../database.js');
var router = require('express').Router();

var _insertId = null;

var api = {
	create: function(req, res){
		var data = req.body;
		db.query('INSERT INTO `interviews` SET ?', [data], function(err, result){
			if(err) throw new Error(err);
			if(result.affectedRows===1){
				_insertId = result.insertId;
				api.read(req, res)
			}
		});
	},
	read: function(req, res){
		var query = "\
			SELECT\
				i.id,\
				i.role_id,\
				i.agent_id,\
				i.datetime,\
				i.contact,\
				i.stage,\
				i.type,\
				r.title,\
				r.salary,\
				r.location,\
				r.client,\
				a.name as agent_name,\
				a.phone_number as agent_phone_number,\
				a.mobile_number as agent_mobile_number,\
				a.email_address as agent_email_address,\
				a.company as agent_company\
			FROM `interviews` i\
			LEFT JOIN `roles` r\
				ON i.role_id = r.id\
			LEFT JOIN `agents` a\
				ON r.agent_id = a.id\
		";
		if(_insertId) query += "WHERE i.id = ?";
		db.query(query, [_insertId], function(err, rows){
			if(err) throw new Error(err);
			res.json(rows)
		});
	},
	update: function(req, res){
		var data = req.body;
		var id = req.params.id;
		db.query('UPDATE `interviews` SET ? WHERE `id` = ?', [data, id], function(err, result){
			if(err) throw new Error(err);
			res.json({"success":true})
		});
	},
	destroy: function(req, res){
		var id = parseInt(req.body.id,10);
		db.query('DELETE FROM `interviews` WHERE id = ?', [id], function(err, rows){
			if(err) throw new Error(err);
			res.json({"success":true})
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
