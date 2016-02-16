import { EventEmitter } from 'events';
import ApplicationDispatcher from '../dispatcher';
import WebServiceTypes from '../constants/web_service_types';
import WebServiceStore from './web_service_store';
import ItemTypes from '../constants/item_types';

class ItemEditStore extends EventEmitter {

	constructor(options){
		super(options);
		this.state = {};
		this.registerActionInterests();
	}

	updateItemWithChangedData(data){
		this.state.itemDataInEdit = Object.assign(this.state.itemDataInEdit, data);
		console.log('update result: ', this.state.itemDataInEdit);
	}

	enterEditMode(){
		this.state.isEditing = true;
	}

	exitEditMode(){
		this.state.isEditing = false;
	}

	assignItemDataInEdit(itemData){
		this.state.itemDataInEdit = itemData;
	}

	resetItemDataInEdit(){
		this.state.itemDataInEdit = null;
	}

	getState(){
		return this.state;
	}

	registerActionInterests(){	
		this.dispatchToken = ApplicationDispatcher.register( action => {
			switch(action.type){
				case ItemTypes.START_EDITING:
					console.log('Item store receive action: ', ItemTypes.START_EDITING, 'with payload: ', action.payload);
					this.assignItemDataInEdit(action.payload);
					this.enterEditMode();
					this.emit('change');
					break;
				case ItemTypes.CANCEL_EDITING:
					console.log('Item store receive action: ', ItemTypes.CANCEL_EDITING);
					this.exitEditMode();
					this.resetItemDataInEdit();
					this.emit('change');
					break;
				case WebServiceTypes.ON_PUT_REQUEST_SUCCESS:
					console.log('Item store receive action: ', WebServiceTypes.ON_PUT_REQUEST_SUCCESS, 'with payload: ', action.payload);
					this.updateItemWithChangedData(action.payload);
					this.exitEditMode();
					this.emit('change');
					break;
				default:
			}
		})
	}
}

export default new ItemEditStore();
