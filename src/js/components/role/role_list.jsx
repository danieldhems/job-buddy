import React, { Component } from 'react';
import CrudActions from '../../actions/crud_actions';
import List from '../common/list';
import ListItem from '../common/list_item';
import RoleSummary from './role_summary';
import RoleForm from './role_form';
import EndPointConstants from '../../constants/end_point_constants';
import ActionSourceConstants from '../../constants/source_types';
import AbstractComponent from '../abstract_component';

export default class RoleList extends AbstractComponent {
	constructor(){
		super();
	}

	_onRoleStoreChange(){
		console.log('RoleList component receive List Store change');
		this.buildStateFromStores();
	}

	bindListeners(){
		this._onRoleStoreChange = this._onRoleStoreChange.bind(this);
	}

	addListeners(){
		RoleStore.addListener('change', this._onRoleStoreChange);
	}

	removeListeners(){
		RoleStore.removeListener('change', this._onRoleStoreChange);
	}
	
	buildStateFromStores(){
		this.setState({items: RoleStore.getAll()});
		console.log('Items in state:', this.state.items)
	}

	_requestContent(){
		CrudActions.fetch(EndPointConstants.ROLE_END_POINT, ActionSourceConstants.ROLE);
	}

	render(){
		if(this.state.items){
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
