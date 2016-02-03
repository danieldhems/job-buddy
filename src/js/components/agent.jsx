import React, { Component } from 'react';
import ApplicationDispatcher from '../dispatcher';
import AgentActions from '../actions/agent_actions';
import AgentStore from '../stores/agent_store';

let _state = {};

export default class Agent extends Component {
	constructor(){
		super();
	}

	bindListeners(){
		this._onAgentStoreChange = AgentStore.addListener('change', this._onAgentStoreChange.bind(this));
	}

	removeListeners(){
		AgentStore.removeListener('change', this._onAgentStoreChange);
	}

	componentDidMount(){
		this.bindListeners();
		this._requestContent();
	}
	_buildStateFromStores(){
		_state.agents = AgentStore.getAllAgents();
		console.log('Agents in state:', _state.agents)
	}

	componentWillUnmount(){
		this.removeListeners();
	}

	_onAgentStoreChange(){
		console.log('Agent component receive Agent Store change');
		console.log(this)
		this._buildStateFromStores();
	}

	_requestContent(){
		AgentActions.requestAllAgents();
	}


	removeListeners(){
		this.onAgentStoreChange = AgentStore.on('change', this);
	}

	render(){
		return (
			<div></div>
		)
	}
}
