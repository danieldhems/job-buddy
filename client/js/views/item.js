define([
	"backbone",
	"templateLoader"
], function(Backbone, Template){

	var view = Backbone.View.extend({
		tagName: 'li',
		initialize: function(opts){
			this.collectionName = opts.collectionName;
		},
		render: function(){
			this.$el.html( Template('item_' + this.collectionName, this.model.attributes) );
			return this.$el;
		}
	});

	return view;
})
