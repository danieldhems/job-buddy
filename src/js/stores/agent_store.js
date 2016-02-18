import { EventEmitter } from 'events';
import ApplicationDispatcher from '../dispatcher';
import WebServiceTypes from '../constants/web_service_types';
import WebServiceStore from './web_service_store';
import ListStore from './list_store';
import CrudActions from '../actions/crud_actions';
import EndPointConstants from '../constants/end_point_constants';
import ActionInterestConstants from '../constants/interest_types';

class AgentStore extends ListStore {

	constructor(){
		super();
		this._items = [];
		this.ListStore = new ListStore();
		CrudActions.fetch(EndPointConstants.AGENT_END_POINT, ActionInterestConstants.AGENT);
	}

	registerActionInterests(){
		this.dispatchToken = ApplicationDispatcher.register( action => {
			switch(action.type){
				case WebServiceTypes.ON_GET_REQUEST_SUCCESS:
					console.log('Agent store receive action: ', WebServiceTypes.ON_GET_REQUEST_SUCCESS, 'with interest: ', action.payload.actionInterest);
					if(action.payload.actionInterest === ActionInterestConstants.AGENT){
						this.updateState(action.payload.responseData);
						this.emit('change');
					}
					break;
				case WebServiceTypes.ON_POST_REQUEST_SUCCESS:
					console.log('Agent store receive action: ', WebServiceTypes.ON_POST_REQUEST_SUCCESS);
					this.handlePostRequestSuccess(action.payload);
					this.emit('change');
					break;
				case WebServiceTypes.ON_DELETE_REQUEST_SUCCESS:
					console.log('Agent store receive action: ', WebServiceTypes.ON_DELETE_REQUEST_SUCCESS);
					this.handleDeleteRequestSuccess(action.payload);
					this.emit('change');
					break;
				default:
			}
		})
	}

	updateState(payload){
		console.log('Agent store updating state with: ', payload);
		this._items = payload;
	}

	_filterByKeys(obj, keys){
		let filteredObject = {};
		Object.keys(obj).forEach( key => {
			if( keys.find(i => i===key) ) filteredObject[key] = obj[key];
		});
		return filteredObject;
	}

	getAgentDataForDropdown(targetKeys = ['id','name']){
		console.log('Getting agent data for dropdown')
		// get all items, reduced to name and IDs only
		return this.getItems().map( item => {
			return this._filterByKeys(item, targetKeys)
		});
	}

	getById(id){
		return this._items.find(item=>item.id===id);
	}
}

export default new AgentStore();
