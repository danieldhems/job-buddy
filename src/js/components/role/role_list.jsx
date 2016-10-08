import React, { Component } from 'react';
import { connect } from 'react-redux';
import CrudActions from '../../actions/crud_actions';
import List from '../common/list';
import ListItem from '../common/list_item';
import RoleSummary from './role_summary';
import RoleForm from './role_form';

class RoleList extends Component {
	constructor(){
		super();
	}

	componentDidMount() {
		CrudActions.hydrate('roles');
	}

	render(){
		return (
			<div>
				<List>
					{this.props.roles.map( (role, index) => {
						return (
							<ListItem key={index}>
								<RoleSummary {...role} />
							</ListItem>
						)
					})}
				</List>
				<RoleForm userAction="create" />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		roles: state.roles
	}
};

export default connect(mapStateToProps)(RoleList);