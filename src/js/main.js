import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import AgentList from './components/agent/agent_list';
import RoleList from './components/role/role_list';
import InterviewList from './components/interview/interview_list';
import Application from './application';

import Store from './store';

console.log(Store.getState());

class Root extends Component {
	render(){
		return (
			<Provider store={Store}>
				<Router history={hashHistory}>
					<Route path="/" component={Application}>
						<Route path="agents" component={AgentList} />
						<Route path="roles" component={RoleList} />
						<Route path="interviews" component={InterviewList} />
					</Route>
				</Router>
			</Provider>
		)
	}
}

render((
	<Root />
), document.querySelector('#main'));
