define([
	"jquery",
	"backbone",
	"controllers/list"
], function($, Backbone, ListController){

	var router = Backbone.Router.extend({
		
		routes: {
			':route' : 'list'
		},

		list: function(route){
			ListController.init({route:route});
		}
	});

	return router;
});
