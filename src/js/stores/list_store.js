import { EventEmitter } from 'events';
import ApplicationDispatcher from '../dispatcher';
import WebServiceTypes from '../constants/web_service_types';
import WebServiceStore from './web_service_store';

let _items;

class ListStore extends EventEmitter {

	constructor(options){
		super(options);
		this.registerActionInterests();
	}

	registerActionInterests(){
		this.dispatchToken = ApplicationDispatcher.register( action => {
			switch(action.type){
				case WebServiceTypes.ON_GET_REQUEST_SUCCESS:
					console.log('List store receive action: ', WebServiceTypes.ON_GET_REQUEST_SUCCESS);
					this.updateState(action.payload);
					this.emit('change');
					break;
				case WebServiceTypes.ON_POST_REQUEST_SUCCESS:
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

	updateState(items){
		_items = items;
	}

	handlePostRequestSuccess(itemData){
		_items.push(itemData);
	}

	handleDeleteRequestSuccess(payload){
		_items.map( (item, index, arr) => {
			if(item.id === payload.id) delete arr[index]
		})
	}

	getItems(){
		return _items;
	}

}

export default new ListStore();
