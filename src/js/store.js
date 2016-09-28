import { createStore } from 'redux';
import Application from './reducers/application';

const initialState = {
	roles: [],
	interviews: [],
	agents: [],
	offers: []
};

export default createStore(Application, initialState);
