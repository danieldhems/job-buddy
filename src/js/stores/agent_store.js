import { EventEmitter } from 'events';
import ApplicationDispatcher from '../dispatcher';
import WebServiceTypes from '../constants/web_service_types';
import WebServiceStore from './web_service_store';
import ListStore from './list_store';
import CrudActions from '../actions/crud_actions';
import EndPointConstants from '../constants/end_point_constants';

let _items;

class AgentStore extends ListStore {

	constructor(){
		super();
		this.ListStore = new ListStore();
		CrudActions.fetch(EndPointConstants.AGENT_END_POINT);
	}

	registerActionInterests(){
		this.dispatchToken = ApplicationDispatcher.register( action => {
			switch(action.type){
				case WebServiceTypes.ON_GET_REQUEST_SUCCESS:
					ApplicationDispatcher.waitFor([this.ListStore.dispatchToken]);
					console.log('List store receive action: ', WebServiceTypes.ON_GET_REQUEST_SUCCESS);
					this.updateState(action.payload);
					this.emit('change');
					break;
				case WebServiceTypes.ON_POST_REQUEST_SUCCESS:
					ApplicationDispatcher.waitFor([this.ListStore.dispatchToken]);
					console.log('List store receive action: ', WebServiceTypes.ON_POST_REQUEST_SUCCESS);
					this.handlePostRequestSuccess(action.payload);
					this.emit('change');
					break;
				case WebServiceTypes.ON_DELETE_REQUEST_SUCCESS:
					console.log('List store receive action: ', WebServiceTypes.ON_DELETE_REQUEST_SUCCESS);
					this.handleDeleteRequestSuccess(action.payload);
					this.emit('change');
					break;
				default:
			}
		})
	}

	_filterByKeys(obj, keys){
		let filteredObject = {};
		Object.keys(obj).forEach( key => {
			if( keys.find(i => i===key) ) filteredObject[key] = obj[key];
		});
		console.log('filtered object: ', filteredObject);
		return filteredObject;
	}

	getAgentDataForDropdown(targetKeys = ['id','name']){
		// get all items, reduced to name and IDs only
		return this.getItems().map( item => {
			return this._filterByKeys(item, targetKeys)
		});
	}
}

export default new AgentStore();
