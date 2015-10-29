define([
	"backbone",
	"collections/agent"
], function(Backbone, Collection){

	var model = Backbone.Model.extend({
		urlRoot: '/api/agents',
		collection: Collection,
		defaults: {
			name: "Not specified",
			company:"Not specified",
			phone_number:"Not specified",
			mobile_number:"Not specified",
			email:"Not specified"
		},
		initialize: function(){
			_.extend(this, Backbone.Events);
		}
	});

	return model;

});
