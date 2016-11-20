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

const RoleForm = ({
	id,
	title,
	salary,
	client,
	location,
	agent_name,
	agent_phone_number,
	notes,
	isEditing,
	onSubmit,
	onCancelEditing
}) => {
	<Form className="formNewRole" ref="form">
		<Heading level={2}>{heading}</Heading>
		<Text>Title</Text>
		<Input type="text" name="title" defaultValue={title || ""} className="form formNew form_newRole__titleField" />
		<Text>Client</Text>
		<Input type="text" name="client" defaultValue={client || ""} className="form formNew form_newRole__clientField" />
		<Text>Salary</Text>
		<Input type="text" name="salary" defaultValue={salary || ""} className="form formNew form_newRole__salaryField" />
		<Text>Location</Text>
		<Input type="text" name="location" defaultValue={location || ""} className="form formNew form_newRole__locationField" />
		<Text>Agent</Text>
		<Select items={agents} name="agent_id" valueIdentifier="id" textIdentifier="name" />
		<SubmitButton name="submitButton" defaultValue="Add" onClick={onSubmit} />
		<Button onClick={onCancelEditing}>Cancel</Button>
	</Form>
}

RoleForm.propTypes = {
	heading: PropTypes.string
}

RoleForm.defaultProps = {
	heading: "New role",
	onSubmit: () => {},
	onCancelEditing: () => {}
}