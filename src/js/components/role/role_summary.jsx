import React, { Component } from 'react';

import Text from '../common/text';
import Label from '../common/label';
import Heading from '../common/heading';
import Button from '../common/button';
import RoleForm from './role_form';
import InterviewForm from '../interview/interview_form_container';

const isAddingInterview = false;

const toggleIsAddingInterview = (isAddingInterview) => !isAddingInterview;

const RoleSummary = ({
	id,
	title,
	salary,
	client,
	location,
	agent_name,
	agent_phone_number,
	notes,
	isEditing,
	startEditing,
	remove
}) => {

	// console.log('Rendering role summary component with itemData: ', this.state.itemData);
	if(!isEditing){
		return (
			<div className="role">
				<Heading level={3} className="role__titleLabel">{title} / {salary}</Heading>
				<Label className="role__clientText">{client} / {location}</Label><br/>
				<Text className="role__agentNameText">{agent_name} ({agent_phone_number})</Text><br/>
				<div className="role__notes">
					{notes}
				</div>
				<div className="role__options">
					<Button onClick={toggleIsAddingInterview(isAddingInterview)}>Add interview</Button>
					<Button onClick={remove(id)}>Remove</Button>
					<Button onClick={startEditing(id)}>Edit</Button>
				</div>
				<InterviewForm roleId={id} isActive={isAddingInterview} />
			</div>
		)
	} else {
		return <RoleForm userAction="update" {...this.props} />
	}
}

export default RoleSummary;