define([
	"backbone"
], function(Backbone){

	var collection = Backbone.Collection.extend({
		initialize: function(){
			_.extend(this, Backbone.Events);
		}
	});

	return collection;
})

