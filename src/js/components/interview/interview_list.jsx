import React, { Component } from 'react';
import AbstractComponent from '../abstract_component';
import CrudActions from '../../actions/crud_actions';
import List from '../common/list';
import ListItem from '../common/list_item';
import InterviewSummary from './interview_summary';
import InterviewForm from './interview_form';
import EndPointConstants from '../../constants/end_point_constants';

export default class InterviewList extends AbstractComponent {
	constructor(){
		super();
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
