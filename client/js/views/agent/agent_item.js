define([
	"backbone",
	"templateLoader"
], function(Backbone){

	var view = Backbone.View.extend({
		tagName: 'li',
		render: function(){
			this.$el.html( this.template(this.model.attributes) );
			return this.$el;
		}
	});

	return view;
})
