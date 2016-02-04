import ApplicationDispatcher from '../dispatcher';
import WebServiceTypes from '../constants/web_service_types';
import EndPointConstants from '../constants/end_point_constants';

const defaultPayload = {
	endPoint: EndPointConstants.ROLE_END_POINT
};

export default {
	requestAllRoles(){
		console.log('Roles dispatching action: ', WebServiceTypes.GET_REQUEST)
		ApplicationDispatcher.dispatch({
			type: WebServiceTypes.GET_REQUEST,
			payload: defaultPayload
		});
	}
}