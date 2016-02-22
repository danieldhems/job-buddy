import { EventEmitter } from 'events';
import ApplicationDispatcher from '../dispatcher';
import WebServiceTypes from '../constants/web_service_types';
import WebServiceStore from './web_service_store';

class AbstractStore extends EventEmitter {

	constructor(){
		super();
		this._items = [];
		this.registerActionInterests();
	}

	registerActionInterests(){
		this.dispatchToken = ApplicationDispatcher.register( action => {
			switch(action.type){
				case WebServiceTypes.ON_GET_REQUEST_SUCCESS:
					console.log('Abstract store receive action: ', WebServiceTypes.ON_GET_REQUEST_SUCCESS);
					this.updateState(action.payload.responseData);
					this.emit('change');
					break;
				case WebServiceTypes.ON_POST_REQUEST_SUCCESS:
					console.log('Abstract store receive action: ', WebServiceTypes.ON_POST_REQUEST_SUCCESS);
					this.handlePostRequestSuccess(action.payload);
					this.emit('change');
					break;
				case WebServiceTypes.ON_DELETE_REQUEST_SUCCESS:
					console.log('Abstract store receive action: ', WebServiceTypes.ON_DELETE_REQUEST_SUCCESS);
					this.handleDeleteRequestSuccess(action.payload);
					this.emit('change');
					break;
				default:
			}
		})
	}

	updateState(items){
		this._items = items;
	}

	handlePostRequestSuccess(itemData){
		this._items.push(itemData);
	}

	handleDeleteRequestSuccess(payload){
		this._items.map( (item, index, arr) => {
			if(item.id === payload.id) delete arr[index]
		})
	}

	getItems(){
		return this._items;
	}

}

export default AbstractStore;
