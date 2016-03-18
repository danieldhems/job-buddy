import { EventEmitter } from 'events';
import ApplicationDispatcher from '../dispatcher';
import WebServiceTypes from '../constants/web_service_types';

class AbstractStore extends EventEmitter {

	constructor(){
		super();
	}

	bindAll(context){
		this.setItems = this.setItems.bind(context);
		this.updateItem = this.updateItem.bind(context);
		this.addItem = this.addItem.bind(context);
		this.getAll = this.getAll.bind(context);
		this.getAllFiltered = this.getAllFiltered.bind(context);
		this.getById = this.getById.bind(context);
		this.removeItem = this.removeItem.bind(context);
	}

	addItem(item){
		this._items.push(item);
	}

	setItems(items){
		this._items = items;
	}

	updateItem(item){
		this._items.map(i=>{
			if(i['id']===item['id']) Object.assign(i,item);
		});
	}

	removeItem(payload){
		let id = payload.id;
		let removeIndex = this._items.findIndex(item=>item.id===id);
		this._items.splice(removeIndex,1);
	}

	getAll(){
		console.log('Getting all items', this._items)
		return this._items;
	}

	getById(id){
		return this._items.find(item=>item.id===id)
	}

	getAllFiltered(filterBy){
		console.log(this.getAll())
		return this.getAll().forEach(item=>this._filterObjectByKeys(item, filterBy))
	}

	_filterObjectByKeys(obj, targetKeys){
		let filteredObject = {};
		Object.keys(obj).forEach( key => {
			if( targetKeys.find(i => i===key) ) filteredObject[key] = obj[key];
		});
		return filteredObject;
	}
}

export default AbstractStore;
