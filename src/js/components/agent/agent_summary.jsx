import React, { Component } from 'react';
import Text from '../common/text';
import Label from '../common/label';
import Button from '../common/button';
import AgentActions from '../../actions/agent_actions';
import AgentForm from '../agent_form';

export default class AgentSummary extends Component {
	constructor(options){
		super(options);
		this.state = {}
	}

	componentDidMount(){
		this.buildInitialState();
	}

	buildInitialState(){
		this.setState({isEditing:false});
	}

	deleteAgent(){
		AgentActions.deleteAgent(this.props.id);
	}

	enterEditMode(){
		this.setState({isEditing:true});
	}

	cancelEditMode(){
		this.setState({isEditing:false});
	}

	render(){
		console.log('Rendering agent summary component');
		if(!this.state.isEditing){
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
					<Label className="agent__emailLabel">Email address</Label><br/><br/>
					<Text className="agent-emailText">{this.props.email_address}</Text><br/><br/>
					<Button onClick={this.deleteAgent.bind(this)}>Remove</Button>
					<Button onClick={this.enterEditMode.bind(this)}>Edit</Button>
				</div>
			)
		} else {
			return <AgentForm userAction="update" onCancel={this.cancelEditMode.bind(this)} {...this.props} />
		}
	}
}