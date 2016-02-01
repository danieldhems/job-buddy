import ApplicationDispatcher from  '../dispatcher';
import WebServiceUtil from '../utils/web-service-util';
import WebServiceTypes from '../constants/web_service_types';
import EndPointConstants from '../constants/end_point_constants';
import Promise from 'promise';

const WebSeviceRootUri = 'api/';

export default class WebServiceActions {

	constructor(options){
		super(options)
		this.uri = WebServiceRootUri + options.endPoint
	}

	fetchOne(uri, id){
  	WebServiceUtil.createWebRequest(this.uri, 'GET', {id: id}, this._onWebServiceRequestSuccess, this._onWebServiceRequestFailure);
	}

	fetchAll(uri, ){
  	WebServiceUtil.createWebRequest(this.uri, 'GET', null, this._onWebServiceRequestSuccess, this._onWebServiceRequestFailure);
	}

  create(uri, data){
  	WebServiceUtil.createWebRequest(this.uri, 'POST', data, this._onWebServiceRequestSuccess, this._onWebServiceRequestFailure);
  }

  update(uri, id, data){
  	WebServiceUtil.createWebRequest(this.uri, 'PUT', data, this._onWebServiceRequestSuccess, this._onWebServiceRequestFailure);
  }

  destroy(uri, id){
  	WebServiceUtil.createWebRequest(this.uri, 'DELETE', {id: id}, this._onWebServiceRequestSuccess, this._onWebServiceRequestFailure);
  }
}

WebServiceActions.dispatchToken = ApplicationDispatcher.register( action => {
	switch (action){
		case WebServiceTypes.ON_ONE_AGENT_REQUEST:
			WebServiceActions.fetchOne( EndPointConstants.AGENT_END_POINT, {id: action.id}, (reponseData) => {
				ApplicationDispatcher.dispatch({
					type: WebServiceTypes.ON_ONE_AGENT_REQUEST_SUCCESS,
					payload: responseData
				})
			});
			break;
		case WebServiceTypes.ON_ALL_AGENT_REQUEST:
			WebServiceActions.fetchAll( EndPointConstants.AGENT_END_POINT, null, (reponseData) => {
				ApplicationDispatcher.dispatch({
					type: WebServiceTypes.ON_ALL_AGENT_REQUEST_SUCCESS,
					payload: responseData
				})
			});
			break;
		default:
	}
})