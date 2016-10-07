import { createStore } from 'redux';
import Application from './reducers/application';

const initialState = {
	roles: [],
	interviews: [],
	agents: [],
	offers: []
};

const store = createStore(Application, initialState);

store.subscribe( () => {
	console.log(store.getState());
});

export default store;
