import React, { Component } from 'react';
import Text from '../common/text';
import Label from '../common/label';
import Button from '../common/button';
import CrudActions from '../../actions/crud_actions';
import ItemActions from '../../actions/item_actions';
import RoleForm from '../role_form';
import ItemEditStore from '../../stores/item_edit_store';
import EndPointConstants from '../../constants/end_point_constants';

export default class RoleSummary extends Component {
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
		console.log('Props for role summary: ', this.props.initialItemData);
	}

	getStateFromStore(){
		const ItemEditStoreCurrentState = ItemEditStore.getState();
		this.setState({
			isEditing: ItemEditStoreCurrentState.isEditing && ItemEditStoreCurrentState.itemDataInEdit.id === this.state.itemData.id,
			itemData: ItemEditStoreCurrentState.itemDataInEdit && ItemEditStoreCurrentState.itemDataInEdit.id === this.state.itemData.id ? ItemEditStoreCurrentState.itemDataInEdit : this.props.initialItemData
		})
	}

	bindListeners(){
		this._onItemEditStoreChange = ItemEditStore.addListener('change', this._onItemEditStoreChange.bind(this));
	}

	_onItemEditStoreChange(){
		this.getStateFromStore();
	}

	delete(){
		CrudActions.delete(EndPointConstants.ROLE_END_POINT, this.state.itemData.id);
	}

	enterEditMode(){
		// Pass current item props to Item store for currentItem state
		ItemActions.startEditing(this.state.itemData);
	}

	cancelEditMode(){
		ItemActions.cancelEditing();
	}

	render(){
		console.log('Rendering role summary component with itemData: ', this.state.itemData);
		if(this.state.itemData && !this.state.isEditing){
			return (
				<div>
					<Label className="role__titleLabel">Title</Label><br/>
					<Text className="role__titleText">{this.state.itemData.title}</Text><br/>
					<Label className="role__clientLabel">Client</Label><br/>
					<Text className="role__clientText">{this.state.itemData.client}</Text><br/>
					<Label className="role__salaryLabel">Salary</Label><br/>
					<Text className="role__salaryText">{this.state.itemData.salary}</Text><br/>
					<Label className="role__locationLabel">Location</Label><br/>
					<Text className="role__locationText">{this.state.itemData.location}</Text><br/>
					<Label className="role__interviewStageLabel">Interview Stage</Label><br/>
					<Text className="role__interviewStageText">{this.state.itemData.interviewStage}</Text><br/>
					<Button onClick={this.delete.bind(this)}>Remove</Button>
					<Button onClick={this.enterEditMode.bind(this)}>Edit</Button>
				</div>
			)
		} else {
			return <RoleForm userAction="update" onCancel={this.cancelEditMode.bind(this)} {...this.state.itemData} />
		}
	}
}