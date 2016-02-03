import ApplicationDispatcher from '../dispatcher';
import AgentTypes from '../constants/agent_types';
import WebServiceTypes from '../constants/web_service_types';

const endPoint = 'api/agents';
const defaultPayload = {
	endPoint: endPoint
};

export default {
	requestAllAgents(){
		console.log('Dispatching action: ', WebServiceTypes.GET_REQUEST)
		ApplicationDispatcher.dispatch({
			type: WebServiceTypes.GET_REQUEST,
			payload: defaultPayload
		});
	}
}