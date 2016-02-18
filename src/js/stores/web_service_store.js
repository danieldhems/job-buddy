import { EventEmitter } from 'events';
import $ from 'jquery';
import Promise from 'promise';
import ApplicationDispatcher from '../dispatcher';
import WebServiceUtil from '../utils/web_service_util';
import WebServiceTypes from '../constants/web_service_types';
import AgentTypes from '../constants/agent_types';
import EndPointConstants from '../constants/end_point_constants';

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
			// console.log("Web Store: Request failure:", error);
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
								type: WebServiceTypes.ON_GET_REQUEST_SUCCESS,
								payload: {responseData, actionInterest: action.payload.actionInterest}
							});
						},
						(error) => {
							console.log(error);		
						}
					);
					break;
				case WebServiceTypes.POST_REQUEST:
					console.log('Web Service store receive action: ', WebServiceTypes.POST_REQUEST, action.payload.body, 'with interest: ', action.payload.actionInterest)
					this._makeWebServiceRequest(
						action.payload.endPoint,
						'POST',
						action.payload.body,
						function(responseData){
							ApplicationDispatcher.dispatch({
								type: WebServiceTypes.ON_POST_REQUEST_SUCCESS,
								payload: Object.assign( action.payload.body, responseData )
							});
						},
						(error) => {
							console.log(error);		
						}
					);
					break;
				case WebServiceTypes.DELETE_REQUEST:
					console.log('Web Service store receive action: ', WebServiceTypes.DELETE_REQUEST, action.payload.body)
					this._makeWebServiceRequest(
						action.payload.endPoint,
						'DELETE',
						action.payload,
						function(responseData){
							ApplicationDispatcher.dispatch({
								type: WebServiceTypes.ON_DELETE_REQUEST_SUCCESS,
								payload: {id: action.payload.id}
							});
						},
						(error) => {
							console.log(error);		
						}
					);
					break;
				case WebServiceTypes.PUT_REQUEST:
					console.log('Web Service store receive action: ', WebServiceTypes.PUT_REQUEST, action.payload.body)
					this._makeWebServiceRequest(
						action.payload.endPoint,
						'PUT',
						action.payload.body,
						function(responseData){
							ApplicationDispatcher.dispatch({
								type: WebServiceTypes.ON_PUT_REQUEST_SUCCESS,
								payload: action.payload.body
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
