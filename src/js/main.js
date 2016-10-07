import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import AgentList from './components/agent/agent_list';
import RoleList from './components/role/role_list';
import InterviewList from './components/interview/interview_list';
import Application from './application';

import Store from './store';

render((
	<Provider store={Store}>
		<Router history={hashHistory}>
			<Route path="/" component={Application}>
				<IndexRoute component={RoleList} />
				<Route path="agents" component={AgentList} />
				<Route path="roles" component={RoleList} />
				<Route path="interviews" component={InterviewList} />
			</Route>
		</Router>
	</Provider>
), document.querySelector('#main'));
