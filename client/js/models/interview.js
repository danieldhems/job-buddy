define([
	"backbone",
	"collections/interview"
], function(Backbone, Collection){

	var model = Backbone.Model.extend({
		collection: Collection,
		defaults: {
			title:"Not specified",
			client:"Not specified",
			salary:"Not specified",
			location:"Not specified",
			agent_name:"Not specified",
			agent_company:"Not specified",
			interviewing:false,
			interview_stage:null
		},
		initialize: function(){
			_.extend(this, Backbone.Events);
		}
	});

	return model;

});
