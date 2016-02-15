import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Form from './common/forms/form';
import Input from './common/forms/input';
import Button from './common/button';
import Textarea from './common/forms/textarea';
import Heading from './common/heading';
import SubmitButton from './common/forms/submit-button';
import Text from './common/text';
import form2js from '../utils/form2js';
import CrudActions from '../actions/crud_actions';

import EndPointConstants from '../constants/end_point_constants';

export default class AgentForm extends Component {
	constructor(){
		super();
	}

	handleSubmit(){
		let userData = form2js(ReactDOM.findDOMNode(this));
		switch(this.props.userAction){
			case 'create':
				CrudActions.create(EndPointCOnstants.AGENT_END_POINT, userData);
				break;
			case 'update':
			console.log(this.props.id)
				userData = Object.assign(userData, {id: this.props.id});
				CrudActions.update(EndPointCOnstants.AGENT_END_POINT, userData);
				break;
			default:
		}
	}

	getHeading(){
		return this.props.userAction === 'create' ? 'New agent'
			: this.props.userAction === 'update' ? 'Edit agent'
			: "";
	}

	render(){
		const heading = this.getHeading();
		return (
			<Form className="formNewAgent" ref="form">
				<Heading level={2}>{heading}</Heading>
				<Text>Name</Text>
				<Input type="text" name="name" defaultValue={this.props.name || ""} className="form formNew form_newAgent__nameField" />
				<Text>Company</Text>
				<Input type="text" name="company" defaultValue={this.props.company || ""} className="form formNew form_newAgent__companyField" />
				<Text>Email address</Text>
				<Input type="text" name="email_address" defaultValue={this.props.email_address || ""} className="form formNew form_newAgent__emailAddressField" />
				<Text>Mobile number</Text>
				<Input type="text" name="mobile_number" defaultValue={this.props.mobile_number || ""} className="form formNew form_newAgent__mobileNumberField" />
				<Text>Phone number</Text>
				<Input type="text" name="phone_number" defaultValue={this.props.phone_number || ""} className="form formNew form_newAgent__phoneNumberField" />
				<SubmitButton name="submitButton" defaultValue="Add" onClick={this.handleSubmit.bind(this)} />
				<Button onClick={this.props.onCancel}>Cancel</Button>
			</Form>
		)
	}
}

AgentForm.propTypes = {
	heading: PropTypes.string
}

AgentForm.defaultProps = {
	heading: "New Agent"
}