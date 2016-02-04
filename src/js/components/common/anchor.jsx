import React, { Component, PropTypes } from 'react';
import ClassNameUtil from '../utils/class-name';
export default class Anchor extends Component {

  constructor(options){
    super(options);
    this.bindHandlers();
  }

  bindHandlers(){
    this.handleAnchorClick = this.handleAnchorClick.bind(this);
  }

  handleAnchorClick(event) {
    event.preventDefault();
    this.props.onClick(event);

    if (this.props.href) {
      window.location = this.props.href;
      return;
    }
  }

  render() {
    const classNamesContent = ClassNameUtil.getComponentClassNames(this);
    if(React.Children.count(this.props.children) > 0) {
      return (
        <a className={classNamesContent} href={this.props.href} target={this.props.target} title={this.props.title} onClick={this.handleAnchorClick}>
          {this.props.children}
        </a>
      );
    } else {
      return (
        <a className={classNamesContent} href={this.props.href} target={this.props.target} title={this.props.title} onClick={this.handleAnchorClick}></a>
      );
    }
    return null;
  }

};
Anchor.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
  classNames: PropTypes.array,
  children: PropTypes.node
}
Anchor.defaultProps = {
  href: '',
  target: '',
  title: '',
  defaultClassName: 'fbra_anchor',
  className: '',
  classNames:[],
  onClick: function(event){}
}
