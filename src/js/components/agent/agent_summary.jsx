import React, { Component } from 'react';

export default class AgentSummary extends Component {
	constructor(options){
		super(options)
	}
	render(){
		console.log('Rendering agent summary component')
		return (
			<div>
				<span className="agent-name">{this.props.name}</span><br/>
				<span className="agent-company">{this.props.company}</span><br/>
				<span className="agent-phone_number">{this.props.phone_number}</span><br/>
				<span className="agent-mobile_number">{this.props.mobile_number}</span><br/>
				<span className="agent-email">{this.props.email}</span><br/><br/>
			</div>
		)
	}
}