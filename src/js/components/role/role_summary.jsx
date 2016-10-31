import React, { Component } from 'react';
import Text from '../common/text';
import Label from '../common/label';
import Heading from '../common/heading';
import Button from '../common/button';
import CrudActions from '../../actions/crud_actions';
import ItemActions from '../../actions/item_actions';
import RoleForm from './role_form';
import EndPointConstants from '../../constants/end_point_constants';

export default class RoleSummary extends Component {
	constructor(props){
		super(props);
	}

	remove(){
		CrudActions.remove('roles', this.props.id);
	}

	startEditing(){
		// Pass current item props to Item store for currentItem state
		// ItemActions.startEditing(this.state.itemData);
	}

	cancelEditing(){
		ItemActions.cancelEditing();
	}

	render(){
		// console.log('Rendering role summary component with itemData: ', this.state.itemData);
		if(!this.props.isEditing){
			return (
				<div className="role">
					<Heading level={3} className="role__titleLabel">{this.props.title} / {this.props.salary}</Heading>
					<Label className="role__clientText">{this.props.client} / {this.props.location}</Label><br/>
					<Text className="role__agentNameText">{this.props.agent_name} ({this.props.agent_phone_number})</Text><br/>
					<div className="role__notes">
						{this.props.notes}
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
}