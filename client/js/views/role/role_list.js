define([
	"backbone",
	"collections/role",
	"models/role",
	"views/role/role_item"
], function(Backbone, Collection, Model, ItemView){

	var view = Backbone.View.extend({
		tagName: 'ul',
		render: function(){
			var self = this;
			this.records = new Collection();
			this.records.fetch().then( function(records){
				records.forEach(function(record){
					var itemView = new ItemView({model:record});
					self.$el.append( itemView.render() );
				});
			});
			return self.$el;
		}
	});

	return view;

})
