define([
	"backbone"
], function(Backbone){

	var collection = Backbone.Collection.extend({
		url: '/api/interviews',
		initialize: function(){
			_.extend(this, Backbone.Events);
		}
	});

	return collection;
})

