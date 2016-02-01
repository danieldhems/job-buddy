import React, { Component } from 'react';

export default class List extends Component {
	constructor(options){
		super(options)
	}
	render(){
		return (
			<ul>
				{this.props.collection.map(item=>{
					return <Item {...item} />
				})}
			</ul>
		)
	}
}