import React, { Component } from 'react';
import Text from '../common/text';
import Label from '../common/label';
import Button from '../common/button';
import CrudActions from '../../actions/crud_actions';
import ItemActions from '../../actions/item_actions';
import InterviewForm from './interview_form';
import EndPointConstants from '../../constants/end_point_constants';
import ItemEditStore from '../../stores/item_edit_store';
import AbstractComponent from '../abstract_component';
import ActionSourceTypes from '../../constants/source_types';

export default class InterviewSummary extends AbstractComponent {
	constructor(props){
		super(props);
	}

	bindListeners(){
		this._onItemEditStoreChange = this._onItemEditStoreChange.bind(this);
	}

	addListeners(){
		ItemEditStore.addListener('change', this._onItemEditStoreChange);
	}
	
	removeListeners(){
		ItemEditStore.removeListener('change', this._onItemEditStoreChange);	
	}

	buildInitialState(){
		this.setState({isEditing:false, itemData: this.props.initialItemData});
	}

	getEditingState(){
		const CurrentEditingState = ItemEditStore.getState();
		let itemData, isEditing;

		if(CurrentEditingState.itemDataInEdit && CurrentEditingState.itemDataInEdit.id === this.state.itemData.id){
			itemData = CurrentEditingState.itemDataInEdit
		} else {
			itemData = this.props.initialItemData
		}
		
		if(CurrentEditingState.isEditing && CurrentEditingState.itemDataInEdit.id === this.state.itemData.id){
			isEditing = true;
		} else {
			isEditing = false;
		}

		this.setState({itemData, isEditing});
	}

	_onItemEditStoreChange(){
		this.getEditingState();
	}

	delete(){		
		CrudActions.delete(EndPointConstants.INTERVIEW_END_POINT, this.state.itemData.id, ActionSourceTypes.INTERVIEW);
	}

	enterEditMode(){
		// Pass current item props to Item store for currentItem state
		ItemActions.startEditing(this.state.itemData);
	}

	cancelEditMode(){
		ItemActions.cancelEditing();
	}

	getInterviewType(type){
		switch(type){
			case 1:
				return 'Phone';
				break;
			case 2:
				return 'Face-to-face';
				break;
		}
	}

	render(){
		if(this.state.itemData && !this.state.isEditing){
			const interviewType = this.getInterviewType(this.state.itemData.type);
			return (
				<div>
					<Label className="interview__datetimeLabel">Date / time</Label><br/>
					<Text className="interview__datetimeText">{this.state.itemData.datetime}</Text><br/>
					<Label className="interview__titleLabel">Role title</Label><br/>
					<Text className="interview__titleText">{this.state.itemData.title}</Text><br/>
					<Label className="interview__roleLabel">Client</Label><br/>
					<Text className="interview__roleText">{this.state.itemData.client}</Text><br/>
					<Label className="interview__salaryLabel">Salary</Label><br/>
					<Text className="interview__salaryText">{this.state.itemData.salary}</Text><br/>
					<Label className="interview__locationLabel">Location</Label><br/>
					<Text className="interview__locationText">{this.state.itemData.location}</Text><br/>
					<Label className="interview__typeLabel">Type</Label><br/>
					<Text className="interview__typeText">{interviewType}</Text><br/>
					<Label className="interview__interviewStageLabel">Interview Stage</Label><br/>
					<Text className="interview__interviewStageText">{this.state.itemData.stage}</Text><br/>
					<Label className="interview__agentNameLabel">Agent</Label><br/>
					<Text className="interview__agentNameText">{this.state.itemData.agent_name}</Text><br/>
					<Button onClick={this.delete.bind(this)}>Remove</Button>
					<Button onClick={this.enterEditMode.bind(this)}>Edit</Button>
				</div>
			)
		} else {
			return <InterviewForm userAction="update" onCancel={this.cancelEditMode.bind(this)} {...this.state.itemData} />
		}
	}
}