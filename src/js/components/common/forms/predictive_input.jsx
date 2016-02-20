import React, { Component, PropTypes } from 'react';
import ClassNameUtil from '../../../utils/class-name';
import Input from './input';

export default class PredictiveInput extends Input {
	constructor(props){
		super(props)
		this.knownInputs = props.knownInputs;
		this.buildInitialState();
	}

	buildInitialState(){
		this.setState({
			suggestedInput: "",
			inputValue: ""
		})
	}

	predict(input){

		// Logic to be cleaned later
		
		let pattern = new RegExp(input), bestMatch="", shortestLength=0;
		this.knownInputs.map( knownInput => {
			if(pattern.test(knownInput['name'])){
				if(bestMatch !== ""){
					if(knownInput['name'].length < shortestLength){
						bestMatch = knownInput['name'];
					} else {
						bestMatch = bestMatch;
					}
				} else {
					bestMatch = knownInput['name'];
					shortestLength = bestMatch.length;
				}
			}
		});
		this.setState({
			suggestedInput: bestMatch
		});
	}

	onKeyUp(e){
		if(e.keyCode === 39){
			this.setState({
				inputValue: this.state.suggestedInput
			})
		}
		
		if(e.target.value !== ""){
			this.predict(e.target.value)
		}
	}

	overlayInput(){
    if(this.state && this.state.suggestedInput !== ""){
    	return (
    		<span>{this.state.suggestedInput}</span>
    	)
    } else {
    	return null;
    }		
	}

	render() {
	  const classNamesContent = ClassNameUtil.getComponentClassNames(this);
	  return (
	  	<div>
		    <input
		      className={classNamesContent}
		      id={this.props.id || this.props.name}
		      name={this.props.name}
		      type={this.props.type}
		      maxLength={this.props.maxlength}
		      title={this.props.title} onChange={this.handleInputChange}
		      onKeyUp={this.onKeyUp.bind(this)}
		    	value={this.state ? this.state.inputValue : ""}
		    />
		    {this.overlayInput()}
	    </div>
	  );
	  return null;
	}
}
