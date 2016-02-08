import React, { Component } from 'react';
import AgentList from './components/agent/agent_list';
import AgentForm from './components/agent_form';

export default class Application extends Component {
	constructor(){
		super()
	}

	render(){
		return (
			<div className="JobBuddyApplication">
				<AgentList />
				<AgentForm userAction="create" />
			</div>
		)
	}
}