import React, { Component } from 'react';
import { connect } from 'react-redux';
import CrudActions from '../../actions/crud_actions';
import List from '../common/list';
import ListItem from '../common/list_item';
import Button from '../common/button';
import RoleSummary from './role_summary';
import RoleForm from './role_form';

class RoleList extends Component {
	constructor(){
		super();
		this.state = {
			showForm: false
		};
	}

	componentDidMount() {
		CrudActions.hydrate('roles');
	}

	openRoleForm(){
		this.setState({showForm: true});
	}

	onCancel(){
		this.setState({showForm: false});
	}

	render(){
		return (
			<div>
				<Button onClick={this.openRoleForm.bind(this)}>Add Role</Button>
				<List>
					{this.props.roles.map( (role, index) => {
						return (
							<ListItem key={index}>
								<RoleSummary {...role} />
							</ListItem>
						)
					})}
				</List>
				{ this.state.showForm && <RoleForm userAction="create" onCancel={this.onCancel.bind(this)} />}
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