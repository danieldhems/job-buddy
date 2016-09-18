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

import RoleStore from '../../stores/role_store';

import EndPointConstants from '../../constants/end_point_constants';
import ActionSourceTypes from '../../constants/source_types';
import InterviewTypes from '../../constants/interview_types';

import AbstractComponent from '../abstract_component';

export default class InterviewForm extends AbstractComponent {
	constructor(){
		super();
		this.state = {};
		this.addListeners();
	}

	componentDidMount() {
			CrudActions.fetch(EndPointConstants.ROLE_END_POINT, ActionSourceTypes.ROLE);
	}

	bindListeners(){
		this.onRoleStoreChange = this.onRoleStoreChange.bind(this);
	}

	addListeners(){
		RoleStore.addListener('change', this.onRoleStoreChange);
	}

	onRoleStoreChange(){
		console.log('getting roles')
		this.setState({roles: RoleStore.getAll()});
	}

	handleSubmit(){
		let userData = form2js(ReactDOM.findDOMNode(this));
		switch(this.props.userAction){
			case 'create':
				userData.type = parseInt(userData.type,10);
				CrudActions.create(EndPointConstants.INTERVIEW_END_POINT, userData, ActionSourceTypes.INTERVIEW);
				break;
			case 'update':
				userData = Object.assign(userData, {id: this.props.id});
				CrudActions.update(EndPointConstants.INTERVIEW_END_POINT, userData, ActionSourceTypes.INTERVIEW);
				break;
			default:
		}
	}

	getHeading(){
		return this.props.userAction === 'create' ? 'New Interview'
			: this.props.userAction === 'update' ? 'Edit Interview'
			: "";
	}

	convertToArray(obj){
		let arr = [];
		for(let key in obj){
			arr.push(
				{id: obj[key]['id'], label: obj[key]['label']}
			)
		}
		return arr;
	}

	render(){
		const heading = this.getHeading();
		const interviewTypes = this.convertToArray(InterviewTypes);
		return (
			<Form className="formNewInterview" ref="form">
				<Heading level={2}>{heading}</Heading>
				<Text>When?</Text>
				<Input type="datetime-local" name="datetime" defaultValue={this.props.datetime || ""} className="form formNew form_newInterview__datetimeField" />
				<br/>
				<Text>For which role?</Text>
				<Select name="role_id" items={this.state.roles || []} defaultValue={this.props.role_id} valueIdentifier="id" textIdentifier="title" />
				<br/>
				<Text>Leave blank if you haven't created a role yet</Text>
				<br/>
				<Text>Who are you meeting?</Text>
				<Input type="text" name="contact" defaultValue={this.props.contact || ""} className="form formNew form_newInterview__contactField" />
				<br/>
				<Text>Phone or face-to-face?</Text>
				<Select name="type" items={interviewTypes} defaultValue={this.props.type} valueIdentifier="id" textIdentifier="label" />
				<br/><br/>
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
	heading: "New interview"
}