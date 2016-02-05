import ApplicationDispatcher from '../dispatcher';
import WebServiceTypes from '../constants/web_service_types';
import FormTypes from '../constants/form_types';

export default {
	submitForm(userData){
		console.log('Dispatching form action: submitForm, with payload: ', userData)
		ApplicationDispatcher.dispatch({
			type: FormTypes.SUBMIT_FORM,
			payload: userData
		})
	}
}