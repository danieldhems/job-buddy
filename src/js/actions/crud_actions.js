import ApplicationDispatcher from '../dispatcher';
import WebServiceTypes from '../constants/web_service_types';

export default {
	fetch(endPoint, actionInterest){
		console.log('Dispatching CRUD action: ', WebServiceTypes.GET_REQUEST, ' with action interest: ', actionInterest)
		ApplicationDispatcher.dispatch({
			type: WebServiceTypes.GET_REQUEST,
			payload: {endPoint, actionInterest}
		});
	},
	create(endPoint, formData){
		console.log('Dispatching CRUD action: ', WebServiceTypes.POST_REQUEST)
		ApplicationDispatcher.dispatch({
			type: WebServiceTypes.POST_REQUEST,
			payload: {endPoint: endPoint, body: formData}
		});
	},
	delete(endPoint, id){
		console.log('Dispatching CRUD action: ', WebServiceTypes.DELETE_REQUEST)
		ApplicationDispatcher.dispatch({
			type: WebServiceTypes.DELETE_REQUEST,
			payload: {endPoint: endPoint, id: parseInt(id,10)}
		});
	},
	update(endPoint, formData){
		console.log('Dispatching CRUD action: ', WebServiceTypes.PUT_REQUEST)
		ApplicationDispatcher.dispatch({
			type: WebServiceTypes.PUT_REQUEST,
			payload: {endPoint: endPoint, body: formData}
		});
	},
}