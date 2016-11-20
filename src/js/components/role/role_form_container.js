import { connect } from 'react-redux';

import CrudActions from '../../actions/crud_actions';
import ItemActions from '../../actions/item_actions';
import EndPointConstants from '../../constants/end_point_constants';
import RoleForm from './role_form';

const onSubmit = () => {
	let userData = form2js(ReactDOM.findDOMNode(this));
	switch(this.props.userAction){
		case 'create':
			CrudActions.create('roles', userData);
			break;
		case 'update':
			userData = Object.assign(userData, {id: this.props.id});
			CrudActions.update(EndPointConstants.ROLE_END_POINT, userData, ActionSourceTypes.ROLE);
			break;
		default:
	}
}

const onCancelEditing = () => {

}

const getHeading = () => {
	return this.props.userAction === 'create' ? 'New role'
		: this.props.userAction === 'update' ? 'Edit role'
		: "";
}

const mapDispatchToProps = (dispatch) => ({
	onSubmit,
	onCancelEditing,
	getHeading
});

const container =  connect({}, mapDispatchToProps)(RoleForm);

export default container;