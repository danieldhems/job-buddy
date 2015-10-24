Window.JobBuddy.Views.RoleList = Backbone.View.extend({
	collection: RoleCollection,
	model: RoleModel,
	tagName: 'ul',
	render: function(){
		var self = this;
		this.records = new this.collection();
		this.records.fetch().then( function(records){
			records.forEach(function(record){
				var itemView = new RoleItem({model:record});
				self.$el.append( itemView.render() );
			});
		});
		return self.$el;
	}
});