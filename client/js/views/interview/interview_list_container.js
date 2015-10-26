define([
	"backbone",
	"views/interview/interview_list"
], function(Backbone, ListView){
	var view = Backbone.View.extend({
		tagName: 'div',
		className: 'listContainer',
		render: function(){
			var interviews = new ListView();
			this.$el.append(interviews.render());
			return this.$el;
		}
	});
	return view;
});
