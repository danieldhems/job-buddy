import ApplicationDispatcher from '../dispatcher';
import WebServiceTypes from '../constants/web_service_types';
import EndPointConstants from '../constants/end_point_constants';

const defaultPayload = {
	endPoint: EndPointConstants.AGENT_END_POINT
};

export default {
	requestAllAgents(){
		console.log('Agents dispatching action: ', WebServiceTypes.GET_REQUEST)
		ApplicationDispatcher.dispatch({
			type: WebServiceTypes.GET_REQUEST,
			payload: defaultPayload
		});
	},
	createAgent(userData){
		console.log('Agents dispatching action: ', WebServiceTypes.POST_REQUEST)
		ApplicationDispatcher.dispatch({
			type: WebServiceTypes.POST_REQUEST,
			payload: Object.assign(defaultPayload, {body: userData})
		});
	},
	deleteAgent(agentId){
		console.log('Agents dispatching action: ', WebServiceTypes.DELETE_REQUEST)
		ApplicationDispatcher.dispatch({
			type: WebServiceTypes.DELETE_REQUEST,
			payload: Object.assign(defaultPayload, {id: parseInt(agentId,10)})
		});
	},
	updateAgent(userData){
		console.log('Agents dispatching action: ', WebServiceTypes.PUT_REQUEST)
		ApplicationDispatcher.dispatch({
			type: WebServiceTypes.PUT_REQUEST,
			payload: Object.assign(defaultPayload, {body: userData})
		});
	},
}