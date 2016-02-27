import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class AbstractComponent extends Component {
	constructor(){
		super();
		this.state = {};
		this.bindListeners();
		this.addListeners();
	}

	componentWillUnmount() {
	 	this.removeListeners();     
	}

	componentDidMount(){
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