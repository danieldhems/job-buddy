define([
	"jquery",
	"backbone",
	"collections/agent",
	"models/agent",
	"views/agent/agent_list_container",
	"views/agent/agent_form_new",
	"views/agent/agent_button_new",
], function($, Backbone, AgentCollection, AgentModel, AgentListContainer, AgentFormNew, ButtonNew){
	
	var viewContainer = $(".view");
	
	_.extend(AgentListContainer, Backbone.Events);
	_.extend(AgentFormNew, Backbone.Events);
	_.extend(ButtonNew, Backbone.Events);


	AgentFormNew.on('save', this.save);
		
	// init
	this.init = function(){

		var btn = new ButtonNew();
		btn.on('openForm', this.openForm, this);
		
		viewContainer.empty();
		viewContainer.append(new AgentListContainer().render());
		viewContainer.append(btn.render());
	}

	// Save new agent
	this.save = function(data){
		var agent = new AgentModel(data);
		agent.save({
			success: function(model, response){
				AgentCollection.add(agentModel);
			}
		})
	}

	// Open agent form
	this.openForm = function(){
		console.log(1);
		var form = new AgentFormNew();
		viewContainer.append(form.render());
	}

	// Edit agent

	// Remove agent

	// Add spec

	// Get spec

	return this;

});
