import Application from '../reducers/application';
import Store from '../store';
import ENV from '../environment';

export default {
	hydrate(contentType){
		const url = ENV.dev.api + contentType;
		fetch(url)
		.then( (response) => response.json() )
		.then( (response) => {
			Store.dispatch({
				type: 'hydrate',
				source: contentType,
				payload: response
			});
		}).catch( (error) => {
			console.log(error);	
		})
	},
	create(contentType, payload){
		const url = ENV.dev.api + contentType;
		const request = new Request(url, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(payload)
		});
		fetch(request).then( (responseData) => {
			let persistedItem = Object.assign(payload, responseData);
			Store.dispatch({
				type: 'create',
				source: contentType,
				payload: persistedItem
			});
		}).catch( (error) => {
			console.log(error);		
		})
	},
	remove(contentType, id){
		const url = ENV.dev.api + contentType;
		const request = new Request(url, {
			method: 'DELETE',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({id})
		});
		fetch(request).then( (responseData) => {
			Store.dispatch({
				type: 'remove',
				id: id,
				source: contentType
			});
		}).catch( (error) => {
			console.log(error);		
		})
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