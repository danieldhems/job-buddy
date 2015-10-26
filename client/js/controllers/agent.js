define([
	"jquery",
	"backbone",
	"collections/agent",
	"views/agent/agent_list_container"
], function($, Backbone, AgentCollection, AgentListContainer){
	
	return {
		
		// init
		init: function(){
			var viewContainer = $(".view");
			viewContainer.append(new AgentListContainer().render());
		}

		// Add agent
		
		// Edit agent

		// Remove agent

		// Add spec

		// Get spec

	};

});
