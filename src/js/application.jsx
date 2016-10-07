import React, { Component } from 'react';
import { Router, RouteHandler, Link } from 'react-router';

export default class Application extends Component {
	constructor(){
		super();
	}

	render(){
		return (
			<div className="JobBuddyApplication">
				<nav className="navigation">
				  <ul>
				    <li>
				      <Link to="/roles">Roles</Link>
				    </li>
				    <li>
				      <Link to="/interviews">Interviews</Link>
				    </li>
				    <li>
				      <Link to="/agents">Agents</Link>
				    </li>
				  </ul>
				</nav>
				{this.props.children}
			</div>
		)
	}
}
