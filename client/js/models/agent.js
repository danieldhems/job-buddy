define([
	"backbone",
	"collections/agent"
], function(Backbone, Collection){

	var model = Backbone.Model.extend({
		collection: Collection,
		defaults: {
			
		},
		initialize: function(){
			_.extend(this, Backbone.Events);
		}
	});

	return model;

});
