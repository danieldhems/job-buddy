import React, { Component } from 'react';
import ApplicationDispatcher from '../../dispatcher';
import RoleActions from '../../actions/role_actions';
import RoleStore from '../../stores/role_store';
import List from '../common/list';
import ListItem from '../common/list_item';
import RoleSummary from './role_summary';

export default class RoleList extends Component {
	constructor(){
		super();
		this.state = {};
		this.buildInitialState()
	}

	buildInitialState(){
		this.state.roles = [];
	}

	bindListeners(){
		this._onRoleStoreChange = RoleStore.addListener('change', this._onRoleStoreChange.bind(this));
	}

	removeListeners(){
		RoleStore.removeListener('change', this._onRoleStoreChange);
	}

	componentDidMount(){
		this.bindListeners();
		this._requestContent();
	}
	
	_buildStateFromStores(){
		this.setState({roles: roleStore.getAllRoles()});
		console.log('Roles in state:', this.state.roles)
	}

	componentWillUnmount(){
		this.removeListeners();
	}

	_onRoleStoreChange(){
		console.log('Role component receive Role Store change');
		this._buildStateFromStores();
	}

	_requestContent(){
		RoleActions.requestAllRoles();
	}

	removeListeners(){
		this.onRoleStoreChange = RoleStore.on('change', this);
	}

	render(){
		return (
			<List>
				{this.state.roles.map( item => {
					return (
						<ListItem key={item[0].id}>
							<RoleSummary {...item[0]} />
						</ListItem>
					)
				})}
			</List>
		)
	}
}
