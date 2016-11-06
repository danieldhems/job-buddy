import React, { Component } from 'react';

import Text from '../common/text';
import Label from '../common/label';
import Heading from '../common/heading';
import Button from '../common/button';
import RoleForm from './role_form';

const RoleSummary = ({
	title,
	salary,
	client,
	location,
	agent_name,
	agent_phone_number,
	notes,
	isEditing
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
					<Button >Add interview</Button>
					<Button onClick={this.remove.bind(this)}>Remove</Button>
					<Button onClick={this.startEditing.bind(this)}>Edit</Button>
				</div>
			</div>
		)
	} else {
		return <RoleForm userAction="update" onCancel={this.cancelEditMode.bind(this)} {...this.state.itemData} />
	}
}

export default RoleSummary;