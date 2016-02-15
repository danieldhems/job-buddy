import { EventEmitter } from 'events';
import ApplicationDispatcher from '../dispatcher';
import WebServiceTypes from '../constants/web_service_types';
import WebServiceStore from './web_service_store';
import ItemTypes from '../constants/item_types';

class ItemStore extends EventEmitter {

	constructor(options){
		super(options);
		this.registerActionInterests();
	}

	updateEditedItem(data){
		this.state = {
			isEditing: false,
			currentItem: Object.assign(this.state.currentItem, data)
		};
		console.log('update result: ', this.state.currentItem);
	}

	startEditing(itemData){
		this.state = {
			isEditing: true,
			currentItem: itemData
		};
	}

	finishEditing(){
		this.state = {
			isEditing: false,
			currentItem: null
		};
	}

	getEditingState(){
		return this.state;
	}

	getItem(){
		return this.state.currentItem;
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
					this.finishEditing();
					this.emit('change');
					break;
				case WebServiceTypes.ON_PUT_REQUEST_SUCCESS:
					console.log('Item store receive action: ', WebServiceTypes.ON_PUT_REQUEST_SUCCESS, 'with payload: ', action.payload.body);
					this.updateEditedItem(action.payload);
					this.emit('change');
					break;
				default:
			}
		})
	}
}

export default new ItemStore();
