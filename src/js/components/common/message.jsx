/*****************************************
 * Message component
 *****************************************/
import React, { Component, PropTypes } from 'react';
import ClassNameUtil from '../utils/class-name';
import MessageTypes from '../constants/message-types';
export default class Message extends Component{

  render(){
    if(this.props.text.length > 0){
      const classNamesContent = ClassNameUtil.getComponentClassNames(this);
      return (
        <div className={classNamesContent + ' ' + this.props.defaultClassName + '--' + this.props.type}>{this.props.text}</div>
      );
    }
    return null;
  }

};
Message.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  classNames: PropTypes.array
}
Message.defaultProps = {
  text: '',
  type: MessageTypes.NOTE,
  className: '',
  defaultClassName: 'fbra_message',
  classNames:[]
}
