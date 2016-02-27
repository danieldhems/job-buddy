import { EventEmitter } from 'events';
import ApplicationDispatcher from '../dispatcher';
import WebServiceTypes from '../constants/web_service_types';
import AbstractStore from './abstract_store';
import CrudActions from '../actions/crud_actions';
import EndPointConstants from '../constants/end_point_constants';
import ActionInterestConstants from '../constants/interest_types';

class InterviewStore extends AbstractStore {

	constructor(){
		super();
		this.bindAll(this);
		this._items = [];
		this.registerActionInterests();
	}

	registerActionInterests(){
		this.dispatchToken = ApplicationDispatcher.register( action => {
			switch(action.type){
				case WebServiceTypes.ON_GET_REQUEST_SUCCESS:
					console.log('Interview store receive action: ', WebServiceTypes.ON_GET_REQUEST_SUCCESS, 'with interest: ', action.payload.actionInterest);
					if(action.payload.actionInterest === ActionInterestConstants.INTERVIEW){
						this.updateState(action.payload.responseData);
						this.emit('change');
					}
					break;
				case WebServiceTypes.ON_POST_REQUEST_SUCCESS:
					console.log('Interview store receive action: ', WebServiceTypes.ON_POST_REQUEST_SUCCESS);
					this.handlePostRequestSuccess(action.payload);
					this.emit('change');
					break;
				case WebServiceTypes.ON_DELETE_REQUEST_SUCCESS:
					console.log('Interview store receive action: ', WebServiceTypes.ON_DELETE_REQUEST_SUCCESS);
					this.handleDeleteRequestSuccess(action.payload);
					this.emit('change');
					break;
				default:
			}
		})
	}

	updateState(payload){
		console.log('Interview store updating state with: ', payload);
		this._items = payload;
	}
}

export default new InterviewStore();
