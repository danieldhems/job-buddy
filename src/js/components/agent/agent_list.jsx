import React, { Component } from 'react';
import ApplicationDispatcher from '../../dispatcher';
import CrudActions from '../../actions/crud_actions';
import ListStore from '../../stores/list_store';
import List from '../common/list';
import ListItem from '../common/list_item';
import AgentSummary from './agent_summary';
import EndPointConstants from '../../constants/end_point_constants';

export default class AgentList extends Component {
	constructor(){
		super();
		this.state = {};
		this.buildInitialState();
	}

	buildInitialState(){
		this.state.agents = null;
	}

	bindListeners(){
		this._onListStoreChange = ListStore.addListener('change', this._onListStoreChange.bind(this));
	}

	removeListeners(){
		ListStore.removeListener('change', this._onListStoreChange);
	}

	componentDidMount(){
		this.bindListeners();
		this._requestContent();
	}
	
	_buildStateFromStores(){
		this.setState({items: ListStore.getItems()});
		console.log('Items in state:', this.state.items)
	}

	componentWillUnmount(){
		this.removeListeners();
	}

	_onListStoreChange(){
		console.log('AgentList component receive List Store change');
		this._buildStateFromStores();
	}

	_requestContent(){
		CrudActions.fetch(EndPointConstants.AGENT_END_POINT);
	}

	removeListeners(){
		this.onListStoreChange = ListStore.on('change', this);
	}

	render(){
		if(this.state.items){
			return (
				<List>
					{this.state.items.map( (item, index) => {
						return (
							<ListItem key={index}>
								<AgentSummary {...item} />
							</ListItem>
						)
					})}
				</List>
			)
		} else {
			return null;
		}
	}
}
