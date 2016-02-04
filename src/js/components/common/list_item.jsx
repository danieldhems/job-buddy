import React, { Component } from 'react';

export default class ListItem extends Component {
	constructor(options){
		super(options)
	}
	render(){
		return (
			<li>{this.props.children}</li>
		)
	}
}