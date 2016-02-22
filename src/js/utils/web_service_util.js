import $ from 'jquery';

export default class WebServiceUtil {
	static request(url, type, data, success, failure) {
		console.log("Making web service request:", url, type, data);
		$.ajax({
			url: url,
			type: type,
			dataType: "json",
			cache: false,
			crossDomain: true,
			data: data
		}).done(function(data) {
			console.log("Web Store: Request successful:", data);
			success(data);
		}).fail(function(error) {
			// console.log("Web Store: Request failure:", error);
			failure(error);
		});
	}
}