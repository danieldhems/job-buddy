import React, { Component, PropTypes } from 'react';

export default class List extends Component {
	constructor(options){
		super(options)
	}
	render(){
		return (
			<ul>
				{this.props.children}
			</ul>
		)
	}
}
