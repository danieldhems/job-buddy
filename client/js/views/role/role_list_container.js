define([
	"backbone",
	"views/role/role_list"
], function(Backbone, ListView){
	var view = Backbone.View.extend({
		tagName: 'div',
		className: 'listContainer',
		render: function(){
			var roles = new ListView();
			this.$el.append(roles.render());
			return this.$el;
		}
	});
	return view;
});
