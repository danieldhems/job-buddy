import { EventEmitter } from 'events';
import Promise from 'promise';
import ApplicationDispatcher from '../dispatcher';
import WebServiceUtil from '../utils/web_service_util';
import WebServiceTypes from '../constants/web_service_types';
import AgentTypes from '../constants/agent_types';
import EndPointConstants from '../constants/end_point_constants';
const $ = window.$;

let _agents = [];

class WebServiceStore extends EventEmitter {

	constructor(options){
		super(options);
		this._registerActionInterests();
	}

	_makeWebServiceRequest(url, type, data, success, failure) {
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
			console.log("Web Store: Request failure:", error);
			failure(error);
		});
	}

	_registerActionInterests(){
		this.dispatchToken = ApplicationDispatcher.register( action => {
			switch(action.type){
				case WebServiceTypes.GET_REQUEST:
					this._makeWebServiceRequest(
						action.payload.endPoint,
						'GET',
						action.payload.body,
						function(responseData){
							ApplicationDispatcher.dispatch({
								type: WebServiceTypes.ON_REQUEST_SUCCESS,
								payload: responseData
							});
						},
						(error) => {
							console.log(error);		
						}
					);
					break;
				case WebServiceTypes.POST_REQUEST:
				console.log('Web Service store receive action: ', WebServiceTypes.POST_REQUEST, action.payload.body)
					this._makeWebServiceRequest(
						action.payload.endPoint,
						'POST',
						action.payload.body,
						function(responseData){
							ApplicationDispatcher.dispatch({
								type: WebServiceTypes.ON_REQUEST_SUCCESS,
								payload: responseData
							});
						},
						(error) => {
							console.log(error);		
						}
					);
					break;
				default:
			}
		})
	}
}

export default new WebServiceStore();
