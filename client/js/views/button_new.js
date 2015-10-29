define([
	"backbone"
], function(Backbone){

	var view = Backbone.View.extend({
		tagName: 'a',
		initialize: function(){
			_.extend(this, Backbone.Events);
		},
		attributes: {
			href: '#',
			title: 'Add new'
		},
		events: {
			"click" : "openForm"
		},
		openForm: function(e){
			e.preventDefault();
			this.trigger("openForm");
		},
		render: function(){
			this.$el.text('New');
			return this.$el;
		}
	});

	return view;
})
