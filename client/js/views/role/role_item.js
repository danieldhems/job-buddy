define([
	"backbone"
], function(Backbone){

	var view = Backbone.View.extend({
		tagName: 'li',
		render: function(){
			this.$el.html( this.template({data:this.model}) );
			return this.$el;
		}
	});

	return view;
})
