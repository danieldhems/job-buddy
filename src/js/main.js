import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import AgentList from './components/agent/agent_list';
import RoleList from './components/role/role_list';
import Application from './application';

render((
	<Router history={hashHistory}>
		<Route path="/" component={Application}>
			<IndexRoute component={AgentList} />
			<Route path="agents" component={AgentList} />
			<Route path="roles" component={RoleList} />
		</Route>
	</Router>
), document.body);
