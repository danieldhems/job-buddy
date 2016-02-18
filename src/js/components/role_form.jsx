import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Form from './common/forms/form';
import Input from './common/forms/input';
import Select from './common/forms/select';
import Button from './common/button';
import Textarea from './common/forms/textarea';
import Heading from './common/heading';
import SubmitButton from './common/forms/submit-button';
import Text from './common/text';
import form2js from '../utils/form2js';
import CrudActions from '../actions/crud_actions';
import AgentStore from '../stores/agent_store';

import EndPointConstants from '../constants/end_point_constants';
import ActionInterestTypes from '../constants/interest_types';

export default class RoleForm extends Component {
	constructor(){
		super();
	}

	handleSubmit(){
		let userData = form2js(ReactDOM.findDOMNode(this));
		switch(this.props.userAction){
			case 'create':
				CrudActions.create(EndPointConstants.ROLE_END_POINT, userData, ActionInterestTypes.ROLE);
				break;
			case 'update':
				userData = Object.assign(userData, {id: this.props.id});
				CrudActions.update(EndPointConstants.ROLE_END_POINT, userData);
				break;
			default:
		}
	}

	getHeading(){
		return this.props.userAction === 'create' ? 'New role'
			: this.props.userAction === 'update' ? 'Edit role'
			: "";
	}

	unshiftArray(agents, currentAgentId){
		if(agents.length>0){
			let agentElement = agents.find(el=>el.id===currentAgentId);
			console.log('current agent: ',agentElement);
			return agents.length > 1 ? agents.unshift(agents[currentAgent]) : agents;
		}
	}

	render(){
		const heading = this.getHeading();
			console.log('form props: ',this.props)
		let agents = AgentStore.getAgentDataForDropdown();
		// agents = this.unshiftArray(agents, this.props.agent_id);
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
				<Select name="agent_id" items={agents} valueIdentifier="id" textIdentifier="name" className="form formNew form_newRole__agentField" />
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