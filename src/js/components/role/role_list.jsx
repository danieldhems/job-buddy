import React, { Component } from 'react';
import { connect } from 'react-redux';
import CrudActions from '../../actions/crud_actions';
import List from '../common/list';
import ListItem from '../common/list_item';
import Button from '../common/button';
import RoleSummary from './role_summary';
import RoleForm from './role_form';

class RoleList extends Component {
	constructor(props){
		super(props);
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
								<RoleSummary {...role} remove={remove(role.id)} />
							</ListItem>
						)
					})}
				</List>
				<RoleForm userAction="create" />
			</div>
		)
	}
};

const mapStateToProps = (state) => {
	roles: state.roles
};

const mapDispatchToProps = (dispatch) => {
	remove: (id) => dispatch(CrudActions.remove('roles', id))
};

export default connect(mapStateToProps, mapDispatchToProps)(RoleList);