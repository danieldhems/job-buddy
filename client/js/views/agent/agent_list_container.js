define([
	"backbone",
	"views/agent/agent_list"
], function(Backbone, ListView, ButtonView){
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
