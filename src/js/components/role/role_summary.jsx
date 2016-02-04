import React, { Component } from 'react';

export default class RoleSummary extends Component {
	constructor(options){
		super(options)
	}
	render(){
		console.log(this.props)
		return (
			<div>
				<span className="agent-name">{this.props.title}</span><br/>
				<span className="agent-company">{this.props.company}</span><br/>
				<span className="agent-phone_number">{this.props.salary}</span><br/>
				<span className="agent-mobile_number">{this.props.location}</span><br/>
				<span className="agent-email">{this.props.agent_id}</span><br/><br/>
			</div>
		)
	}
}