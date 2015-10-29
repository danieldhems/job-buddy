define([
	"backbone",
	"form2js"
], function(Backbone, form2js){

	var view = Backbone.View.extend({
		tagName: 'form',
		events: {
			"click .submit" : "submit"
		},
		submit: function(e){
			e.preventDefault();
			this.trigger('submit', form2js(this.el));
		},
		close: function(){
			this.remove();
		},
		attributes: {
			method: '',
			action: ''
		},
		defaults: {
			name: "Name",
			company: "Company",
			phone_number: "Phone number",
			mobile_number: "Mobile number",
			email: "Email"
		},
		template: "\
			<input name=\"name\" class=\"text-field agent-name\" placeholder=\"Name\" /><br>\
			<input name=\"company\" class=\"text-field agent-company\" placeholder=\"Company\" /><br>\
			<input name=\"phone_number\" class=\"text-field agent-phone_number\" placeholder=\"Phone number\" /><br>\
			<input name=\"mobile_number\" class=\"text-field agent-mobile_number\" placeholder=\"Mobile number\" />\
			<input name=\"email\" class=\"text-field agent-email\" placeholder=\"Email\" /><br>\
			<input type=\"submit\" class=\"submit\" name=\"submit\" value=\"save\" />\
		",
		initialize: function(){
			_.extend(this, Backbone.Events);
		},
		render: function(){
			this.$el.html( this.template );
			return this.$el;
		}
	});

	return view;
})
