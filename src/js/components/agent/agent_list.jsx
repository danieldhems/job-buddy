import React, { Component } from 'react';
import ApplicationDispatcher from '../../dispatcher';
import AgentActions from '../../actions/agent_actions';
import AgentStore from '../../stores/agent_store';
import List from '../common/list';
import ListItem from '../common/list_item';
import AgentSummary from './agent_summary';

export default class AgentList extends Component {
	constructor(){
		super();
		this.state = {};
		this.buildInitialState()
	}

	buildInitialState(){
		this.state.agents = [];
	}

	bindListeners(){
		this._onAgentStoreChange = AgentStore.addListener('change', this._onAgentStoreChange.bind(this));
	}

	removeListeners(){
		AgentStore.removeListener('change', this._onAgentStoreChange);
	}

	componentDidMount(){
		this.bindListeners();
		this._requestContent();
	}
	
	_buildStateFromStores(){
		this.setState({agents: AgentStore.getAllAgents()});
		console.log('Agents in state:', this.state.agents)
	}

	componentWillUnmount(){
		this.removeListeners();
	}

	_onAgentStoreChange(){
		console.log('Agent component receive Agent Store change');
		this._buildStateFromStores();
	}

	_requestContent(){
		AgentActions.requestAllAgents();
	}

	removeListeners(){
		this.onAgentStoreChange = AgentStore.on('change', this);
	}

	render(){
		return (
			<List>
				{this.state.agents.map( item => {
					return (
						<ListItem key={item[0].id}>
							<AgentSummary {...item[0]} />
						</ListItem>
					)
				})}
			</List>
		)
	}
}
