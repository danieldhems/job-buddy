import ApplicationDispatcher from  '../dispatcher';
import WebServiceTypes from '../constants/web_service_types';
import WebServiceActions from './web_service_actions';

export default class AgentActions {
	constructor(options){
		super(options)
	}
	
	fetchOneAgent(id){
		this.fetchOne(id)
			.then( agent => {
				ApplicationDispatcher.dispatch({
					type: AgentTypes.RECEIVE_AGENT,
					payload: agent
				})
			})
	}
}
