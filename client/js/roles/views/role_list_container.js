Window.JobBuddy.Views.RoleListContainer = Backbone.View.extend({
	tagName: 'div',
	className: 'listContainer',
	render: function(){
		var roles = new RoleList();
		this.$el.append(roles.render());
		return this.$el;
	}
});