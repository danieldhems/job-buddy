import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Application from './application';
import AgentList from './components/agent/agent_list';
import RoleList from './components/role/role_list';
import InterviewList from './components/interview/interview_list';

export default class Routes extends Component {
	render(){
		return (
			<Router history={hashHistory}>
				<Route path="/" component={Application}>
					<Route path="agents" component={AgentList} />
					<Route path="roles" component={RoleList} />
					<Route path="interviews" component={InterviewList} />
				</Route>
			</Router>
		)
	}
}