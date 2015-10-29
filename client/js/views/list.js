define([
	"backbone",
	"collections/list",
	"views/item"
], function(Backbone, Collection, ItemView){

	var view = Backbone.View.extend({
		tagName: 'ul',
		initialize: function(opts){

			_.extend(this, Backbone.Events);

			this.collectionName = opts.route;
			this.listenTo( this.collection, 'add', this.append );
			
			this.collection.fetch();
		},
		append: function(model){

			var itemView = new ItemView({model:model,collectionName:this.collectionName});
			this.$el.append( itemView.render() );
		
			this.render();
		},
		render: function(){
			return this;
		}
	});

	return view;

})
