define([
	"jquery",
	"backbone",
	"collections/role",
	"models/role",
	"views/role/role_list",
	"views/role/role_form_new",
	"views/role/role_button_new",
], function($, Backbone, RoleCollection, RoleModel, RoleList, RoleFormNew, ButtonNew){
	
	var viewContainer = $(".view");
	var roleFormNew;
	var self = this;

	_.extend(roleFormNew, Backbone.Events);
	_.extend(ButtonNew, Backbone.Events);
	
	var roleCollection;

	// init
	this.init = function(){
		
		roleCollection = new RoleCollection();
		var roleListView = new RoleList({collection:roleCollection});

		// EMpty the view's HTML content
		viewContainer.empty();

		// Apeend view element directly instead of callinhg render because the view will wait for content form the server before rendering
		viewContainer.append(roleListView.$el);
		
		var btn = new ButtonNew();
		btn.on('openForm', this.openForm, this);
		viewContainer.append(btn.render());
	}

	// Open role form
	this.openForm = function(){
		// Instantiate and add form to DOM
		roleFormNew = new roleFormNew();
		viewContainer.append(roleFormNew.render());
		// Listen for 'save' event
		roleFormNew.on('submit', function(data){
			self.save(data);
		});
	}
	
	// Save new role
	this.save = function(data){
		var role = new roleModel(data);

		// Remember to provide null as first arg else success and error callbacks won't fire!
		role.save(null, {
			success: function(model, response){
				// Remove the form from the DOM
				roleFormNew.close();
				// Add the saved role to the collection
				// This will cause the roleListView to re-render
				roleCollection.add(role);
			},
			error: function(model, xhr){
				console.log(xhr);
			}
		})
	}


	// Edit role

	// Remove role

	// Add spec

	// Get spec

	return this;

});
