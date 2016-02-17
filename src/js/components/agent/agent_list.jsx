import React, { Component } from 'react';
import ApplicationDispatcher from '../../dispatcher';
import CrudActions from '../../actions/crud_actions';
import ListStore from '../../stores/list_store';
import List from '../common/list';
import ListItem from '../common/list_item';
import AgentSummary from './agent_summary';
import AgentForm from '../agent_form';
import EndPointConstants from '../../constants/end_point_constants';

export default class AgentList extends Component {
	constructor(){
		super();
		this.state = {};
		this.ListStore = new ListStore();
		this.buildInitialState();
	}

	buildInitialState(){
		this.state.agents = null;
	}

	bindListeners(){
		this._onListStoreChange = this.ListStore.addListener('change', this._onListStoreChange.bind(this));
	}

	removeListeners(){
		this._onListStoreChange = null;
	}

	componentWillUnmount(){
		this.removeListeners();
	}

	componentDidMount(){
		this.bindListeners();
		this._requestContent();
	}
	
	buildStateFromStores(){
		this.setState({items: this.ListStore.getItems()});
		console.log('Items in state:', this.state.items)
	}

	_onListStoreChange(){
		console.log('AgentList component receive List Store change');
		this.buildStateFromStores();
	}

	_requestContent(){
		CrudActions.fetch(EndPointConstants.AGENT_END_POINT);
	}

	render(){
		if(this.state.items){
			return (
				<div>
					<List>
						{this.state.items.map( (item, index) => {
							return (
								<ListItem key={index}>
									<AgentSummary initialItemData={item} />
								</ListItem>
							)
						})}
					</List>
					<AgentForm userAction="create" />
				</div>
			)
		} else {
			return null;
		}
	}
}
