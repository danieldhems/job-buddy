import EventEmitter from 'events';
import ApplicationDispatcher from '../dispatcher';
import AgentTypes from '../constants/agent_constants';
import WebServiceTypes from '../constants/web_service_types';

let _agents = [];

export default class AgentStore extends EventEmitter.prototype {

	constructor(options){
		super(options);
		this._registerActionInterests();
	}

	_registerActionInterests(){
		this.dispatchToken = ApplicationDispatcher.register( action => {
			switch(action.type){
				case WebServiceTypes.ON_ONE_AGENT_REQUEST_SUCCESS:
					this.addItems(action.payload);
					this.emitChange();
					break;
				case WebServiceTypes.ON_ALL_AGENT_REQUEST_SUCCESS:
					this.addItems(action.payload);
					this.emitChange();
					break;
				default:
			}
		})
	}

	addItems(...items){
		items.forEach( item => _agents.push(item) );
	}

	remoteItems(...itemIds){
		itemIds.forEach( id => delete _agents[id] );
		this.emitChange();
	}

	this.onItemChanged(changedItem){
		for(let item in _items){
			if(item.id === changedItem[id]){
				Object.assign(item, changedItem);
				this.emitChange();
				return;
			}
		}
	}

	this.getAllAgents = (){
		return _agents;
	}

	this.getOneAgent(id){
		return _agents[id];
	}
}

AgentStore.dispatchToken = ApplicationDispatcher.register(action => {
	switch(action.type){
		case AgentTypes.ITEM_ADDED:
			AgentStore.onItemAdded(action.payload);
			break;
		case AgentTypes.ITEM_REMOVED:
			AgentStore.onItemRemoved(action.payload.id);
			break;
		case AgentTypes.ITEM_CHANGED:
			AgentStore.onItemChanged(action.payload);
			break;
	}
})