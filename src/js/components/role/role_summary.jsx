import React, { Component } from 'react';
import Text from '../common/text';
import Label from '../common/label';
import Button from '../common/button';
import CrudActions from '../../actions/crud_actions';
import ItemActions from '../../actions/item_actions';
import RoleForm from './role_form';
import EndPointConstants from '../../constants/end_point_constants';

export default class RoleSummary extends Component {
	constructor(props){
		super(props);
	}

	delete(){
		// CrudActions.delete(EndPointConstants.ROLE_END_POINT, this.state.itemData.id, ActionSourceTypes.ROLE);
	}

	enterEditMode(){
		// Pass current item props to Item store for currentItem state
		// ItemActions.startEditing(this.state.itemData);
	}

	cancelEditMode(){
		ItemActions.cancelEditing();
	}

	render(){
		// console.log('Rendering role summary component with itemData: ', this.state.itemData);
		if(!this.props.isEditing){
			return (
				<div>
					<Label className="role__titleLabel">Title</Label><br/>
					<Text className="role__titleText">{this.props.title}</Text><br/>
					<Label className="role__clientLabel">Client</Label><br/>
					<Text className="role__clientText">{this.props.client}</Text><br/>
					<Label className="role__salaryLabel">Salary</Label><br/>
					<Text className="role__salaryText">{this.props.salary}</Text><br/>
					<Label className="role__locationLabel">Location</Label><br/>
					<Text className="role__locationText">{this.props.location}</Text><br/>
					<Label className="role__interviewStageLabel">Interview Stage</Label><br/>
					<Text className="role__interviewStageText">{this.props.interview_stage}</Text><br/>
					<Label className="role__agentNameLabel">Agent</Label><br/>
					<Text className="role__agentNameText">{this.props.agent_name}</Text><br/>
					<Button onClick={this.delete.bind(this)}>Remove</Button>
					<Button onClick={this.enterEditMode.bind(this)}>Edit</Button>
				</div>
			)
		} else {
			return <RoleForm userAction="update" onCancel={this.cancelEditMode.bind(this)} {...this.state.itemData} />
		}
	}
}