import React, { Component, PropTypes } from 'react';
import ClassNameUtil from '../utils/class-name';
export default class Button extends Component {

  constructor(options) {
    super(options);
    this.bindHandlers();
  }

  bindHandlers() {
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(event) {
    event.preventDefault();
    this.props.onClick(event);
  }

  render() {
    const classNamesContent = ClassNameUtil.getComponentClassNames(this);
    if(React.Children.count(this.props.children) > 0) {
      return (
        <button className={classNamesContent} title={this.props.title} disabled={this.props.disabled} onClick={this.handleButtonClick}>
          {this.props.children}
        </button>
      );
    } else {
      return (
        <button className={classNamesContent} title={this.props.title} disabled={this.props.disabled} onClick={this.handleButtonClick}></button>
      );
    }
    return null;
  }

};
Button.propTypes = {
  title: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  classNames: PropTypes.any,
  children: PropTypes.node
}
Button.defaultProps = {
  title: '',
  disabled: false,
  defaultClassName: 'fbra_button',
  className: '',
  classNames: [],
  children: [],
  onClick: function(event){}
}
