define([
	"jquery",
	"backbone",
	"collections/list",
	"views/list",
	"views/button_new"
], function($, Backbone, ListCollection, ListView, ButtonNew){
	
	var viewContainer = $(".view");
	var agentFormNew;
	var self = this;

	// _.extend(AgentFormNew, Backbone.Events);
	// _.extend(ButtonNew, 	Backbone.Events);
	
	var listCollection;

	// init
	this.init = function(opts){
		
		listCollection = new ListCollection();
		listCollection.url = '/api/'+opts.route;
		var listView = new ListView({collection:listCollection,route:opts.route});

		viewContainer.empty();

		// Apeend view element directly instead of callinhg render because the view will wait for content form the server before rendering
		viewContainer.append(listView.$el);
		
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
			self.save(data);
		});
	}
	
	// Save new agent
	this.save = function(data){
		var agent = new AgentModel(data);
		console.log(agent);

		// Remember to provide null as first arg else success and error callbacks won't fire!
		agent.save(null, {
			success: function(model, response){
				agentFormNew.close();
				agentCollection.add(agent);
				console.log(agent);
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
