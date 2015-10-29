define([
	"jquery",
	"backbone",
	"collections/agent",
	"models/agent",
	"views/agent/agent_list",
	"views/agent/agent_form_new",
	"views/agent/agent_button_new",
], function($, Backbone, AgentCollection, AgentModel, AgentList, AgentFormNew, ButtonNew){
	
	var viewContainer = $(".view");
	var agentFormNew;
	var self = this;

	_.extend(AgentFormNew, Backbone.Events);
	_.extend(ButtonNew, Backbone.Events);
	
	var agentCollection;

	// init
	this.init = function(){
		
		agentCollection = new AgentCollection();
		var agentListView = new AgentList({collection:agentCollection});

		viewContainer.empty();
		// Apeend view element directly instead of callinhg render because the view will wait for content form the server before rendering
		viewContainer.append(view.$el);
		
		var btn = new ButtonNew();
		btn.on('openForm', this.openForm, this);
		viewContainer.append(btn.render());
	}

	// Open agent form
	this.openForm = function(){
		// Instantiate and add form to DOM
		agentFormNew = new AgentFormNew();
		viewContainer.append(agentFormNew.render());
		// Listen for 'save' event
		agentFormNew.on('submit', function(data){
			self.create(data);
		});
	}
	
	// Save new agent
	this.create = function(data){
		var agent = new AgentModel(data);

		// Remember to provide null as first arg else success and error callbacks won't fire!
		agent.save(null, {
			success: function(model, response){
				agentFormNew.close();
				agentCollection.add(agent);
			},
			error: function(model, xhr){
				console.log(xhr);
			}
		})
	}


	// Edit agent

	// Remove agent

	// Add spec

	// Get spec

	return this;

});
