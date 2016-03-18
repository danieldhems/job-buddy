import { EventEmitter } from 'events';
import ApplicationDispatcher from '../dispatcher';
import WebServiceTypes from '../constants/web_service_types';
import AbstractStore from './abstract_store';
import ActionSourceConstants from '../constants/source_types';

class AgentStore extends AbstractStore {

	constructor(){
		super();
		this._items = [];	
		this.bindAll(this);
		this.registerActionInterests();
	}

	registerActionInterests(){
		this.dispatchToken = ApplicationDispatcher.register( action => {
			if(action.source === ActionSourceConstants.AGENT){
				switch(action.type){
					case WebServiceTypes.ON_GET_REQUEST_SUCCESS:
						console.log('Agent store receive action: ', WebServiceTypes.ON_GET_REQUEST_SUCCESS, 'with interest: ', action.source);
						this.setItems(action.payload);
						this.emit('change');
						break;
					case WebServiceTypes.ON_PUT_REQUEST_SUCCESS:
						console.log('Agent store receive action: ', WebServiceTypes.ON_PUT_REQUEST_SUCCESS, 'with interest: ', action.source);
						this.updateItem(action.payload);
						this.emit('change');
						break;
					case WebServiceTypes.ON_POST_REQUEST_SUCCESS:
						console.log('Agent store receive action: ', WebServiceTypes.ON_POST_REQUEST_SUCCESS);
						this.addItem(action.payload);
						this.emit('change');
						break;
					case WebServiceTypes.ON_DELETE_REQUEST_SUCCESS:
						console.log('Agent store receive action: ', WebServiceTypes.ON_DELETE_REQUEST_SUCCESS, 'with interest: ', action.source);
						this.removeItem(action.payload);
						this.emit('change');
						break;
					default:;
				}
			}
		})
	}
}

export default new AgentStore();
