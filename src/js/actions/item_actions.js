import ApplicationDispatcher from '../dispatcher';
import WebServiceTypes from '../constants/web_service_types';
import ItemTypes from '../constants/item_types';

export default {
	startEditing(data){
		console.log('Dispatching item action:', ItemTypes.START_EDITING, ', with payload: ', data)
		ApplicationDispatcher.dispatch({
			type: ItemTypes.START_EDITING,
			payload: data
		})
	},
	cancelEditing(){
		console.log('Dispatching item action:', ItemTypes.CANCEL_EDITING)
		ApplicationDispatcher.dispatch({
			type: ItemTypes.CANCEL_EDITING,
			payload: null
		})
	},
}