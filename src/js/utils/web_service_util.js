/*****************************************
 * We service utility class
 *****************************************/

// Vendor
var $ = window.$;

export default class WebServiceUtil {
	constructor() {}

	/**
	 * makeWebServiceRequest
	 * Makes a new web service request
	 */
	static makeWebServiceRequest(url, type, data, success, failure) {
		DebugUtil.log("Making web service request:", url, type, data);
		var self = this;
		$.ajax({
			url: url,
			type: type,
			dataType: "json",
			cache: false,
			crossDomain: true,
			data: data
		}).done(function(data) {
			DebugUtil.log("Setting state from API:", data);
			success(data);
		}).fail(function(error) {
			DebugUtil.log("Get state error", error);
			failure(error);
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
