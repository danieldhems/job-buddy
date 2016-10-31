import React, { Component } from 'react';
import { Router, RouteHandler, Link } from 'react-router';

export default class Application extends Component {
	constructor(){
		super();
	}

	render(){
		return (
			<div className="JobBuddyApplication">
				<div className="container">
					<div className="row">
						<div className="col-sm-3 col-md-3">
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
						</div>
						<div className="col-sm-9 col-md-9">
							{this.props.children}
						</div>
					</div>
				</div>
			</div>
		)
	}
}
