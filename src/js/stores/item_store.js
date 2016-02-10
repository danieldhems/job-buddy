import { EventEmitter } from 'events';
import ApplicationDispatcher from '../dispatcher';
import WebServiceTypes from '../constants/web_service_types';
import WebServiceStore from './web_service_store';

let _items;

class ItemStore extends EventEmitter {

	constructor(options){
		super(options);
		this.registerActionInterests();
	}

	registerActionInterests(){
		this.dispatchToken = ApplicationDispatcher.register( action => {
			switch(action.type){
				case WebServiceTypes.ON_GET_REQUEST_SUCCESS:
					console.log('Item store receive action: ', WebServiceTypes.ON_GET_REQUEST_SUCCESS);
					this.updateState(action.payload);
					this.emit('change');
					break;
				case WebServiceTypes.ON_DELETE_REQUEST_SUCCESS:
					console.log('Item store receive action: ', WebServiceTypes.ON_DELETE_REQUEST_SUCCESS);
					this.handleDeleteRequestSuccess(action.payload);
					this.emit('change');
					break;
				case WebServiceTypes.ON_PUT_REQUEST_SUCCESS:
					console.log('Item store receive action: ', WebServiceTypes.ON_PUT_REQUEST_SUCCESS);
					this.handlePutRequestSuccess(action.payload);
					this.emit('change');
					break;
				default:
			}
		})
	}

	updateState(data){
		_item = Object.assign(_item, data);
	}

	// This belongs in Item store (list store shouldn't care about operations on individual items)
	handlePutRequestSuccess(payload){
		console.log(payload)
		_items.map( (item, index, arr) => {
			if(item.id === payload.id){
				console.log('updating agent with props: ', payload);
				_items[index] = Object.assign(item, payload);
			} 
		})
	}

	getItem(){
		return _item;
	}
}

export default new ItemStore();
