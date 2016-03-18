import ApplicationDispatcher from '../dispatcher';
import WebServiceTypes from '../constants/web_service_types';
import WebServiceUtil from '../utils/web_service_util';

export default {
	fetch(endPoint, source){
		WebServiceUtil.request(
			endPoint,
			'GET',
			null,
			function(responseData){
				ApplicationDispatcher.dispatch({
					type: WebServiceTypes.ON_GET_REQUEST_SUCCESS,
					source: source,
					payload: responseData
				});
			},
			(error) => {
				console.log(error);		
			}
		)
	},
	create(endPoint, formData, source){
		WebServiceUtil.request(
			endPoint,
			'POST',
			formData,
			function(responseData){
				let updatedItem = Object.assign(formData, responseData);
				ApplicationDispatcher.dispatch({
					type: WebServiceTypes.ON_POST_REQUEST_SUCCESS,
					source: source,
					payload: updatedItem
				});
			},
			(error) => {
				console.log(error);		
			}
		)
	},
	delete(endPoint, id, source){
		WebServiceUtil.request(
			endPoint,
			'DELETE',
			{id},
			function(responseData){
				ApplicationDispatcher.dispatch({
					type: WebServiceTypes.ON_DELETE_REQUEST_SUCCESS,
					source: source,
					payload: {id}
				});
			},
			(error) => {
				console.log(error);		
			}
		);
	},
	update(endPoint, formData, source){
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
		)
	}
}