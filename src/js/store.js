import { createStore } from 'redux';
import Application from './reducers/application';

const initialState = {};

export default createStore(Application, initialState);
