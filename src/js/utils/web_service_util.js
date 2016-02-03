import Promise from 'promise';

/*****************************************
 * We service utility class
 *****************************************/

// Vendor
var $ = window.$;

class WebServiceUtil {
	constructor() {}

	/**
	 * makeWebServiceRequest
	 * Makes a new web service request
	 */
	makeWebServiceRequest(url, type, data, success, failure) {
		console.log("Making web service request:", url, type, data);
		var self = this;
		$.ajax({
			url: url,
			type: type,
			dataType: "json",
			cache: false,
			crossDomain: true,
			data: data
		}).done(function(data) {
			console.log("Setting state from API:", data);
			return success(data);
		}).fail(function(error) {
			console.log("Get state error", error);
			return failure(error);
		});
  	}

  	/**
	 * getWebServiceResponse
	 * Returns a web service response
	 */
	static getWebServiceResponse(response, defaultErrorText="") {
		if (!response)
			response = {};
		if (response.success !== null && typeof response.success !== "function")
			return response;
		let defaultError = {
			"code": "defaultError",
			"message": defaultErrorText
		}
		response = {
      success: false,
      errors: [defaultError]
    };
    return response;
	}
}

export default new WebServiceUtil(); 