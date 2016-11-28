import { connect } from 'react-redux';
import InterviewForm from './interview_form';

const onSubmit = (dispatch) => {
	let userData = form2js(ReactDOM.findDOMNode(this));
	switch(this.props.userAction){
		case 'create':
			userData.type = parseInt(userData.type,10);
			CrudActions.create(EndPointConstants.INTERVIEW_END_POINT, userData, ActionSourceTypes.INTERVIEW);
			break;
		case 'update':
			userData = Object.assign(userData, {id: this.props.id});
			CrudActions.update(EndPointConstants.INTERVIEW_END_POINT, userData, ActionSourceTypes.INTERVIEW);
			break;
		default:
	}
}

const onCancel = (dispatch) => {

};

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => {
	onSubmit: onSubmit(dispatch),
	onCancel: onCancel(dispatch) 
};

const container = connect(mapStateToProps, mapDispatchToProps)(InterviewForm);

export default container;