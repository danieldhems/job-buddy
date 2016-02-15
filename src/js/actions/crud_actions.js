import ApplicationDispatcher from '../dispatcher';
import WebServiceTypes from '../constants/web_service_types';

export default {
	fetch(endPoint){
		console.log('Agents dispatching action: ', WebServiceTypes.GET_REQUEST)
		ApplicationDispatcher.dispatch({
			type: WebServiceTypes.GET_REQUEST,
			payload: {endPoint}
		});
	},
	create(endPoint, formData){
		console.log('Agents dispatching action: ', WebServiceTypes.POST_REQUEST)
		ApplicationDispatcher.dispatch({
			type: WebServiceTypes.POST_REQUEST,
			payload: {endPoint: endPoint, body: formData}
		});
	},
	delete(endPoint, id){
		console.log('Agents dispatching action: ', WebServiceTypes.DELETE_REQUEST)
		ApplicationDispatcher.dispatch({
			type: WebServiceTypes.DELETE_REQUEST,
			payload: {endPoint: endPoint, id: parseInt(id,10)}
		});
	},
	update(endPoint, formData){
		console.log('Agents dispatching action: ', WebServiceTypes.PUT_REQUEST)
		ApplicationDispatcher.dispatch({
			type: WebServiceTypes.PUT_REQUEST,
			payload: {endPoint: endPoint, body: formData}
		});
	},
}