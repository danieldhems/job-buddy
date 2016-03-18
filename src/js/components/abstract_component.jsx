import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class AbstractComponent extends Component {
	constructor(){
		super();
		this.state = {};
		this.bindListeners();
	}

	componentWillUnmount() {
	 	this.removeListeners();     
	}

	componentDidMount(){
		this.addListeners();
		this.buildInitialState();
		this._requestContent();
	}

	// Empty methods expected to be overridden by descendant classes
	buildInitialState(){}
	bindListeners(){}
	addListeners(){}
	removeListeners(){}
	_requestContent(){}
}