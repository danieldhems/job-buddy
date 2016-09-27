import React, { Component } from 'react';
import AbstractComponent from '../abstract_component';
import CrudActions from '../../actions/crud_actions';
import List from '../common/list';
import ListItem from '../common/list_item';
import RoleSummary from './role_summary';
import RoleForm from './role_form';
import EndPointConstants from '../../constants/end_point_constants';

export default class RoleList extends AbstractComponent {
	constructor(){
		super();
	}

	render(){
		if(this.props.items){
			return (
				<div>
					<List>
						{this.state.items.map( (item, index) => {
							return (
								<ListItem key={index}>
									<RoleSummary initialItemData={item} />
								</ListItem>
							)
						})}
					</List>
					<RoleForm userAction="create" />
				</div>
			)
		} else {
			return null;
		}
	}
}
