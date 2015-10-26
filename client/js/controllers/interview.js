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
			viewContainer.append(new InterviewListContainer().render());
		}

		// Add role
		
		// Edit role

		// Remove role

		// Add spec

		// Get spec

	};

});
