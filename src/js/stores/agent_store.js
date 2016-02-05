import { EventEmitter } from 'events';
import ApplicationDispatcher from '../dispatcher';
import WebServiceTypes from '../constants/web_service_types';
import WebServiceStore from './web_service_store';

let _agents;

class AgentStore extends EventEmitter {

	constructor(options){
		super(options);
		this.registerActionInterests();
	}

	registerActionInterests(){
		this.dispatchToken = ApplicationDispatcher.register( action => {
			switch(action.type){
				case WebServiceTypes.ON_REQUEST_SUCCESS:
					console.log('Agent store receive action: ', WebServiceTypes.ON_REQUEST_SUCCESS);
					this.updateState(action.payload);
					this.emit('change');
					break;
				default:
			}
		})
	}

	updateState(items){
		_agents = items;
	}

	remoteItems(...itemIds){
		itemIds.forEach( id => delete _agents[id] );
		this.emitChange();
	}

	onItemChanged(changedItem){
		for(let item in _items){
			if(item.id === changedItem[id]){
				Object.assign(item, changedItem);
				this.emitChange();
				return;
			}
		}
	}

	getAllAgents(){
		return _agents;
	}

	getOneAgent(id){
		return _agents[id];
	}
}

export default new AgentStore();
