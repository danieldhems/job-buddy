import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from './common/forms/form';
import Input from './common/forms/input';
import Textarea from './common/forms/textarea';
import Heading from './common/heading';
import SubmitButton from './common/forms/submit-button';
import Text from './common/text';
import form2js from '../utils/form2js';
import AgentActions from '../actions/agent_actions';

export default class NewAgentForm extends Component {
	constructor(){
		super();
	}

	handleSubmit(){
		let userData = form2js(ReactDOM.findDOMNode(this));
		AgentActions.createAgent(userData);
	}

	render(){
		return (
			<Form className="formNewAgent" ref="form">
				<Heading level={2}>New agent</Heading>
				<Text>Name</Text>
				<Input type="text" name="name" className="form formNew form_newAgent__nameField" />
				<Text>Company</Text>
				<Input type="text" name="company" className="form formNew form_newAgent__companyField" />
				<Text>Email address</Text>
				<Input type="text" name="email_address" className="form formNew form_newAgent__emailAddressField" />
				<Text>Phone number</Text>
				<Input type="text" name="phone_number" className="form formNew form_newAgent__phoneNumberField" />
				<SubmitButton name="submitButton" value="Add" onClick={this.handleSubmit.bind(this)} />
			</Form>
		)
	}
}