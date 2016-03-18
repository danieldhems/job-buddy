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
import EndPointConstants from '../../constants/end_point_constants';
import ActionSourceTypes from '../../constants/source_types';
import AbstractComponent from '../abstract_component';

export default class RoleForm extends AbstractComponent {
	constructor(){
		super();
		this.state = {};
		this.addListeners();
		this.bindListeners();
		if(AgentStore.getAll().length === 0) CrudActions.fetch(EndPointConstants.AGENT_END_POINT, ActionSourceTypes.AGENT);
	}

	bindListeners(){
		this.onAgentStoreChange = this.onAgentStoreChange.bind(this);
	}

	addListeners(){
		AgentStore.addListener('change', this.onAgentStoreChange);
	}

	onAgentStoreChange(data){
		this.setState({agents: AgentStore.getAll()});
	}

	handleSubmit(){
		let userData = form2js(ReactDOM.findDOMNode(this));
		switch(this.props.userAction){
			case 'create':
				CrudActions.create(EndPointConstants.ROLE_END_POINT, userData, ActionSourceTypes.ROLE);
				break;
			case 'update':
				userData = Object.assign(userData, {id: this.props.id});
				CrudActions.update(EndPointConstants.ROLE_END_POINT, userData, ActionSourceTypes.ROLE);
				break;
			default:
		}
	}

	getHeading(){
		return this.props.userAction === 'create' ? 'New role'
			: this.props.userAction === 'update' ? 'Edit role'
			: "";
	}  

	render(){
		const heading = this.getHeading();
		return (
			<Form className="formNewRole" ref="form">
				<Heading level={2}>{heading}</Heading>
				<Text>Title</Text>
				<Input type="text" name="title" defaultValue={this.props.title || ""} className="form formNew form_newRole__titleField" />
				<Text>Client</Text>
				<Input type="text" name="client" defaultValue={this.props.client || ""} className="form formNew form_newRole__clientField" />
				<Text>Salary</Text>
				<Input type="text" name="salary" defaultValue={this.props.salary || ""} className="form formNew form_newRole__salaryField" />
				<Text>Location</Text>
				<Input type="text" name="location" defaultValue={this.props.location || ""} className="form formNew form_newRole__locationField" />
				<Text>Agent</Text>
				<Select items={this.state.agents} name="agent_id" valueIdentifier="id" textIdentifier="name" />
				<SubmitButton name="submitButton" defaultValue="Add" onClick={this.handleSubmit.bind(this)} />
				<Button onClick={this.props.onCancel}>Cancel</Button>
			</Form>
		)
	}
}

RoleForm.propTypes = {
	heading: PropTypes.string
}

RoleForm.defaultProps = {
	heading: "New role"
}