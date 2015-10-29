define([
	"backbone",
	"collections/agent",
	"models/agent",
	"views/agent/agent_item"
], function(Backbone, Collection, Model, ItemView){

	var view = Backbone.View.extend({
		tagName: 'ul',
		initialize: function(){

			_.extend(this, Backbone.Events);

			this.listenTo( this.collection, 'add', this.append );
			
			this.collection.fetch();
		},
		append: function(model){

			var itemView = new ItemView({model:model});
			this.$el.append( itemView.render() );
		
			this.render();
		},
		render: function(){
			return this;
		}
	});

	return view;

})
