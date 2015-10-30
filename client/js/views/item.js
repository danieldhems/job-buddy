define([
	"backbone",
	"templateLoader"
], function(Backbone, Template){

	var view = Backbone.View.extend({
		tagName: 'li',
		initialize: function(opts){
			this.collectionName = opts.collectionName;
		},
		getTplName: function(str){
			return str.slice(0,-1);
		},
		render: function(){
			var tplName = this.getTplName(this.collectionName);
			this.$el.html( Template('item_' + tplName, this.model.attributes) );
			return this.$el;
		}
	});

	return view;
})
