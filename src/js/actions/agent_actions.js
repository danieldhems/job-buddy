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
	}
}