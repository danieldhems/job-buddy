define([
	"jquery",
	"backbone",
	"roles/controller/role"
], function($, Backbone, RoleController){

	var router = Backbone.Router.extend({
		
		routes: {
			'' : 'roles',
			'roles' : 'roles',
			'interviews' : 'interviews',
			'agents' : 'agents'
		},

		roles: function(){
			console.log("roles");
			RoleController.init();
		},
		
		interviews: function(){
			console.log("interviews");
		},
		
		agents: function(){
			console.log("agents");
		}
	});

	return router;
});
