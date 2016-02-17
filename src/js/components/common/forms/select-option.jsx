import React, { Component, PropTypes } from 'react';
import ClassNameUtil from '../../../utils/class-name';

export default class SelectOption extends Component{

  render(){
    const classNamesContent = ClassNameUtil.getComponentClassNames(this);
    return (
      <option key={this.props.key} className={classNamesContent} value={this.props.value} select={this.props.selected}>{this.props.text}</option>
    );
  }
}

SelectOption.propTypes = {
  value: PropTypes.any,
  text: PropTypes.string,
  selected: PropTypes.string,
  className: PropTypes.string,
  classNames: PropTypes.array
}

SelectOption.defaultProps = {
  defaultClassName: 'fbra_selectOption',
  className: '',
  classNames:[]
}
