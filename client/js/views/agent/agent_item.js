define([
	"backbone"
], function(Backbone){

	var view = Backbone.View.extend({
		tagName: 'li',
		template: _.template("\
			<span class=\"agent-name\"><%= name %></span><br>\
			<span class=\"agent-company\"><%= company %></span><br>\
			<span class=\"agent-phone_number\"><%= phone_number %></span><br>\
			<span class=\"agent-mobile_number\"><%= mobile_number %></span><br>\
			<span class=\"agent-email\"><%= email %></span><br><br>\
		"),
		render: function(){
			this.$el.html( this.template(this.model.attributes) );
			return this.$el;
		}
	});

	return view;
})
