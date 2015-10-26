define([
	"jquery",
	"backbone",
	"collections/role",
	"views/role/role_list_container"
], function($, Backbone, RoleCollection, RoleListContainer){
	
	return {
		
		// init
		init: function(){
			var viewContainer = $(".view");
			viewContainer.html(new RoleListContainer().render());
		}

		// Add role
		
		// Edit role

		// Remove role

		// Add spec

		// Get spec

	};

});
