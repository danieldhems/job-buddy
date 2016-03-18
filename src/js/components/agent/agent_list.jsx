import React, { Component } from 'react';
import ApplicationDispatcher from '../../dispatcher';

import AgentStore from '../../stores/agent_store';
import CrudActions from '../../actions/crud_actions';

import AbstractComponent from '../abstract_component';
import List from '../common/list';
import ListItem from '../common/list_item';
import AgentSummary from './agent_summary';
import AgentForm from './agent_form';

import EndPointConstants from '../../constants/end_point_constants';
import ActionSourceConstants from '../../constants/source_types';

export default class AgentList extends AbstractComponent {
	constructor(){
		super();
	}
	
	buildStateFromStores(){
		this.setState({items: AgentStore.getAll()});
	}

	bindListeners(){
		this._onAgentStoreChange = this._onAgentStoreChange.bind(this);
	}

	addListeners(){
		AgentStore.addListener('change', this._onAgentStoreChange);
	}

	removeListeners(){
		AgentStore.removeListener('change', this._onAgentStoreChange);
	}

	_onAgentStoreChange(){
		console.log('AgentList component receive List Store change');
		this.buildStateFromStores();
	}

	_requestContent(){
		CrudActions.fetch(EndPointConstants.AGENT_END_POINT, ActionSourceConstants.AGENT);
	}

	render(){
		if(this.state.items){
			console.log(this.state.items)
			return (
				<div>
					<List>
						{this.state.items.map( (item, index) => {
							return (
								<ListItem key={'item-'+index}>
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
