import React, { Component } from 'react';
import AgentList from './components/agent/agent_list';

export default class Application extends Component {
	constructor(){
		super()
	}

	render(){
		return (
			<AgentList />
		)
	}
}