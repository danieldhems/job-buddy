import React, { Component } from 'react';
import { connect } from 'react-redux';
import CrudActions from '../../actions/crud_actions';

import List from '../common/list';
import ListItem from '../common/list_item';
import AgentSummary from './agent_summary';
import AgentForm from './agent_form';

import EndPointConstants from '../../constants/end_point_constants';

class AgentList extends Component {
	constructor(){
		super();
	}

	componentDidMount() {
		CrudActions.hydrate('agents');
	}

	render(){
		return (
			<div>
				<List>
					{this.props.agents.map( (agent, index) => {
						return (
							<ListItem key={'item-'+index}>
								<AgentSummary initialItemData={agent} />
							</ListItem>
						)
					})}
				</List>
				<AgentForm userAction="create" />
			</div>
		)
	}
};

const mapStateToProps = (state) => {
	return {
		agents: state.agents
	}
};

export default connect(mapStateToProps)(AgentList);
