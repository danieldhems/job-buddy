import React, { Component } from 'react';
import AgentList from './components/agent/agent_list';
import NewAgentForm from './components/new_agent_form';

export default class Application extends Component {
	constructor(){
		super()
	}

	render(){
		return (
			<div className="JobBuddyApplication">
				<AgentList />
				<NewAgentForm />
			</div>
		)
	}
}