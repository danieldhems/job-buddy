import React, { Component } from 'react';
import { connect } from 'react-redux';
import CrudActions from '../../actions/crud_actions';
import List from '../common/list';
import ListItem from '../common/list_item';
import InterviewSummary from './interview_summary';
import InterviewForm from './interview_form';
import EndPointConstants from '../../constants/end_point_constants';

class InterviewList extends Component {
	constructor(){
		super();
	}

	render(){
		return (
			<div>
				<List>
					{this.props.interviews.map( (interview, index) => {
						return (
							<ListItem key={index}>
								<InterviewSummary initialItemData={interview} />
							</ListItem>
						)
					})}
				</List>
				<InterviewForm userAction="create" />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		interviews: state.interviews
	}
};

export default connect(mapStateToProps)(InterviewList);