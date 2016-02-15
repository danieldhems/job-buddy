import { EventEmitter } from 'events';
import ApplicationDispatcher from '../dispatcher';
import WebServiceTypes from '../constants/web_service_types';
import WebServiceStore from './web_service_store';
import ItemTypes from '../constants/item_types';

let _item;

class ItemStore extends EventEmitter {

	constructor(options){
		super(options);
		this.registerActionInterests();
	}

	registerActionInterests(){
		this.dispatchToken = ApplicationDispatcher.register( action => {
			switch(action.type){
				case ItemTypes.START_EDITING:
					console.log('Item store receive action: ', ItemTypes.START_EDITING);
					this.startEditing(action.payload);
					this.emit('change');
					break;
				case ItemTypes.CANCEL_EDITING:
					console.log('Item store receive action: ', ItemTypes.CANCEL_EDITING);
					this.cancelEditing();
					this.emit('change');
					break;
				default:
			}
		})
	}

	updateState(data){
		_item = Object.assign(_item, data);
	}

	startEditing(itemData){
		this.state = {
			isEditing: true,
			currentItem: itemData
		};
	}

	cancelEditing(){
		this.state = {
			isEditing: false,
			currentItem: null
		};
	}

	getEditingState(){
		return {
			isEditing: this.state.isEditing,
			currentItem: this.state.currentItem
		};
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
