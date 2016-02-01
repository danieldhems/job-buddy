import React, { Component } from 'react';
import AgentStore from '../stores/agent_store';

export default class Agent extends Component {
	constructor(options){
		super(options);
		this.state = {};
	}

	componentDidMount(){
		this.bindListeners();
	}

	onAgentStoreChange(){
		this.buildStateFromStores();
	}

	buildStateFromStores(){
		this.setState = {
			AgentStore.getAllAgents()
		};
	}

	bindListeners(){
		this.onAgentStoreChange = AgentStore.on('change', this);
	}

	render(){
		return (

		)
	}
}