import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Application from './application';

render((
	<Router history={hashHistory}>
		<Route path="/" component={Application}></Route>
	</Router>
), document.querySelector('#main'));
