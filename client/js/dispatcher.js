import {Dispatcher} from '../bower_components/flux/dist/Flux.min';
import {Actions} from './action_constants';
const ApplicationDispatcher = new Dispatcher();

ApplicationDispatcher.handleViewAction = function(action){
  this.dispatch({
    source: Actions.VIEW_ACTION,
    action: action
  })
}

ApplicationDispatcher.handleServerAction = function(action){
  this.dispatch({
    source: Actions.SERVER_ACTION,
    action: action
  })
}

export default ApplicationDispatcher;
