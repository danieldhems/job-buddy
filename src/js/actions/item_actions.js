import ActionTypes from '../constants/action_types';

export default {
	startEditing(data){
		console.log('Dispatching item action:', ItemTypes.START_EDITING, ', with payload: ', data)
		ApplicationDispatcher.dispatch({
			type: ActionTypes.START_EDITING,
			payload: data
		})
	},
	cancelEditing(){
		console.log('Dispatching item action:', ItemTypes.CANCEL_EDITING)
		ApplicationDispatcher.dispatch({
			type: ActionTypes.CANCEL_EDITING,
			payload: null
		})
	},
}