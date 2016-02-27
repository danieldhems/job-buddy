import { EventEmitter } from 'events';
import ApplicationDispatcher from '../dispatcher';
import WebServiceTypes from '../constants/web_service_types';

class AbstractStore extends EventEmitter {

	constructor(){
		super();
	}

	bindAll(context){
		this.updateItems = this.updateItems.bind(context);
		this.updateItem = this.updateItem.bind(context);
		this.getAll = this.getAll.bind(context);
		this.getAllFiltered = this.getAllFiltered.bind(context);
		this.getById = this.getById.bind(context);
	}

	updateItems(items){
		this._items = items;
	}

	updateItem(item){
		this._items.map(i=>{
			if(i['id']===item['id']) Object.assign(i,item);
		});
	}

	removeItem(id){
		this._items.map((x,i)=>{
			if(x['id']===item['id']) this._items.splice(i,1);
		});		
	}

	getAll(){
		console.log('Getting all items', this._items)
		return this._items;
	}

	getById(id){
		return this._items.find(item=>item[id]===id)
	}

	getAllFiltered(filterBy){
		console.log(this.getAll())
		return this.getAll().forEach(item=>this._filterObjectByKeys(item, filterBy))
		// return this._filterObjectByKeys(this.getAll(), filterBy);
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
