import { EventEmitter } from 'events';
import ApplicationDispatcher from '../dispatcher';
import WebServiceTypes from '../constants/web_service_types';
import WebServiceStore from './web_service_store';
import ListStore from './list_store';
import CrudActions from '../actions/crud_actions';
import EndPointConstants from '../constants/end_point_constants';
import ActionInterestConstants from '../constants/interest_types';

class RoleStore extends ListStore {

	constructor(){
		super();
		this._items = [];
		CrudActions.fetch(EndPointConstants.ROLE_END_POINT, ActionInterestConstants.ROLE);
	}

	registerActionInterests(){
		this.dispatchToken = ApplicationDispatcher.register( action => {
			switch(action.type){
				case WebServiceTypes.ON_GET_REQUEST_SUCCESS:
					console.log('Role store receive action: ', WebServiceTypes.ON_GET_REQUEST_SUCCESS, 'with interest: ', action.payload.actionInterest);
					if(action.payload.actionInterest === ActionInterestConstants.ROLE){
						this.updateState(action.payload.responseData);
						this.emit('change');
					}
					break;
				case WebServiceTypes.ON_POST_REQUEST_SUCCESS:
					console.log('Role store receive action: ', WebServiceTypes.ON_POST_REQUEST_SUCCESS);
					this.handlePostRequestSuccess(action.payload);
					this.emit('change');
					break;
				case WebServiceTypes.ON_DELETE_REQUEST_SUCCESS:
					console.log('Role store receive action: ', WebServiceTypes.ON_DELETE_REQUEST_SUCCESS);
					this.handleDeleteRequestSuccess(action.payload);
					this.emit('change');
					break;
				default:
			}
		})
	}

	updateState(payload){
		console.log('Role store updating state with: ', payload);
		this._items = payload;
	}
}

export default new RoleStore();
