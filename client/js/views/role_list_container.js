define([
	"backbone",
	"views/role_list"
], function(Backbone, RoleList){
	var view = Backbone.View.extend({
		tagName: 'div',
		className: 'listContainer',
		render: function(){
			var roles = new RoleList();
			this.$el.append(roles.render());
			return this.$el;
		}
	});
	return view;
});
