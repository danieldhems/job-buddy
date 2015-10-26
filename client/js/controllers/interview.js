define([
	"jquery",
	"backbone",
	"collections/interview",
	"views/interview/interview_list_container"
], function($, Backbone, InterviewCollection, InterviewListContainer){
	
	return {
		
		// init
		init: function(){
			var viewContainer = $(".view");
			viewContainer.html(new InterviewListContainer().render());
		}

		// Add role
		
		// Edit role

		// Remove role

		// Add spec

		// Get spec

	};

});
