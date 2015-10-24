var viewContainer = jQuery('.view');

var router = Backbone.Router.extend({
	
	routes: {
		'/' : 'roles',
		'/interviews' : 'interviews',
		'/agents' : 'agents'
	},

	roles: function(){
		console.log('here');
		var RolesView = new JobBuddy.Views.RoleListContainer();
		viewContainer.append(RolesView.render());
	},
	
	interviews: function(){

	},
	
	agents: function(){

	}
});

module.exports = router;