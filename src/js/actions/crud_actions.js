import ApplicationDispatcher from '../dispatcher';
import WebServiceTypes from '../constants/web_service_types';
import WebServiceUtil from '../utils/web_service_util';

export default {
	fetch(endPoint, actionInterest){
		WebServiceUtil.request(
			endPoint,
			'GET',
			null,
			function(responseData){
				ApplicationDispatcher.dispatch({
					type: WebServiceTypes.ON_GET_REQUEST_SUCCESS,
					payload: {responseData, actionInterest}
				});
			},
			(error) => {
				console.log(error);		
			}
		)
	},
	create(endPoint, formData){

		WebServiceUtil.request(
			endPoint,
			'POST',
			formData,
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

		ApplicationDispatcher.dispatch({
			type: WebServiceTypes.POST_REQUEST,
			payload: {endPoint: endPoint, body: formData}
		});
	},
	delete(endPoint, id, actionInterest){
		WebServiceUtil.request(
			endPoint,
			'DELETE',
			{id},
			function(responseData){
				ApplicationDispatcher.dispatch({
					type: WebServiceTypes.ON_DELETE_REQUEST_SUCCESS,
					payload: {id, actionInterest}
				});
			},
			(error) => {
				console.log(error);		
			}
		);
	},
	update(endPoint, formData){
		WebServiceUtil.request(
			endPoint,
			'PUT',
			formData,
			function(responseData){
				ApplicationDispatcher.dispatch({
					type: WebServiceTypes.ON_PUT_REQUEST_SUCCESS,
					payload: {responseData}
				});
			},
			(error) => {
				console.log(error);		
			}
		);
	}
}