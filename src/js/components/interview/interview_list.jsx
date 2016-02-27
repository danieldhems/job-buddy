import React, { Component } from 'react';
import ApplicationDispatcher from '../../dispatcher';
import CrudActions from '../../actions/crud_actions';
import InterviewStore from '../../stores/interview_store';
import List from '../common/list';
import ListItem from '../common/list_item';
import InterviewSummary from './interview_summary';
import InterviewForm from './interview_form';
import EndPointConstants from '../../constants/end_point_constants';
import ActionInterestConstants from '../../constants/interest_types';
import AbstractComponent from '../abstract_component';

export default class InterviewList extends AbstractComponent {
	constructor(){
		super();
	}

	_onInterviewStoreChange(){
		console.log('InterviewList component receive List Store change');
		this.buildStateFromStores();
	}

	bindListeners(){
		this._onInterviewStoreChange = this._onInterviewStoreChange.bind(this);
	}

	addListeners(){
		InterviewStore.addListener('change', this._onInterviewStoreChange);
	}

	removeListeners(){
		console.log(typeof this._onInterviewStoreChange);
		InterviewStore.removeListener('change', this._onInterviewStoreChange);
	}
	
	buildStateFromStores(){
		this.setState({items: InterviewStore.getAll()});
		console.log('Items in state:', this.state.items)
	}

	_requestContent(){
		CrudActions.fetch(EndPointConstants.INTERVIEW_END_POINT, ActionInterestConstants.INTERVIEW);
	}

	render(){
		if(this.state.items){
			return (
				<div>
					<List>
						{this.state.items.map( (item, index) => {
							return (
								<ListItem key={index}>
									<InterviewSummary initialItemData={item} />
								</ListItem>
							)
						})}
					</List>
					<InterviewForm userAction="create" />
				</div>
			)
		} else {
			return null;
		}
	}
}
