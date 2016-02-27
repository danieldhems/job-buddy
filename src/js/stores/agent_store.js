import { EventEmitter } from 'events';
import ApplicationDispatcher from '../dispatcher';
import WebServiceTypes from '../constants/web_service_types';
import AbstractStore from './abstract_store';
import CrudActions from '../actions/crud_actions';
import EndPointConstants from '../constants/end_point_constants';
import ActionInterestConstants from '../constants/interest_types';

class AgentStore extends AbstractStore {

	constructor(){
		super();
		this._items = [];
		this.bindAll(this);
		this.registerActionInterests();
	}

	registerActionInterests(){
		this.dispatchToken = ApplicationDispatcher.register( action => {
			switch(action.type){
				case WebServiceTypes.ON_GET_REQUEST_SUCCESS:
					console.log('Agent store receive action: ', WebServiceTypes.ON_GET_REQUEST_SUCCESS, 'with interest: ', action.payload.actionInterest);
					if(action.payload.actionInterest === ActionInterestConstants.AGENT){
						this.updateItems(action.payload.responseData);
						this.emit('change');
					}
					break;
				case WebServiceTypes.ON_PUT_REQUEST_SUCCESS:
					console.log('Agent store receive action: ', WebServiceTypes.ON_PUT_REQUEST_SUCCESS, 'with interest: ', action.payload.actionInterest);
					if(action.payload.actionInterest === ActionInterestConstants.AGENT){
						this.updateItem(action.payload.responseData);
						this.emit('change');
					}
					break;
				case WebServiceTypes.ON_POST_REQUEST_SUCCESS:
					console.log('Agent store receive action: ', WebServiceTypes.ON_POST_REQUEST_SUCCESS);
					this.emit('change');
					break;
				case WebServiceTypes.ON_DELETE_REQUEST_SUCCESS:
					console.log('Agent store receive action: ', WebServiceTypes.ON_DELETE_REQUEST_SUCCESS);
					this.removeItem(action.payload.id);
					this.emit('change');
					break;
				default:
			}
		})
	}
}

export default new AgentStore();
