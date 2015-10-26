define([
	"jquery",
	"backbone",
	"controllers/role",
	"controllers/interview",
	"controllers/agent"
], function($, Backbone, RoleController, InterviewController, AgentController){

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
			InterviewController.init();
		},
		
		agents: function(){
			console.log("agents");
			AgentController.init();
		}
	});

	return router;
});
