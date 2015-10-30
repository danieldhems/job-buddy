define([
	"jquery",
	"backbone",
	"collections/list",
	"views/list",
	"views/button_new"
], function($, Backbone, ListCollection, ListView, ButtonNew){
	
	this.viewContainer = $(".view");
	this.agentFormNew;

	// Global var for listCollection instance
	// (It gets instantiated insid ethe 'init' method)
	this.listCollection;

	// init
	this.init = function(opts){
		
		this.listCollection = new ListCollection();

		// We're using the same collection for all lists so
		// dynamically set the URL when the route changes
		this.listCollection.url = '/api/'+opts.route;
		var listView = new ListView({
			collection:listCollection,
			// pass additional 'route' option which informs 'item' subview
			// so it can load the correct HTML template
			route:opts.route
		});

		viewContainer.empty();

		// Append view element directly instead of calling render because the view will wait for content from the server before rendering
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
			this.save(data);
		}, this);
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
