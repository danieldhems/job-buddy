var collection = Backbone.Collection.extend({
	url: '/api/roles',
	initialize: function(){
		_.extend(this, Backbone.Events);
	}
});

module.exports = Window.JobBuddy.Collections.Roles = collection;