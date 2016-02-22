import React from 'react';
import Router, { DefaultRoute, Route, hashHistory, Link } from 'react-router';
import AgentList from './components/agent/agent_list';
import RoleList from './components/role/role_list';
import Application from './application';

const routes = (
	<Route name="JobBuddyApplication" path="/" handler={Application}>
		<Route name="agents" handler={AgentList} />
		<Route name="roles" handler={RoleList} />
		<DefaultRoute handler={AgentList} />
	</Route>
);

Router.run(routes, function(Handler) {  
    React.render(<Handler />, document.body)
});