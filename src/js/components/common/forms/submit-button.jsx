import React, { Component, PropTypes } from 'react';
import ClassNameUtil from '../../../utils/class-name';

export default class Input extends Component {

  constructor(options) {
    super(options);
  }

  handleClick(e){
    e.preventDefault();
    this.props.onClick();
  }

  render() {
    const classNamesContent = ClassNameUtil.getComponentClassNames(this);
    return (
      <input
        className={classNamesContent}
        id={this.props.id || this.props.name}
        name={this.props.name}
        type="submit"
        value={this.props.name}
        onClick={this.handleClick.bind(this)}
      />
    )
  }

};

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  defaultClassName: PropTypes.string,
  className: PropTypes.string,
  classNames: PropTypes.array,
}
Input.defaultProps = {
  defaultValue: '',
  defaultClassName: '',
  className: '',
  classNames:[],
}
