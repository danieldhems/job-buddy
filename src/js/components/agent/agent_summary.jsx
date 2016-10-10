import React, { Component } from 'react';
import Text from '../common/text';
import Label from '../common/label';
import Button from '../common/button';
import CrudActions from '../../actions/crud_actions';
import ItemActions from '../../actions/item_actions';
import AgentForm from './agent_form';
import EndPointConstants from '../../constants/end_point_constants';

export default class AgentSummary extends Component {
	constructor(){
		super();
	}

	deleteAgent(){
		CrudActions.delete(EndPointConstants.AGENT_END_POINT, this.state.itemData.id, ActionSourceTypes.AGENT);
	}

	enterEditMode(){
		// Pass current item props to Item store for currentItem state
		ItemActions.startEditing(this.state.itemData);
	}

	cancelEditMode(){
		ItemActions.cancelEditing();
	}

	render(){
		if(!this.props.isEditing){
			return (
				<div>
					<Label className="agent__nameLabel">Name</Label><br/>
					<Text className="agent-nameText">{this.props.name}</Text><br/>
					<Label className="agent__companyLabel">Company</Label><br/>
					<Text className="agent-companyText">{this.props.company}</Text><br/>
					<Label className="agent__phoneNumberLabel">Phone number</Label><br/>
					<Text className="agent-phoneNumberText">{this.props.phone_number}</Text><br/>
					<Label className="agent__mobileNumberLabel">Mobile number</Label><br/>
					<Text className="agent-mobileNumberText">{this.props.mobile_number}</Text><br/>
					<Label className="agent__emailLabel">Email address</Label><br/>
					<Text className="agent-emailText">{this.props.email_address}</Text><br/>
					<Button onClick={this.deleteAgent.bind(this)}>Remove</Button>
					<Button onClick={this.enterEditMode.bind(this)}>Edit</Button>
				</div>
			)
		} else {
			return <AgentForm userAction="update" onCancel={this.cancelEditMode.bind(this)} {...this.props} />
		}
	}
}