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
	create(url, formData){
		console.log('Agents dispatching action: ', WebServiceTypes.POST_REQUEST)
		ApplicationDispatcher.dispatch({
			type: WebServiceTypes.POST_REQUEST,
			payload: Object.assign(defaultPayload, {body: userData})
		});
	},
	delete(url, id){
		console.log('Agents dispatching action: ', WebServiceTypes.DELETE_REQUEST)
		ApplicationDispatcher.dispatch({
			type: WebServiceTypes.DELETE_REQUEST,
			payload: Object.assign(defaultPayload, {id: parseInt(agentId,10)})
		});
	},
	update(url, formData){
		console.log('Agents dispatching action: ', WebServiceTypes.PUT_REQUEST)
		ApplicationDispatcher.dispatch({
			type: WebServiceTypes.PUT_REQUEST,
			payload: Object.assign(defaultPayload, {body: userData})
		});
	},
}