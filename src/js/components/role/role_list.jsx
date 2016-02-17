import React, { Component } from 'react';
import ApplicationDispatcher from '../../dispatcher';
import CrudActions from '../../actions/crud_actions';
import ListStore from '../../stores/list_store';
import List from '../common/list';
import ListItem from '../common/list_item';
import RoleSummary from './role_summary';
import RoleForm from '../role_form';
import EndPointConstants from '../../constants/end_point_constants';


export default class AgentList extends Component {
	constructor(){
		super();
		this.state = {};
		this.buildInitialState();
		this.ListStore = new ListStore();
	}

	buildInitialState(){
		this.state.roles = null;
	}

	bindListeners(){
		this._onListStoreChange = this.ListStore.addListener('change', this._onListStoreChange.bind(this));
	}

	removeListeners(){
		this._onListStoreChange = null;
	}

	componentDidMount(){
		this.bindListeners();
		this._requestContent();
	}

	componentWillUnmount(){
		this.removeListeners();
	}
	
	buildStateFromStores(){
		this.setState({items: this.ListStore.getItems()});
		console.log('Items in state:', this.state.items)
	}

	_onListStoreChange(){
		console.log('RoleList component receive List Store change');
		this.buildStateFromStores();
	}

	_requestContent(){
		CrudActions.fetch(EndPointConstants.ROLE_END_POINT);
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
