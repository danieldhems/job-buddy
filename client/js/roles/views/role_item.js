var view = Backbone.View.extend({
	tagName: 'li',
	template: _.template("\
		<a href=\"#\" class=\"role-title\"><%= data.title %></a> / \
		<span class=\"role-salary\"><%= data.salary || \"salary not specified\" %></span><br>\
		<span class=\"role-client\"><%= data.client %></span><br>\
		<span class=\"role-location\"><%= data.location || \"location not specified\" %></span><br>\
		<span class=\"role-agent\"><%= data.agent_name %></span><br><br>\
		<span class=\"role-status\"><%= data.interview_stage > 0 %></span><br><br>\
	"),
	render: function(){
		this.$el.html( this.template({data:this.model}) );
		return this.$el;
	}
});

module.exports = Window.JobBuddy.Views.RoleItem = view;