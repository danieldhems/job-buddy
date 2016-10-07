import Application from '../reducers/application';
import Store from '../store';
import ENV from '../environment';

export default {
	hydrate(contentType){
		const url = ENV.dev.api + contentType;
		fetch(url).then( (response) => {
			Store.dispatch({
				type: 'hydrate',
				source: contentType,
				payload: responseData
			});
		}).catch( (error) => {
			console.log(error);	
		})
	},
	create(contentType, payload){
		const url = ENV.dev.api + contentType;
		const request = new Request(url, {
			method: 'POST',
			body: payload
		});
		fetch(request).then( (responseData) => {
			let persistedItem = Object.assign(formData, responseData);
			Store.dispatch({
				type: 'create',
				source: contentType,
				payload: persistedItem
			});
		}).catch( (error) => {
			console.log(error);		
		})
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