define([
	"backbone"
], function(Backbone){

	var view = Backbone.View.extend({
		tagName: 'li',
		template: _.template("\
			<span class=\"agent-name\"><%= data.name || \"salary not specified\" %></span><br>\
			<span class=\"agent-company\"><%= data.company %></span><br>\
			<span class=\"agent-phone_number\"><%= data.phone_number || \"location not specified\" %></span><br>\
			<span class=\"agent-mobile_number\"><%= data.mobile_number %></span><br><br>\
			<span class=\"agent-email\"><%= data.email %></span><br><br>\
		"),
		render: function(){
			this.$el.html( this.template({data:this.model}) );
			return this.$el;
		}
	});

	return view;
})
