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

const getHeading = (actionType) => {
	return actionType === 'update' ? 'Update interview' : "Add interview";
};

const InterviewForm = ({
	roles,
	roleId,
	roleType,
	dateTime,
	heading,
	interviewer,
	onSubmit,
	onCancel,
	isActive
}) => {
	return isActive &&
	<Form className="formNewInterview" ref="form">
		<Heading level={2}>{heading}</Heading>
		<Text>When?</Text>
		<Input type="datetime-local" name="datetime" defaultValue={datetime || ""} className="form formNew form_newInterview__datetimeField" />
		<br/>
		<Text>For which role?</Text>
		<Select name="role_id" items={roles} defaultValue={roleId} valueIdentifier="id" textIdentifier="title" />
		<br/>
		<Text>Leave blank if you havent created a role yet</Text>
		<br/>
		<Text>Who are you meeting?</Text>
		<Input type="text" name="contact" defaultValue={interviewer} className="form formNew form_newInterview__contactField" />
		<br/>
		<Text>Phone or face-to-face?</Text>
		<Select name="type" items={interviewTypes} defaultValue={roleType} valueIdentifier="id" textIdentifier="label" />
		<br/><br/>
		<SubmitButton defaultValue="Save" onClick={onSubmit} />
		<Button onClick={onCancel}>Cancel</Button>
	</Form>
}

InterviewForm.propTypes = {
	heading: PropTypes.string,
	roles: PropTypes.array,
	roleId: PropTypes.number,
	roleType: PropTypes.string,
	interviewer: PropTypes.string,
	onSubmit: PropTypes.function,
	onCancel: PropTypes.function
};

InterviewForm.defaultProps = {
	heading: "New interview",
	roles: [],
	onSubmit: () => {},
	onCancel: () => {}
};

export default InterviewForm;