import { EventEmitter } from 'events';
import ApplicationDispatcher from '../dispatcher';
import WebServiceTypes from '../constants/web_service_types';
import AbstractStore from './abstract_store';
import CrudActions from '../actions/crud_actions';
import EndPointConstants from '../constants/end_point_constants';
import ActionSourceConstants from '../constants/source_types';

class RoleStore extends AbstractStore {

	constructor(){
		super();
		this._items = [];
		this.bindAll(this);
		this.registerActionInterests();
	}

	registerActionInterests(){
		this.dispatchToken = ApplicationDispatcher.register( action => {
			if(action.source===ActionSourceConstants.ROLE){
				switch(action.type){
					case WebServiceTypes.ON_GET_REQUEST_SUCCESS:
						console.log('Role store receive action: ', WebServiceTypes.ON_GET_REQUEST_SUCCESS, 'with interest: ', action.source);
						this.setItems(action.payload);
						this.emit('change');
						break;
					case WebServiceTypes.ON_POST_REQUEST_SUCCESS:
						console.log('Role store receive action: ', WebServiceTypes.ON_POST_REQUEST_SUCCESS);
						this.addItem(action.payload)
						this.emit('change');
						break;
					case WebServiceTypes.ON_PUT_REQUEST_SUCCESS:
						console.log('Role store receive action: ', WebServiceTypes.ON_PUT_REQUEST_SUCCESS);
						this.updateItem(action.payload)
						this.emit('change');
						break;
					case WebServiceTypes.ON_DELETE_REQUEST_SUCCESS:
						console.log('Role store receive action: ', WebServiceTypes.ON_DELETE_REQUEST_SUCCESS);
						this.removeItem(action.payload);
						this.emit('change');
						break;
					default:
				}
			}
		})
	}
}

export default new RoleStore();
