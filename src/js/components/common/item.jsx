import React, { Component } from 'react';

export default class Item extends Component {
	constructor(options){
		super(options)
	}
	render(){
		return (
			<li>
				<span class="agent-name"><%= name %></span><br>
				<span class="agent-company"><%= company %></span><br>
				<span class="agent-phone_number"><%= phone_number %></span><br>
				<span class="agent-mobile_number"><%= mobile_number %></span><br>
				<span class="agent-email"><%= email %></span><br><br>
			</li>
		)
	}
}