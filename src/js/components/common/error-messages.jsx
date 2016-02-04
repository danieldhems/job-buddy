/*****************************************
 * Error messages component
 *****************************************/
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import Message from "./message.jsx";
import MessageTypes from "../constants/message-types";
import DebugUtil from "../utils/debug";
/**
 * Error messages React Component
 */
export default class ErrorMessages extends Component {

  render(){
    if(this.props.errors.length > 0){
      const messages = this.props.errors.map((error, index) => {
        return <Message type={MessageTypes.ERROR} text={error.message} key={`error-message-${index}`} />
      });
      return (
        <div className={classnames('fbra_messages', 'fbra_test_errorMessages')}>
          {messages}
        </div>
      );
    }
    return null;
  }

};
ErrorMessages.defaultProps = {
  errors: []
}
ErrorMessages.propTypes = {
  errors: PropTypes.array
}
