import React, { Component } from 'react';
import Text from '../common/text';
import Label from '../common/label';
import Button from '../common/button';
import CrudActions from '../../actions/crud_actions';
import ItemActions from '../../actions/item_actions';
import AgentForm from '../agent_form';
import ItemStore from '../../stores/item_store';
import EndPointConstants from '../../constants/end_point_constants';

export default class AgentSummary extends Component {
	constructor(props){
		super(props);
		this.state = {};
	}

	componentDidMount(){
		this.buildInitialState();
		this.bindListeners();
	}

	buildInitialState(){
		this.setState({isEditing:false, itemData: this.props.initialItemData});
	}

	getStateFromStore(){
		const ItemStoreCurrentState = ItemStore.getEditingState();
		this.setState({
			isEditing: ItemStoreCurrentState.isEditing && ItemStoreCurrentState.currentItem.id === this.state.itemData.id,
			itemData: ItemStoreCurrentState.currentItem.id && ItemStoreCurrentState.currentItem.id === this.state.itemData.id ? ItemStore.getItem() : this.props.initialItemData
		})
	}

	bindListeners(){
		this._onItemStoreChange = ItemStore.addListener('change', this._onItemStoreChange.bind(this));
	}

	_onItemStoreChange(){
		this.getStateFromStore();
	}

	deleteAgent(){
		CrudActions.delete(EndPointConstants.AGENT_END_POINT, this.state.itemData.id);
	}

	enterEditMode(){
		// Pass current item props to Item store for currentItem state
		ItemActions.startEditing(this.state.itemData);
	}

	cancelEditMode(){
		ItemActions.cancelEditing();
	}

	render(){
		console.log('Rendering agent summary component');
		if(this.state.itemData && !this.state.isEditing){
			return (
				<div>
					<Label className="agent__nameLabel">Name</Label><br/>
					<Text className="agent-nameText">{this.state.itemData.name}</Text><br/>
					<Label className="agent__companyLabel">Company</Label><br/>
					<Text className="agent-companyText">{this.state.itemData.company}</Text><br/>
					<Label className="agent__phoneNumberLabel">Phone number</Label><br/>
					<Text className="agent-phoneNumberText">{this.state.itemData.phone_number}</Text><br/>
					<Label className="agent__mobileNumberLabel">Mobile number</Label><br/>
					<Text className="agent-mobileNumberText">{this.state.itemData.mobile_number}</Text><br/>
					<Label className="agent__emailLabel">Email address</Label><br/>
					<Text className="agent-emailText">{this.state.itemData.email_address}</Text><br/>
					<Button onClick={this.deleteAgent.bind(this)}>Remove</Button>
					<Button onClick={this.enterEditMode.bind(this)}>Edit</Button>
				</div>
			)
		} else {
			return <AgentForm userAction="update" onCancel={this.cancelEditMode.bind(this)} {...this.state.itemData} />
		}
	}
}