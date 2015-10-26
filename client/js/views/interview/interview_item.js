define([
	"backbone"
], function(Backbone){

	var view = Backbone.View.extend({
		tagName: 'li',
		template: _.template("\
			<span class=\"interview-date_time\"><%= data.date_time %></span><br>\
			<span class=\"interview-contact_name\"><%= data.contact_name %></span><br>\
			<a href=\"#\" class=\"role-title\"><%= data.title %></a> / \
			<span class=\"role-salary\"><%= data.salary || \"salary not specified\" %></span><br>\
			<span class=\"role-client\"><%= data.client %></span><br>\
			<span class=\"role-location\"><%= data.location || \"location not specified\" %></span><br>\
			<span class=\"role-agent\"><%= data.agent_name %></span><br><br>\
			<span class=\"role-status\">Stage: <%= data.stage %></span><br><br>\
		"),
		render: function(){
			this.$el.html( this.template({data:this.model}) );
			return this.$el;
		}
	});

	return view;
})
