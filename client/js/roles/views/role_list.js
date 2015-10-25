define([
	"backbone",
	"roles/collection/role",
	"roles/model/role",
	"roles/views/role_item"
], function(Backbone, RoleCollection, RoleModel, RoleItem){

	var view = Backbone.View.extend({
		tagName: 'ul',
		render: function(){
			var self = this;
			this.records = new RoleCollection();
			this.records.fetch().then( function(records){
				records.forEach(function(record){
					var itemView = new RoleItem({model:record});
					self.$el.append( itemView.render() );
				});
			});
			return self.$el;
		}
	});

	return view;

})
