import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Form from '../common/forms/form';
import Input from '../common/forms/input';
import ChooseOrCreateNew from '../common/forms/choose_or_create_new';
import Select from '../common/forms/select';
import Button from '../common/button';
import Textarea from '../common/forms/textarea';
import Heading from '../common/heading';
import SubmitButton from '../common/forms/submit-button';
import Text from '../common/text';
import form2js from '../../utils/form2js';
import CrudActions from '../../actions/crud_actions';

import AgentStore from '../../stores/agent_store';
import RoleStore from '../../stores/role_store';

import EndPointConstants from '../../constants/end_point_constants';
import ActionInterestTypes from '../../constants/interest_types';

import AbstractComponent from '../abstract_component';

export default class InterviewForm extends AbstractComponent {
	constructor(){
		super();
	}

	handleSubmit(){
		let userData = form2js(ReactDOM.findDOMNode(this));
		switch(this.props.userAction){
			case 'create':
				CrudActions.create(EndPointConstants.INTERVIEW_END_POINT, userData, ActionInterestTypes.INTERVIEW);
				break;
			case 'update':
				userData = Object.assign(userData, {id: this.props.id});
				CrudActions.update(EndPointConstants.INTERVIEW_END_POINT, userData);
				break;
			default:
		}
	}

	getHeading(){
		return this.props.userAction === 'create' ? 'New Interview'
			: this.props.userAction === 'update' ? 'Edit Interview'
			: "";
	}

	render(){
		const heading = this.getHeading();
		let roles = RoleStore.getAll(['id','']);
		return (
			<Form className="formNewInterview" ref="form">
				<Heading level={2}>{heading}</Heading>
				<Text>When?</Text>
				<Input type="date" name="datetime" defaultValue={this.props.datetime || ""} className="form formNew form_newInterview__datetimeField" />
				<Text>For which role?</Text>
				<ChooseOrCreateNew nameForSelect="id" nameForInput="title" items={roles} defaultValue={this.props.role_id} valueIdentifier="id" textIdentifier="name" />
				<Text>Who are you meeting?</Text>
				<Input type="text" name="contact" defaultValue={this.props.contact || ""} className="form formNew form_newInterview__contactField" />
				<SubmitButton name="submitButton" defaultValue="Add" onClick={this.handleSubmit.bind(this)} />
				<Button onClick={this.props.onCancel}>Cancel</Button>
			</Form>
		)
	}
}

InterviewForm.propTypes = {
	heading: PropTypes.string
}

InterviewForm.defaultProps = {
	heading: "New INTERVIEW"
}