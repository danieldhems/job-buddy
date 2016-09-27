import Application from '../reducers/application';

const Store = createStore(Application);

export default {
	fetch(endPoint, source){
		fetch(
			endPoint,
			'GET',
			(responseData) => {
				ApplicationDispatcher.dispatch({
					type: WebServiceTypes.ON_GET_REQUEST_SUCCESS,
					source: source,
					payload: responseData
				});
			},
			(error) => {
				console.log(error);		
			}
		)
	},
	create(endPoint, formData, source){
		fetch(
			endPoint,
			'POST',
			formData,
			(responseData) => {
				let updatedItem = Object.assign(formData, responseData);
				ApplicationDispatcher.dispatch({
					type: WebServiceTypes.ON_POST_REQUEST_SUCCESS,
					source: source,
					payload: updatedItem
				});
			},
			(error) => {
				console.log(error);		
			}
		)
	},
	delete(endPoint, id, source){
		fetch(
			endPoint,
			'DELETE',
			{id},
			(responseData) => {
				ApplicationDispatcher.dispatch({
					type: WebServiceTypes.ON_DELETE_REQUEST_SUCCESS,
					source: source,
					payload: {id}
				});
			},
			(error) => {
				console.log(error);		
			}
		);
	},
	update(endPoint, formData, source){
		fetch(
			endPoint,
			'PUT',
			formData,
			(responseData) => {
				ApplicationDispatcher.dispatch({
					type: WebServiceTypes.ON_PUT_REQUEST_SUCCESS,
					payload: {responseData}
				});
			},
			(error) => {
				console.log(error);		
			}
		)
	}
}