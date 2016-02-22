import React, { Component } from 'react';
import ApplicationDispatcher from '../../dispatcher';
import CrudActions from '../../actions/crud_actions';
import RoleStore from '../../stores/role_store';
import List from '../common/list';
import ListItem from '../common/list_item';
import RoleSummary from './role_summary';
import RoleForm from '../role_form';
import EndPointConstants from '../../constants/end_point_constants';
import ActionInterestConstants from '../../constants/interest_types';

export default class RoleList extends Component {
	constructor(){
		super();
		this.state = {};
		this.buildInitialState();
		this.bindListeners();
	}

	buildInitialState(){
		this.state.items = [];
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
		console.log(typeof this._onRoleStoreChange);
		RoleStore.removeListener('change', this._onRoleStoreChange);
	}

	componentDidMount(){
		this.addListeners();
		this._requestContent();
	}

	componentWillUnmount(){
		this.removeListeners();
	}
	
	buildStateFromStores(){
		this.setState({items: RoleStore.getItems()});
		console.log('Items in state:', this.state.items)
	}


	_requestContent(){
		CrudActions.fetch(EndPointConstants.ROLE_END_POINT, ActionInterestConstants.ROLE);
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
