import { connect } from 'react-redux';

import CrudActions from '../../actions/crud_actions';
import ItemActions from '../../actions/item_actions';
import EndPointConstants from '../../constants/end_point_constants';

import RoleSummary from './role_summary';

const mapDispatchToProps = (dispatch) => ({
	remove: (id) => dispatch(remove('roles', id)),
	// update: (id, payload) => dispatch(update('roles', id, payload))
}};

const container = connect({}, mapDispatchToProps)(RoleSummary);

export default container;